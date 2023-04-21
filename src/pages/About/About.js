import React from 'react'
import CounteSection from '../../component/CounteSection'
import Speciality from '../../component/Speciality'
import ServicesSectiom from '../../component/ServicesSectiom'
import BlogSection from '../../component/BlogSection'
import Banner from '../../component/Banner'
import AboutSectionForPage from '../../component/AboutSectionForPage'
import AboutSlider from '../../component/AboutSlider'
import Navbar from '../../component/Navbar'
import Footer from '../../component/Footer'

const About = () => {
    return (
        <>
            <Navbar />
            <Banner title="About" />
            <AboutSectionForPage />
            <CounteSection />
            <Speciality />
            <ServicesSectiom />
            <AboutSlider />
            <BlogSection />
            <Footer />
        </>
    )
}

export default About