import React from 'react'
import About from '../components/About/About'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
const AboutLink = () => {
  return (
    <div>
      <Navbar />
        <About/>
        <Footer />
    </div>
  )
}

export default AboutLink