import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styled from "styled-components";

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Container>
      <h1 className="title">Tez so'raladigan savollar</h1>
      <div className="container">
        <Accordion
          className="top"
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            // className="top"
          >
            <Typography
              sx={{ width: "100%", flexShrink: 0 }}
              className="summary"
            >
              1. Pro Digital qanday platforma ?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="text">
              Pro Digital - Digital marketinga ixtisoslashgan, barcha
              yo'nalishdagi kurslar jamlangan platforma! Bu nafaqat ta'lim
              platforma, balki jamiyat hamdir.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          className="top"
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            // className="top"
          >
            <Typography
              sx={{ width: "100%", flexShrink: 0 }}
              className="summary"
            >
              2. Qanday a'zo bo'laman ?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="text">
              Platformaga o'z ma'lumotlaringizni kiritib shaxsiy kabinetingizni
              yaratasiz va o'zingizga kerakli obunani xarid qilasiz.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          className="top"
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            // className="top"
          >
            <Typography
              sx={{ width: "100%", flexShrink: 0 }}
              className="summary"
            >
              3. Har bir kurs uchun alohida to'lov qilish kerakmi ?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="text">
              Albatta YO'Q. Yagona to'lov evaziga barcha kurslarga ega bo'lasiz!
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          className="top"
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            // className="top"
          >
            <Typography
              sx={{ width: "100%", flexShrink: 0 }}
              className="summary"
            >
              4. Nega arzon? Darslar sifatsizmi ?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="text">
              Insonlar hayotlarida bir-necha marotabagina omad va imkoniyat
              qarshisidan chiqadilar. Ayni paytda bu imkoniyat sizda mavjud,
              do'st sifatida bu imkoniyatdan foydalanishingizni maslahat
              beraman. Yoki 1000$ lik sarlavhalar, jozibador qadoqlangan ammo
              darslar jarayoni suvga to'la kurslarda o'qib hech narsasiz
              qolasiz.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          className="top"
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            // className="top"
          >
            <Typography
              sx={{ width: "100%", flexShrink: 0 }}
              className="summary"
            >
              5. Darslarni o'zlashtirishga qiynalsamchi ?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="text">
              Avvalo darslar sodda va misollar tariqasi tuzulingan. Agar sizda
              dars mavzulariga bog'liq savollar tug'ilsa Community Chatimizga
              murojaat qilishingiz mumkin! U yerda barcha savollarga javob
              beriladi !
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          className="top"
          expanded={expanded === "panel6"}
          onChange={handleChange("panel6")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            // className="top"
          >
            <Typography
              sx={{ width: "100%", flexShrink: 0,}}
              className="summary"
            >
              6. Nega Platformada o'qishim kerak?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="text">
            Platformada o'qishga majbur emassiz! Shunchaki oldingizda: <br />
            - arzimagan narxga OLTINga teng bilimlarni olish <br />
            - yoki bu yerda jamlangan ma'lumotlarning 5%zini boshqa "MENTORSHIP" kurslarda 1000$ga olish
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </Container>
  );
}

const Container = styled.div`
  background-color: #0b0e13;
  height: fit-content;
  .button {
    height: 80px;
    width: 400px;
    margin: 80px auto;
    background-color: red;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    color: #fff;
    font-size: 2rem;
    cursor: pointer;
  }
  .title {
    color: #fff;
    text-align: center;
    padding: 70px;
  }
  .container {
    background-color: #0b0e13;
    width: 90%;
    margin: 0 auto;
    padding: 20px 0;
    .top {
      background-color: #181b21;
    }
    .summary {
      color: #fff;
      font-size: 26px;
    }
    .text {
      color: #fff;
    }
  }
  @media screen and (max-width: 800px) {
    .summary{
      font-size: 18px !important;
    }
  }

  @media screen and (max-width: 600px) {
    .summary{
      font-size: 18px !important;

    }
  }
  @media screen and (max-width: 376px) {
    .summary{
      font-size: 18px !important;
    }
  }

`;
