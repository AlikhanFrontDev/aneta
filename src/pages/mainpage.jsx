import React from 'react'
import Navbar from '../components/navbar'
import Banner from '../components/banner'
import Courses from '../components/courses'
import Info from '../components/info'
import ControlledAccordions from '../components/accordion'
import Footer from '../components/footer'
import NewCourse from '../components/newCourse'
import BannerTwo from '../components/bannerTwo'
import CaruselTwo from '../components/caruselTwo'
import Videos from '../components/videos'
import Pricelist from '../components/pricelist'


export default function Mainpage() {
  return (
    <div>
        <Navbar/>
        <Banner/>
        <Courses/>
        <NewCourse/>
        <BannerTwo/>
        <CaruselTwo/>
        <Videos/>
        <Info/>
        <Pricelist/>
        <ControlledAccordions/>
        <Footer/>
    </div>
  )
}
