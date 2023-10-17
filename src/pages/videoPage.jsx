import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styled from "styled-components";

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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container>
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: "background.paper",
          display: "flex",
          height: 785,
          width: "100%",
          position: "fixed",
        }}
      >
        <Tabs
          sx={{
            "& button.Mui-selected": { color: "white", fontStyle: 'italic', backgroundColor: '#11101d'},
            "& button": {
              backgroundColor: "#181b21",
              padding: "0 10px",
              color: "#fff",
              // width: "100%",
              height: "70px",
            },
            backgroundColor: "#0b0e13",
            width: "20%",
            // maxWidth: 300,
            // position: 'fixed',
            // top: 0,
            // left: 0,
          }}
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          // sx={{ borderRight: 3,}}
          // indicatorColor={"red"}
          TabIndicatorProps={{
            sx: {
              backgroundColor: "white",
            }
          }}
          // inkBarStyle={{background: 'red'}}
        >
          <Tab label="Tanishuv darsi"{...a11yProps(0)}/>
          <Tab label="Kirish darsi" {...a11yProps(1)} />
          <Tab label="1- dars"{...a11yProps(2)}/>
          <Tab label="2-dars" {...a11yProps(3)} />
          <Tab label="3-dars" {...a11yProps(4)} />
          <Tab label="4-dars" {...a11yProps(5)} />
          <Tab label="6-dars" {...a11yProps(6)} />
          <Tab label="7-dars" {...a11yProps(7)} />
          <Tab label="8-dars" {...a11yProps(8)} />
          <Tab label="9-dars" {...a11yProps(9)} />
          <Tab label="10-dars" {...a11yProps(10)} />
          <Tab label="11-dars" {...a11yProps(11)} />
          <Tab label="12-dars" {...a11yProps(12)} />
        </Tabs>
        <TabPanel value={value} index={0} className="text">
          <h1 className="courseName">Tanishuv darsi</h1>
          <video
            className="courceVideo"
            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            controls
          ></video>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
            distinctio non doloribus, beatae voluptatibus perspiciatis repellat
            accusantium harum magni esse ea quibusdam reprehenderit alias dolor
            id minima repellendus magnam et? Nam suscipit minima voluptatibus
            voluptates. Doloremque qui cumque voluptatum facere impedit
            possimus! Ea dolor qui deleniti perspiciatis officia consequatur
            voluptatem libero facilis accusantium maiores illo, nihil minus ab
            pariatur nulla delectus quo porro dolorum consectetur reiciendis
            debitis. Consequuntur pariatur error asperiores, alias repellendus
            harum esse possimus debitis beatae laudantium, quidem praesentium
            eveniet! Possimus delectus deleniti nam facere quos soluta esse est,
            accusamus iste dolor, alias, magni distinctio asperiores eum eius.
          </p>
        </TabPanel>
        <TabPanel value={value} index={1} className="text">
          <h1 className="courseName">Kirish darsi</h1>
          <video
            className="courceVideo"
            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            controls
          ></video>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
            distinctio non doloribus, beatae voluptatibus perspiciatis repellat
            accusantium harum magni esse ea quibusdam reprehenderit alias dolor
            id minima repellendus magnam et? Nam suscipit minima voluptatibus
            voluptates. Doloremque qui cumque voluptatum facere impedit
            possimus! Ea dolor qui deleniti perspiciatis officia consequatur
            voluptatem libero facilis accusantium maiores illo, nihil minus ab
            pariatur nulla delectus quo porro dolorum consectetur reiciendis
            debitis. Consequuntur pariatur error asperiores, alias repellendus
            harum esse possimus debitis beatae laudantium, quidem praesentium
            eveniet! Possimus delectus deleniti nam facere quos soluta esse est,
            accusamus iste dolor, alias, magni distinctio asperiores eum eius.
          </p>
        </TabPanel>
        <TabPanel value={value} index={2} className="text">
          <h1 className="courseName">1-dars</h1>
          <video
            className="courceVideo"
            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            controls
          ></video>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
            distinctio non doloribus, beatae voluptatibus perspiciatis repellat
            accusantium harum magni esse ea quibusdam reprehenderit alias dolor
            id minima repellendus magnam et? Nam suscipit minima voluptatibus
            voluptates. Doloremque qui cumque voluptatum facere impedit
            possimus! Ea dolor qui deleniti perspiciatis officia consequatur
            voluptatem libero facilis accusantium maiores illo, nihil minus ab
            pariatur nulla delectus quo porro dolorum consectetur reiciendis
            debitis. Consequuntur pariatur error asperiores, alias repellendus
            harum esse possimus debitis beatae laudantium, quidem praesentium
            eveniet! Possimus delectus deleniti nam facere quos soluta esse est,
            accusamus iste dolor, alias, magni distinctio asperiores eum eius.
          </p>
        </TabPanel>
        <TabPanel value={value} index={3} className="text">
          <h1 className="courseName">2-dars</h1>
          <video
            className="courceVideo"
            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            controls
          ></video>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
            distinctio non doloribus, beatae voluptatibus perspiciatis repellat
            accusantium harum magni esse ea quibusdam reprehenderit alias dolor
            id minima repellendus magnam et? Nam suscipit minima voluptatibus
            voluptates. Doloremque qui cumque voluptatum facere impedit
            possimus! Ea dolor qui deleniti perspiciatis officia consequatur
            voluptatem libero facilis accusantium maiores illo, nihil minus ab
            pariatur nulla delectus quo porro dolorum consectetur reiciendis
            debitis. Consequuntur pariatur error asperiores, alias repellendus
            harum esse possimus debitis beatae laudantium, quidem praesentium
            eveniet! Possimus delectus deleniti nam facere quos soluta esse est,
            accusamus iste dolor, alias, magni distinctio asperiores eum eius.
          </p>
        </TabPanel>
        <TabPanel value={value} index={4} className="text">
          <h1 className="courseName">3-dars</h1>
          <video
            className="courceVideo"
            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            controls
          ></video>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
            distinctio non doloribus, beatae voluptatibus perspiciatis repellat
            accusantium harum magni esse ea quibusdam reprehenderit alias dolor
            id minima repellendus magnam et? Nam suscipit minima voluptatibus
            voluptates. Doloremque qui cumque voluptatum facere impedit
            possimus! Ea dolor qui deleniti perspiciatis officia consequatur
            voluptatem libero facilis accusantium maiores illo, nihil minus ab
            pariatur nulla delectus quo porro dolorum consectetur reiciendis
            debitis. Consequuntur pariatur error asperiores, alias repellendus
            harum esse possimus debitis beatae laudantium, quidem praesentium
            eveniet! Possimus delectus deleniti nam facere quos soluta esse est,
            accusamus iste dolor, alias, magni distinctio asperiores eum eius.
          </p>
        </TabPanel>
        <TabPanel value={value} index={5} className="text">
          <h1 className="courseName">4-dars</h1>
          <video
            className="courceVideo"
            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            controls
          ></video>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
            distinctio non doloribus, beatae voluptatibus perspiciatis repellat
            accusantium harum magni esse ea quibusdam reprehenderit alias dolor
            id minima repellendus magnam et? Nam suscipit minima voluptatibus
            voluptates. Doloremque qui cumque voluptatum facere impedit
            possimus! Ea dolor qui deleniti perspiciatis officia consequatur
            voluptatem libero facilis accusantium maiores illo, nihil minus ab
            pariatur nulla delectus quo porro dolorum consectetur reiciendis
            debitis. Consequuntur pariatur error asperiores, alias repellendus
            harum esse possimus debitis beatae laudantium, quidem praesentium
            eveniet! Possimus delectus deleniti nam facere quos soluta esse est,
            accusamus iste dolor, alias, magni distinctio asperiores eum eius.
          </p>
        </TabPanel>
        <TabPanel value={value} index={6} className="text">
          <h1 className="courseName">5-dars</h1>
          <video
            className="courceVideo"
            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            controls
          ></video>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
            distinctio non doloribus, beatae voluptatibus perspiciatis repellat
            accusantium harum magni esse ea quibusdam reprehenderit alias dolor
            id minima repellendus magnam et? Nam suscipit minima voluptatibus
            voluptates. Doloremque qui cumque voluptatum facere impedit
            possimus! Ea dolor qui deleniti perspiciatis officia consequatur
            voluptatem libero facilis accusantium maiores illo, nihil minus ab
            pariatur nulla delectus quo porro dolorum consectetur reiciendis
            debitis. Consequuntur pariatur error asperiores, alias repellendus
            harum esse possimus debitis beatae laudantium, quidem praesentium
            eveniet! Possimus delectus deleniti nam facere quos soluta esse est,
            accusamus iste dolor, alias, magni distinctio asperiores eum eius.
          </p>
        </TabPanel>
        <TabPanel value={value} index={7} className="text">
          <h1 className="courseName">5-dars</h1>
          <video
            className="courceVideo"
            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            controls
          ></video>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
            distinctio non doloribus, beatae voluptatibus perspiciatis repellat
            accusantium harum magni esse ea quibusdam reprehenderit alias dolor
            id minima repellendus magnam et? Nam suscipit minima voluptatibus
            voluptates. Doloremque qui cumque voluptatum facere impedit
            possimus! Ea dolor qui deleniti perspiciatis officia consequatur
            voluptatem libero facilis accusantium maiores illo, nihil minus ab
            pariatur nulla delectus quo porro dolorum consectetur reiciendis
            debitis. Consequuntur pariatur error asperiores, alias repellendus
            harum esse possimus debitis beatae laudantium, quidem praesentium
            eveniet! Possimus delectus deleniti nam facere quos soluta esse est,
            accusamus iste dolor, alias, magni distinctio asperiores eum eius.
          </p>
        </TabPanel>
        <TabPanel value={value} index={8} className="text">
          <h1 className="courseName">9-dars</h1>
          <video
            className="courceVideo"
            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            controls
          ></video>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
            distinctio non doloribus, beatae voluptatibus perspiciatis repellat
            accusantium harum magni esse ea quibusdam reprehenderit alias dolor
            id minima repellendus magnam et? Nam suscipit minima voluptatibus
            voluptates. Doloremque qui cumque voluptatum facere impedit
            possimus! Ea dolor qui deleniti perspiciatis officia consequatur
            voluptatem libero facilis accusantium maiores illo, nihil minus ab
            pariatur nulla delectus quo porro dolorum consectetur reiciendis
            debitis. Consequuntur pariatur error asperiores, alias repellendus
            harum esse possimus debitis beatae laudantium, quidem praesentium
            eveniet! Possimus delectus deleniti nam facere quos soluta esse est,
            accusamus iste dolor, alias, magni distinctio asperiores eum eius.
          </p>
        </TabPanel>
        <TabPanel value={value} index={9} className="text">
          <h1 className="courseName">122-dars</h1>
          <video
            className="courceVideo"
            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            controls
          ></video>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
            distinctio non doloribus, beatae voluptatibus perspiciatis repellat
            accusantium harum magni esse ea quibusdam reprehenderit alias dolor
            id minima repellendus magnam et? Nam suscipit minima voluptatibus
            voluptates. Doloremque qui cumque voluptatum facere impedit
            possimus! Ea dolor qui deleniti perspiciatis officia consequatur
            voluptatem libero facilis accusantium maiores illo, nihil minus ab
            pariatur nulla delectus quo porro dolorum consectetur reiciendis
            debitis. Consequuntur pariatur error asperiores, alias repellendus
            harum esse possimus debitis beatae laudantium, quidem praesentium
            eveniet! Possimus delectus deleniti nam facere quos soluta esse est,
            accusamus iste dolor, alias, magni distinctio asperiores eum eius.
          </p>
        </TabPanel>
        <TabPanel value={value} index={10} className="text">
          <h1 className="courseName">922-dars</h1>
          <video
            className="courceVideo"
            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            controls
          ></video>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
            distinctio non doloribus, beatae voluptatibus perspiciatis repellat
            accusantium harum magni esse ea quibusdam reprehenderit alias dolor
            id minima repellendus magnam et? Nam suscipit minima voluptatibus
            voluptates. Doloremque qui cumque voluptatum facere impedit
            possimus! Ea dolor qui deleniti perspiciatis officia consequatur
            voluptatem libero facilis accusantium maiores illo, nihil minus ab
            pariatur nulla delectus quo porro dolorum consectetur reiciendis
            debitis. Consequuntur pariatur error asperiores, alias repellendus
            harum esse possimus debitis beatae laudantium, quidem praesentium
            eveniet! Possimus delectus deleniti nam facere quos soluta esse est,
            accusamus iste dolor, alias, magni distinctio asperiores eum eius.
          </p>
        </TabPanel>
        <TabPanel value={value} index={11} className="text">
          <h1 className="courseName">Kirish darsi</h1>
          <video
            className="courceVideo"
            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            controls
          ></video>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
            distinctio non doloribus, beatae voluptatibus perspiciatis repellat
            accusantium harum magni esse ea quibusdam reprehenderit alias dolor
            id minima repellendus magnam et? Nam suscipit minima voluptatibus
            voluptates. Doloremque qui cumque voluptatum facere impedit
            possimus! Ea dolor qui deleniti perspiciatis officia consequatur
            voluptatem libero facilis accusantium maiores illo, nihil minus ab
            pariatur nulla delectus quo porro dolorum consectetur reiciendis
            debitis. Consequuntur pariatur error asperiores, alias repellendus
            harum esse possimus debitis beatae laudantium, quidem praesentium
            eveniet! Possimus delectus deleniti nam facere quos soluta esse est,
            accusamus iste dolor, alias, magni distinctio asperiores eum eius.
          </p>
        </TabPanel>
        <TabPanel value={value} index={12} className="text">
          <h1 className="courseName">Kirish darsi</h1>
          <video
            className="courceVideo"
            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            controls
          ></video>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
            distinctio non doloribus, beatae voluptatibus perspiciatis repellat
            accusantium harum magni esse ea quibusdam reprehenderit alias dolor
            id minima repellendus magnam et? Nam suscipit minima voluptatibus
            voluptates. Doloremque qui cumque voluptatum facere impedit
            possimus! Ea dolor qui deleniti perspiciatis officia consequatur
            voluptatem libero facilis accusantium maiores illo, nihil minus ab
            pariatur nulla delectus quo porro dolorum consectetur reiciendis
            debitis. Consequuntur pariatur error asperiores, alias repellendus
            harum esse possimus debitis beatae laudantium, quidem praesentium
            eveniet! Possimus delectus deleniti nam facere quos soluta esse est,
            accusamus iste dolor, alias, magni distinctio asperiores eum eius.
          </p>
        </TabPanel>
        <TabPanel value={value} index={13} className="text">
          <h1 className="courseName">12-dars</h1>
          <video
            className="courceVideo"
            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            controls
          ></video>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
            distinctio non doloribus, beatae voluptatibus perspiciatis repellat
            accusantium harum magni esse ea quibusdam reprehenderit alias dolor
            id minima repellendus magnam et? Nam suscipit minima voluptatibus
            voluptates. Doloremque qui cumque voluptatum facere impedit
            possimus! Ea dolor qui deleniti perspiciatis officia consequatur
            voluptatem libero facilis accusantium maiores illo, nihil minus ab
            pariatur nulla delectus quo porro dolorum consectetur reiciendis
            debitis. Consequuntur pariatur error asperiores, alias repellendus
            harum esse possimus debitis beatae laudantium, quidem praesentium
            eveniet! Possimus delectus deleniti nam facere quos soluta esse est,
            accusamus iste dolor, alias, magni distinctio asperiores eum eius.
          </p>
        </TabPanel>
      </Box>
    </Container>
  );
}

const Container = styled.div`
  .courseName {
    color: #181b21;
    font-weight: 700;
    margin: 10px 0;
  }
  .description{
    color: #181b21;
    font-weight: 600;
    padding: 50px 0;
  }
  .text {
    width: 100%;
    min-height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    /* background-color: #181b21; */
  }
  .courceVideo {
    width: 90%;
  }
  background-color: #000;
  height: 100px;
  width: 100%;
  /* .teb{
    color: red;
    background-color: #000;
  } */
  .active {
    color: red;
  }
`;
