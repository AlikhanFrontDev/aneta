import React from 'react'
import styled from "styled-components";
import Profilemenu from '../components/profilemenu';
import Footer from '../components/footer';


export default function Myprofile() {
  return (
    <Container>
        <Profilemenu/>
        <Footer/>
    </Container>
  )
}
const Container = styled.div`
min-height: 200vh;
`
