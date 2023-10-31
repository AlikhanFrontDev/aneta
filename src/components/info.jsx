import React from "react";
import styled from "styled-components";
import image from "../assets/img/bannerimage.webp";

export default function Info() {
  return (
    <Container>
      <div className="container">
        <h1 className="title">
          Aslida <span>2</span> turdagi odamlar mavjud...
        </h1>
        <h3 className="title2">
          Muvaffaqiyatli Yo'lingizni Pro Digital o'quvchilari kabi yarating !
          O'Z MATRITSANGIZNI BUZIB CHIQING !
        </h3>
        <div className="boxes">
          <div className="box">
            <img src={image} alt="" />
            <h1 className="head">KUZATUVCHILAR</h1>
            <p>
              Shunday Insonlar borki, ular doimo Yangi va Qaynoq Imkoniyatlarni
              poylab yurishadi, o'sha imkoniyatlar ularning oldidan chiqqanida
              esa, afsuski bu imkoniyatlardan foydalanmaslik uchun har xil
              bahonalar topishadi. Masalan, PULIM YO'Q, VAQTIM YO'Q, SHAROITIM
              TO'G'RI KELMAYDI va h.k ...
            </p>
            <p>
              Va eng yakunida xuddi o'sha imkoniyatlardan boshqa insonlar
              foydalangan holda Muvaffaqiyatga erishgan paytda ular hamma
              narsadan quruq qolishgan bo'ladi!
            </p>
          </div>
          <div className="box">
            <img src={image} alt="" />
            <h1 className="head">HARAKAT QILUVCHILAR</h1>
            <p>
              Bu toifadagi insonlar Imkoniyatlar bilan yuzma - yuz kelishganda,
              Mas'uliyatni qo'lga olishadi va shaxsiy maqsadga erishish yo'lida
              olg'a qadam tashlashga QO'RQISHMAYDI. To'g'ri, ular uzoq vaqt
              harakat qilishlari, qiyinchiliklarga duch kelishlari mumkin ,
              lekin ENG KUCHLI Maqsadlariga yetishganlarida, o'z komfort
              zonalarini BUZIB CHIQQANLIKLARIDAN rohatlanishadi.
            </p>
          </div>
        </div>
        <h1 className="conclusion">
          Hozir qaror qilishning ayni vaqti: siz qaysi yo'lni tanlaysiz?
          "KUZATUVCHI" pozitsiyasida qolib, afsus qilishnimi yoki "HARAKAT
          QILUVCHI"lar ichida ENG ZO'RI bo'lishni? Tanlov faqat va faqat
          o'zingizga bog'liq !
        </h1>
      </div>
    </Container>
  );
}

const Container = styled.div`
  height: 120vh;
  background-color: #181b21;
  .conclusion {
    color: #fff;
    text-align: center;
    margin: 40px 15%;
    font-size: 26px;
    width: 70%;
  }
  img {
    width: 25%;
    height: 20%;
    object-fit: cover;
    border-radius: 12px;
    margin: 30px;
  }
  .head {
    color: #fff;
    font-size: 30px;
  }
  .box p {
    color: #fff;
  }
  .title {
    color: #fff;
    text-align: center;
    padding: 20px 0;
  }
  .title span {
    color: red;
    font-size: 36px;
  }
  .title2 {
    color: #fff;
    text-align: center;
    padding: 20px 0;
  }
  .boxes {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
  .box {
    background-color: #000;
    height: 70vh;
    width: 40%;
    border-radius: 12px;
    text-align: center;
    padding: 20px;
  }
`;
