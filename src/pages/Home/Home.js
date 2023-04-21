import React from 'react'
import AboutSection from '../../component/AboutSection'
import HomePageBanner from '../../component/HomePageBanner'
import Speciality from '../../component/Speciality'
import ServicesSectiom from '../../component/ServicesSectiom'
import VideoSection from '../../component/VideoSection'
import DoctorTeam from '../../component/DoctorTeam'
import CounteSection from '../../component/CounteSection'
import AppointmentSection from '../../component/AppointmentSection'
import BlogSection from '../../component/BlogSection'
import NewsLetter from '../../component/NewsLetter'
import Navbar from '../../component/Navbar'
import Footer from '../../component/Footer'

const Home = () => {
  return (
    <>
      <Navbar />
      <HomePageBanner />
      <AboutSection />
      <Speciality />
      <ServicesSectiom />
      <VideoSection />
      <DoctorTeam />
      <CounteSection />
      <AppointmentSection />
      <BlogSection />
      <NewsLetter />
      <Footer />
    </>
  )
}

export default Home