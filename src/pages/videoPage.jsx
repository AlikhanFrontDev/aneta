import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import CustomTabPanel from "@mui/material/Tab";
import Box from "@mui/material/Box";
import styled from "styled-components";
import Navbar from "../components/navbar";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import layer from "../assets/img/layer.png";
import GuestNan from "../components/guestnav";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VideoPage() {
  const [value, setValue] = React.useState(0);

  const [expanded, setExpanded] = React.useState(false);

  const handleChange1 = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    // <div className="container">
    <Container>
      <div className="nav">
        <GuestNan />
      </div>
      <img src={layer} alt="" className="layer" />
      <div className="screen">
        <div className="accordion">
          <h1 className="courseName">SMM</h1>
          <Accordion
            className="top"
            expanded={expanded === "panel1"}
            onChange={handleChange1("panel1")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography
                sx={{ width: "100%", flexShrink: 0 }}
                className="summary"
              >
                1.Example module
              </Typography>
            </AccordionSummary>
            <AccordionDetails style={{ padding: 0 }}>
              <Tabs
                sx={{
                  "& button.Mui-selected": {
                    color: "white",
                    // fontStyle: "italic",
                    backgroundColor: "#111",
                  },
                  "& button": {
                    backgroundColor: "#000",
                    // padding: "0 10px",
                    color: "#fff",
                    height: "15px",
                    textDecoration: "underline",
                  },
                  backgroundColor: "#000",
                  width: "300px",
                  // borderRadius: "12px",
                }}
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                TabIndicatorProps={{ sx: { backgroundColor: "white" } }}
              >
                <Tab
                  sx={{ fontSize: "10px" }}
                  label="Example Learn"
                  {...a11yProps(0)}
                />
                <Tab
                  sx={{ fontSize: "10px" }}
                  label="Example Learn"
                  {...a11yProps(1)}
                />
                <Tab
                  sx={{ fontSize: "10px" }}
                  label="Example Learn"
                  {...a11yProps(2)}
                />
                <Tab
                  sx={{ fontSize: "10px" }}
                  label="Example Learn"
                  {...a11yProps(3)}
                />
              </Tabs>
            </AccordionDetails>
          </Accordion>
          <Accordion
            className="top"
            expanded={expanded === "panel2"}
            onChange={handleChange1("panel2")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography
                sx={{ width: "100%", flexShrink: 0 }}
                className="summary"
              >
                2.Example module
              </Typography>
            </AccordionSummary>
            <AccordionDetails style={{ padding: 0, margin: 0 }}>
              <Tabs
                sx={{
                  "& button.Mui-selected": {
                    color: "white",
                    // fontStyle: "italic",
                    backgroundColor: "#111",
                  },
                  "& button": {
                    backgroundColor: "#000",
                    // padding: "0 10px",
                    color: "#fff",
                    height: "15px",
                    textDecoration: "underline",
                  },
                  backgroundColor: "#000",
                  width: "300px",
                  // borderRadius: "12px",
                }}
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                TabIndicatorProps={{ sx: { backgroundColor: "white" } }}
              >
                <Tab
                  sx={{ fontSize: "10px" }}
                  label="Example Learn"
                  {...a11yProps(0)}
                />
                <Tab
                  sx={{ fontSize: "10px" }}
                  label="Example Learn"
                  {...a11yProps(1)}
                />
                <Tab
                  sx={{ fontSize: "10px" }}
                  label="Example Learn"
                  {...a11yProps(2)}
                />
                <Tab
                  sx={{ fontSize: "10px" }}
                  label="Example Learn"
                  {...a11yProps(3)}
                />
              </Tabs>
            </AccordionDetails>
          </Accordion>
          <Accordion
            className="top"
            expanded={expanded === "panel3"}
            onChange={handleChange1("panel3")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography
                sx={{ width: "100%", flexShrink: 0 }}
                className="summary"
              >
                3.Example module
              </Typography>
            </AccordionSummary>
            <AccordionDetails style={{ padding: 0, margin: 0 }}>
              <Tabs
                sx={{
                  "& button.Mui-selected": {
                    color: "white",
                    // fontStyle: "italic",
                    backgroundColor: "#111",
                  },
                  "& button": {
                    backgroundColor: "#000",
                    // padding: "0 10px",
                    color: "#fff",
                    height: "15px",
                    textDecoration: "underline",
                  },
                  backgroundColor: "#000",
                  width: "300px",
                  // borderRadius: "12px",
                }}
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                TabIndicatorProps={{ sx: { backgroundColor: "white" } }}
              >
                <Tab
                  sx={{ fontSize: "10px" }}
                  label="Example Learn"
                  {...a11yProps(0)}
                />
                <Tab
                  sx={{ fontSize: "10px" }}
                  label="Example Learn"
                  {...a11yProps(1)}
                />
                <Tab
                  sx={{ fontSize: "10px" }}
                  label="Example Learn"
                  {...a11yProps(2)}
                />
                <Tab
                  sx={{ fontSize: "10px" }}
                  label="Example Learn"
                  {...a11yProps(3)}
                />
              </Tabs>
            </AccordionDetails>
          </Accordion>
          <Accordion
            className="top"
            expanded={expanded === "panel4"}
            onChange={handleChange1("panel4")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography
                sx={{ width: "100%", flexShrink: 0 }}
                className="summary"
              >
                4.Example module
              </Typography>
            </AccordionSummary>
            <AccordionDetails style={{ padding: 0, margin: 0 }}>
              <Tabs
                sx={{
                  "& button.Mui-selected": {
                    color: "white",
                    // fontStyle: "italic",
                    backgroundColor: "#111",
                  },
                  "& button": {
                    backgroundColor: "#000",
                    // padding: "0 10px",
                    color: "#fff",
                    height: "15px",
                    textDecoration: "underline",
                  },
                  backgroundColor: "#000",
                  width: "300px",
                  // borderRadius: "12px",
                }}
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                TabIndicatorProps={{ sx: { backgroundColor: "white" } }}
              >
                <Tab
                  sx={{ fontSize: "10px" }}
                  label="Example Learn"
                  {...a11yProps(0)}
                />
                <Tab
                  sx={{ fontSize: "10px" }}
                  label="Example Learn"
                  {...a11yProps(1)}
                />
                <Tab
                  sx={{ fontSize: "10px" }}
                  label="Example Learn"
                  {...a11yProps(2)}
                />
                <Tab
                  sx={{ fontSize: "10px" }}
                  label="Example Learn"
                  {...a11yProps(3)}
                />
              </Tabs>
            </AccordionDetails>
          </Accordion>
          <Accordion
            className="top"
            expanded={expanded === "panel5"}
            onChange={handleChange1("panel5")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography
                sx={{ width: "100%", flexShrink: 0 }}
                className="summary"
              >
                5.Example module
              </Typography>
            </AccordionSummary>
            <AccordionDetails style={{ padding: 0, margin: 0 }}>
              <Tabs
                sx={{
                  "& button.Mui-selected": {
                    color: "white",
                    // fontStyle: "italic",
                    backgroundColor: "#111",
                  },
                  "& button": {
                    backgroundColor: "#000",
                    // padding: "0 10px",
                    color: "#fff",
                    height: "15px",
                    textDecoration: "underline",
                  },
                  backgroundColor: "#000",
                  width: "300px",
                  // borderRadius: "12px",
                }}
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                TabIndicatorProps={{ sx: { backgroundColor: "white" } }}
              >
                <Tab
                  sx={{ fontSize: "10px" }}
                  label="Example Learn"
                  {...a11yProps(0)}
                />
                <Tab
                  sx={{ fontSize: "10px" }}
                  label="Example Learn"
                  {...a11yProps(1)}
                />
                <Tab
                  sx={{ fontSize: "10px" }}
                  label="Example Learn"
                  {...a11yProps(2)}
                />
                <Tab
                  sx={{ fontSize: "10px" }}
                  label="Example Learn"
                  {...a11yProps(3)}
                />
              </Tabs>
            </AccordionDetails>
          </Accordion>
          <Accordion
            className="top"
            expanded={expanded === "panel6"}
            onChange={handleChange1("panel6")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography
                sx={{ width: "100%", flexShrink: 0 }}
                className="summary"
              >
                6.Example module
              </Typography>
            </AccordionSummary>
            <AccordionDetails style={{ padding: 0, margin: 0 }}>
              <Tabs
                sx={{
                  "& button.Mui-selected": {
                    color: "white",
                    // fontStyle: "italic",
                    backgroundColor: "#111",
                  },
                  "& button": {
                    backgroundColor: "#000",
                    // padding: "0 10px",
                    color: "#fff",
                    height: "15px",
                    textDecoration: "underline",
                  },
                  backgroundColor: "#000",
                  width: "300px",
                  // borderRadius: "12px",
                }}
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                TabIndicatorProps={{ sx: { backgroundColor: "white" } }}
              >
                <Tab
                  sx={{ fontSize: "10px" }}
                  label="Example Learn"
                  {...a11yProps(0)}
                />
                <Tab
                  sx={{ fontSize: "10px" }}
                  label="Example Learn"
                  {...a11yProps(1)}
                />
                <Tab
                  sx={{ fontSize: "10px" }}
                  label="Example Learn"
                  {...a11yProps(2)}
                />
                <Tab
                  sx={{ fontSize: "10px" }}
                  label="Example Learn"
                  {...a11yProps(3)}
                />
              </Tabs>
            </AccordionDetails>
          </Accordion>
          <Accordion
            className="top"
            expanded={expanded === "panel6"}
            onChange={handleChange1("panel6")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography
                sx={{ width: "100%", flexShrink: 0 }}
                className="summary"
              >
                6.Example module
              </Typography>
            </AccordionSummary>
            <AccordionDetails style={{ padding: 0, margin: 0 }}>
              <Tabs
                sx={{
                  "& button.Mui-selected": {
                    color: "white",
                    // fontStyle: "italic",
                    backgroundColor: "#111",
                  },
                  "& button": {
                    backgroundColor: "#000",
                    // padding: "0 10px",
                    color: "#fff",
                    height: "15px",
                    textDecoration: "underline",
                  },
                  backgroundColor: "#000",
                  width: "300px",
                  // borderRadius: "12px",
                }}
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                TabIndicatorProps={{ sx: { backgroundColor: "white" } }}
              >
                <Tab
                  sx={{ fontSize: "10px" }}
                  label="Example Learn"
                  {...a11yProps(0)}
                />
                <Tab
                  sx={{ fontSize: "10px" }}
                  label="Example Learn"
                  {...a11yProps(1)}
                />
                <Tab
                  sx={{ fontSize: "10px" }}
                  label="Example Learn"
                  {...a11yProps(2)}
                />
                <Tab
                  sx={{ fontSize: "10px" }}
                  label="Example Learn"
                  {...a11yProps(3)}
                />
              </Tabs>
            </AccordionDetails>
          </Accordion>
          <Accordion
            className="top"
            expanded={expanded === "panel6"}
            onChange={handleChange1("panel6")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography
                sx={{ width: "100%", flexShrink: 0 }}
                className="summary"
              >
                6.Example module
              </Typography>
            </AccordionSummary>
            <AccordionDetails style={{ padding: 0, margin: 0 }}>
              <Tabs
                sx={{
                  "& button.Mui-selected": {
                    color: "white",
                    // fontStyle: "italic",
                    backgroundColor: "#111",
                  },
                  "& button": {
                    backgroundColor: "#000",
                    // padding: "0 10px",
                    color: "#fff",
                    height: "15px",
                    textDecoration: "underline",
                  },
                  backgroundColor: "#000",
                  width: "300px",
                  // borderRadius: "12px",
                }}
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                TabIndicatorProps={{ sx: { backgroundColor: "white" } }}
              >
                <Tab
                  sx={{ fontSize: "10px" }}
                  label="Example Learn"
                  {...a11yProps(0)}
                />
                <Tab
                  sx={{ fontSize: "10px" }}
                  label="Example Learn"
                  {...a11yProps(1)}
                />
                <Tab
                  sx={{ fontSize: "10px" }}
                  label="Example Learn"
                  {...a11yProps(2)}
                />
                <Tab
                  sx={{ fontSize: "10px" }}
                  label="Example Learn"
                  {...a11yProps(3)}
                />
              </Tabs>
            </AccordionDetails>
          </Accordion>
          <Accordion
            className="top"
            expanded={expanded === "panel6"}
            onChange={handleChange1("panel6")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography
                sx={{ width: "100%", flexShrink: 0 }}
                className="summary"
              >
                6.Example module
              </Typography>
            </AccordionSummary>
            <AccordionDetails style={{ padding: 0, margin: 0 }}>
              <Tabs
                sx={{
                  "& button.Mui-selected": {
                    color: "white",
                    // fontStyle: "italic",
                    backgroundColor: "#111",
                  },
                  "& button": {
                    backgroundColor: "#000",
                    // padding: "0 10px",
                    color: "#fff",
                    height: "15px",
                    textDecoration: "underline",
                  },
                  backgroundColor: "#000",
                  width: "300px",
                  // borderRadius: "12px",
                }}
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                TabIndicatorProps={{ sx: { backgroundColor: "white" } }}
              >
                <Tab
                  sx={{ fontSize: "10px" }}
                  label="Example Learn"
                  {...a11yProps(0)}
                />
                <Tab
                  sx={{ fontSize: "10px" }}
                  label="Example Learn"
                  {...a11yProps(1)}
                />
                <Tab
                  sx={{ fontSize: "10px" }}
                  label="Example Learn"
                  {...a11yProps(2)}
                />
                <Tab
                  sx={{ fontSize: "10px" }}
                  label="Example Learn"
                  {...a11yProps(3)}
                />
              </Tabs>
            </AccordionDetails>
          </Accordion>
          <Accordion
            className="top"
            expanded={expanded === "panel6"}
            onChange={handleChange1("panel6")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography
                sx={{ width: "100%", flexShrink: 0 }}
                className="summary"
              >
                6.Example module
              </Typography>
            </AccordionSummary>
            <AccordionDetails style={{ padding: 0, margin: 0 }}>
              <Tabs
                sx={{
                  "& button.Mui-selected": {
                    color: "white",
                    // fontStyle: "italic",
                    backgroundColor: "#111",
                  },
                  "& button": {
                    backgroundColor: "#000",
                    // padding: "0 10px",
                    color: "#fff",
                    height: "15px",
                    textDecoration: "underline",
                  },
                  backgroundColor: "#000",
                  width: "300px",
                  // borderRadius: "12px",
                }}
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                TabIndicatorProps={{ sx: { backgroundColor: "white" } }}
              >
                <Tab
                  sx={{ fontSize: "10px" }}
                  label="Example Learn"
                  {...a11yProps(0)}
                />
                <Tab
                  sx={{ fontSize: "10px" }}
                  label="Example Learn"
                  {...a11yProps(1)}
                />
                <Tab
                  sx={{ fontSize: "10px" }}
                  label="Example Learn"
                  {...a11yProps(2)}
                />
                <Tab
                  sx={{ fontSize: "10px" }}
                  label="Example Learn"
                  {...a11yProps(3)}
                />
              </Tabs>
            </AccordionDetails>
          </Accordion>
          <Accordion
            className="top"
            expanded={expanded === "panel6"}
            onChange={handleChange1("panel6")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography
                sx={{ width: "100%", flexShrink: 0 }}
                className="summary"
              >
                6.Example module
              </Typography>
            </AccordionSummary>
            <AccordionDetails style={{ padding: 0, margin: 0 }}>
              <Tabs
                sx={{
                  "& button.Mui-selected": {
                    color: "white",
                    // fontStyle: "italic",
                    backgroundColor: "#111",
                  },
                  "& button": {
                    backgroundColor: "#000",
                    // padding: "0 10px",
                    color: "#fff",
                    height: "15px",
                    textDecoration: "underline",
                  },
                  backgroundColor: "#000",
                  width: "300px",
                  // borderRadius: "12px",
                }}
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                TabIndicatorProps={{ sx: { backgroundColor: "white" } }}
              >
                <Tab
                  sx={{ fontSize: "10px" }}
                  label="Example Learn"
                  {...a11yProps(0)}
                />
                <Tab
                  sx={{ fontSize: "10px" }}
                  label="Example Learn"
                  {...a11yProps(1)}
                />
                <Tab
                  sx={{ fontSize: "10px" }}
                  label="Example Learn"
                  {...a11yProps(2)}
                />
                <Tab
                  sx={{ fontSize: "10px" }}
                  label="Example Learn"
                  {...a11yProps(3)}
                />
              </Tabs>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="box">
          <Box
            sx={{
              flexGrow: 1,
              // bgcolor: "background.paper",
              // display: "flex",
              // height: "85vh",
              // width: "100%",
              // position: "fixed",
            }}
          >
            <TabPanel value={value} index={0} className="text">
              <video
                className="courceVideo"
                src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                controls
              ></video>

              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                doloribus quod quasi esse beatae quaerat, sunt debitis mollitia
                molestiae, delectus voluptatibus? Obcaecati voluptatem saepe
                quidem est modi vitae ab, hic ducimus magni quaerat quia autem
                debitis, natus iste consequuntur necessitatibus!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                doloribus quod quasi esse beatae quaerat, sunt debitis mollitia
                molestiae, delectus voluptatibus? Obcaecati voluptatem saepe
                quidem est modi vitae ab, hic ducimus magni quaerat quia autem
                debitis, natus iste consequuntur necessitatibus!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                doloribus quod quasi esse beatae quaerat, sunt debitis mollitia
                molestiae, delectus voluptatibus? Obcaecati voluptatem saepe
                quidem est modi vitae ab, hic ducimus magni quaerat quia autem
                debitis, natus iste consequuntur necessitatibus!
              </p>
            </TabPanel>
          </Box>
        </div>
      </div>
    </Container>
    // </div>
  );
}

const Container = styled.div`
  .layer {
    position: fixed;
    z-index: -1;
    height: 1250px;
    padding: -550px;
    width: 100vw;
    margin: 0;
    object-fit: cover;
    background-color: #444;
  }
  /* background-color: #777;
  background-image: url(${layer});
  background-size: contain; */
  height: 120vh;
  /* background-color: red; */
  .box {
    /* background-color: green; */
    width: 70%;
    margin-top: 10%;
    margin-left: 27%;
    /* position: absolute;
    left: 28%;
    top: 15%; */
    z-index: 2;
    /* border-radius: 12px; */
  }
  .nav {
    z-index: 3;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
  }
  .accordion {
    z-index: 1;
    background-color: #000;
    color: #fff;
    height: 80vh;
    margin: 20px;
    width: 300px;
    text-align: center;
    border-radius: 10px;
    overflow-y: scroll;
    /* overflow-y: hidden; */
    overflow-x: hidden;
    position: fixed;
    top: 100px;
  }
  .accordion::-webkit-scrollbar-track {
    border: 1px solid #000;
    padding: 2px 0;
    background-color: #404040;
  }

  .accordion::-webkit-scrollbar {
    width: 5px;
  }

  .accordion::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: red;
    border: 1px solid #000;
  }
  .screen {
    display: flex;
  }
  .top {
    width: 300px;
    background-color: #000;
    border-bottom: 1px solid red;
  }
  .courseName {
    color: #fff;
    font-weight: 700;
    margin: 10px 0;
  }
  .description {
    background-color: #ffffff86;
    border-radius: 20px;
    color: #181b21;
    font-weight: 600;
    padding: 50px 0;
    width: 95%;
    padding: 20px;
  }
  .text {
    width: 100%;
    min-height: 100%;
    /* overflow-y: scroll; */
    overflow-x: hidden;
    /* background-color: #181b21; */
  }
  .courceVideo {
    /* width: 95%; */
    height: 70vh;
    border-radius: 20px;
  }
  /* background-color: green; */
  /* height: 100px; */
  /* width: 100%; */
  /* .teb{
    color: red;
    background-color: #000;
  } */
  .active {
    color: red;
  }
`;
