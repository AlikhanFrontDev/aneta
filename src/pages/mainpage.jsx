import React from 'react'
import Navbar from '../components/navbar'
import Banner from '../components/banner'
import Courses from '../components/courses'
import Info from '../components/info'
import Title from '../components/title'
import ControlledAccordions from '../components/accordion'
import Footer from '../components/footer'


export default function Mainpage() {
  return (
    <div>
        <Navbar/>
        <Banner/>
        <Courses/>
        <Info/>
        <Title/>
        <ControlledAccordions/>
        <Footer/>
    </div>
  )
}
