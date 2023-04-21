import React from 'react'
import Banner from '../../component/Banner';
import ServicesSectiom from '../../component/ServicesSectiom';
import Speciality from '../../component/Speciality';
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';

const Services = () => {
  return (
    <>
      <Navbar />
      <Banner title="Services" />
      <ServicesSectiom />
      <Speciality />
      <Footer />
    </>
  )
}

export default Services;