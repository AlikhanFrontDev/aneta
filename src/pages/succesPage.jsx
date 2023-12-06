import jsPDF from "jspdf";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function SuccesPage() {
  const [myData, setMyData] = useState(null);

  useEffect(() => {
    // Retrieve data from localStorage
    const data = localStorage.getItem("messageData");
    if (data) {
      // Parse the data if found
      setMyData(JSON.parse(data));
    }
  }, []);

  const generatePDF = () => {
    if (myData) {
      const doc = new jsPDF();
      const fontStyle = "Arial";
      const fontSize = 12;

      doc.setFont(fontStyle);
      doc.setFontSize(fontSize);

      doc.text(`Tranzaksiya Id: ${myData.item.transactionId}`, 10, 10);
      doc.text(`To'langan summa: ${myData.item.amount}`, 10, 20);
      doc.text(`To'lovchi kartasi: ${myData.item.payerCard}`, 10, 30);
      doc.text(`To'lovchi ismi: ${myData.item.userFullName}`, 10, 40);
      doc.text(`To'lov holati: ${myData.item.status}`, 10, 50);
      doc.text(`To'lov vaqti: ${myData.item.transactionTime}`, 10, 60);
      doc.text(`Obuna muddati: ${myData.item.duration} oy`, 10, 70);

      // Save the PDF
      doc.save("myData.pdf");
    }
  };

  return (
    <Container>
      {myData ? (
        <>
          <h2>{myData.message}</h2>
          <div className="flex">
            <Link to={"/courses"} className="link">
              Kurslarni hoziroq boshlash
            </Link>
            <button onClick={generatePDF}>
              To'lov haqidagi chekni yuklab olish
            </button>
          </div>
        </>
      ) : (
        <p>No data found in localStorage</p>
      )}
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #0000006e;
  .link {
    padding: 13px;
    border-radius: 12px;
    background-color: #000000;
    color: #fff;
    text-decoration: none;
    text-align: center;
    margin: 10px;
  }
  .flex {
    display: flex;
    width: 50%;
    justify-content: space-around;
    margin: 30px;
    flex-wrap: wrap;
  }
  button {
    margin: 10px;
    border: none;
    padding: 10px;
    border-radius: 12px;
    color: red;
    background-color: #000000;
  }
  h2 {
    color: red;
    text-align: center;
  }
`;
