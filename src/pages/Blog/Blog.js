import React from 'react'
import Banner from '../../component/Banner';
import BlogSection from "../../component/BlogSection"
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';

const Blog = () => {
  return (
    <>
        <Navbar />
        <Banner title = "Blog"/>
        <BlogSection />
        <Footer />
    </>
  )
}

export default Blog;