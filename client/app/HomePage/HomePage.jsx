import React from 'react'
import HomePage1 from "./Components/HomePage"
import Reservation from './Components/Reservation'
import HomePage2 from "./Components/HomePage1"
import HomePage3 from "./Components/HomePage2"
import HomePage4 from "./Components/HomePage3"

const HomePage = () => {
  return (
    <div>
        <HomePage1 />
        <Reservation/>
        <HomePage2 />
        <HomePage3 />
        <HomePage4 />
    </div>
  )
}

export default HomePage