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
import CourseAdd from "../components/AdminSide/courseAdd";
import CoverAdd from "../components/AdminSide/AddCover";
import AddTopic from "../components/AdminSide/AddTopic";
import AddLesson from "../components/AdminSide/AddLesson";
import AddVideo from "../components/AdminSide/AddVideo";
import UseFullFiles from "../components/AdminSide/useFullFiles";

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
      <img src={layer} alt="" className="layer" />
      <div className="screen">
        <div className="accordion">
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
              label="Courses"
              {...a11yProps(0)}
            />
            <Tab
              sx={{ fontSize: "10px" }}
              label="Cover"
              {...a11yProps(1)}
            />
            <Tab
              sx={{ fontSize: "10px" }}
              label="Topics"
              {...a11yProps(2)}
            />
            <Tab
              sx={{ fontSize: "10px" }}
              label="Lessons"
              {...a11yProps(3)}
            />
            <Tab
              sx={{ fontSize: "10px" }}
              label="Usefull Files"
              {...a11yProps(4)}
            />
            <Tab
              sx={{ fontSize: "10px" }}
              label="File"
              {...a11yProps(5)}
            />
          </Tabs>
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
              <CourseAdd/>
            </TabPanel>
            <TabPanel value={value} index={1} className="text">
              <CoverAdd/>
            </TabPanel>
            <TabPanel value={value} index={2} className="text">
              <AddTopic/>
            </TabPanel>
            <TabPanel value={value} index={3} className="text">
              <AddLesson/>
            </TabPanel>
            <TabPanel value={value} index={4} className="text">
              <UseFullFiles/>
            </TabPanel>
            <TabPanel value={value} index={5} className="text">
              6
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
  height: 120vh;
  .box {
    /* background-color: green; */
    width: 70%;
    margin-top: 2%;
    margin-left: 27%;
    /* position: absolute;
    left: 28%;
    top: 15%; */
    z-index: 2;
    /* border-radius: 12px; */
  }
  
  .accordion {
    z-index: 1;
    background-color: #000;
    color: #fff;
    height: 90vh;
    margin: 20px;
    width: 300px;
    text-align: center;
    border-radius: 10px;
    overflow-y: scroll;
    /* overflow-y: hidden; */
    overflow-x: hidden;
    position: fixed;
    /* top: 100px; */
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
