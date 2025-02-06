import React from 'react'
import HomePage1 from "./Components/HomePage"
import Reservation from './Components/Reservation'
import HomePage2 from "./Components/HomePage1"
import HomePage3 from "./Components/HomePage2"
import HomePage4 from "./Components/HomePage3"
import HomePage5 from "./Components/HomePage4"
import HomePage6 from "./Components/HomePage5"
import ContactSection from '../GeneralComponents/Contact/ContactSection'

const HomePage = () => {
  return (
    <div>
        <HomePage1 />
        <HomePage2 />
        <HomePage3 />
        <HomePage4 />
        <HomePage5 />
        <ContactSection />
        <HomePage6 />
    </div>
  )
}

export default HomePage