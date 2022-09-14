import React from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import CardFirst from '../components/News/Cards/CardFirst'

const CardFirstLink = () => {
  return (
    <div>
      <Navbar />
        <CardFirst/>
        <Footer />
    </div>
  )
}

export default CardFirstLink