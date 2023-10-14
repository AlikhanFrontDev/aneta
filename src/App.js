import CoursesPage from "./pages/coursesPge";
import Mainpage from "./pages/mainpage";
import Myprofile from "./pages/myprofile";
import SingleCourse from "./pages/singleCourse";
import watermark from "./assets/img/watermark.png"
import styled from "styled-components";
import VideoPage from "./pages/videoPage";

function App() {
  return (
    <div className="App">
      <Container>
        {/* <img src={watermark} className="watermark"/> */}
       {/* <CoursesPage/> */}
       {/* <SingleCourse/> */}
       <Mainpage/>
       </Container>
    </div>
  );
}

const Container = styled.div`
.watermark{
  position: fixed;
  width: 100%;
}
/* background-image: url(${watermark});
background-size: contain; */
`


export default App;
