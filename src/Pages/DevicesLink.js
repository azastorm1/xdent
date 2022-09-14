import React from 'react'
import Devices from '../components/Devices/Devices'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'

const DevicesLink = () => {
  return (
    <div>
      <Navbar />
        <Devices/>
        <Footer />
    </div>
  )
}

export default DevicesLink