import React from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import CardSecond from '../components/News/Cards/CardSecond'

const CardSecondLink = () => {
  return (
    <div>
      <Navbar />
        <CardSecond/>
        <Footer />
    </div>
  )
}

export default CardSecondLink