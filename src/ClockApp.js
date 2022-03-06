import React from 'react'
import { Countdown } from './Components/Countdown';
import { DigitalClock } from './Components/DigitalClock';

import './index'
import './index.css'

export const App = () => {
  return (
    <>
    <h3>Digital Clock:</h3>
    <DigitalClock />
    <h3>Countdown:</h3>
    <Countdown />
    </>
  )
}
