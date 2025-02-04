import React from 'react'
import HomePage1 from "./Components/HomePage"
import Reservation from './Components/Reservation'
import HomePage2 from "./Components/HomePage1"

const HomePage = () => {
  return (
    <div>
        <HomePage1 />
        <Reservation/>
        <HomePage2 />
    </div>
  )
}

export default HomePage