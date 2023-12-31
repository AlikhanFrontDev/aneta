
import Mainpage from "./pages/mainpage";
import SingleCourse from "./pages/singleCourse";
import watermark from "./assets/img/watermark.png";
import styled from "styled-components";
import VideoPage from "./pages/videoPage";
import { Route, Routes } from "react-router";
import AdminkaProDigitaladmin0202 from "./pages/adminkaProDigitaladmin";
import LoginPage from "./pages/loginPage";
import RegisterPage from "./pages/registerPage";
import CoursePage from "./pages/coursesPage";
import Linklar from "./pages/linklar";
import Fayllar from "./pages/fayllar";
import PaymentPage from "./pages/paymentPage";
import SuccesPage from "./pages/succesPage";

function App() {
  return (
    <div className="App">
      <Container>
        <Routes>
          <Route path="/" element={<Mainpage />} />
          {/* <Route path="/courses" element={<CoursesPage />} /> */}
          <Route path="/singleCourse" element={<SingleCourse />} />
          <Route path='/videPage/:idd' element={<VideoPage />} />
          <Route path="/AdminkaProDigitaladmin0202" element={<AdminkaProDigitaladmin0202 />} />
          <Route path="/loginPage" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/courses" element={<CoursePage />} />
          <Route path="/links" element={<Linklar />} />
          <Route path="/files" element={<Fayllar />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/success" element={<SuccesPage />} />
        </Routes>
      </Container>
    </div>
  );
}

const Container = styled.div`
  .watermark {
    position: fixed;
    width: 100%;
  }
  /* background-image: url(${watermark});
  background-size: contain;
  position: absolute;
  height: 100vh;
  width: 95vw;
  top: 0;
  left: 0; */
`;

export default App;
