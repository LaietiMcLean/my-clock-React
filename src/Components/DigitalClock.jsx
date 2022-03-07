import React, { useEffect, useState } from 'react'

import '../Components/DigitalClock.css'

export const DigitalClock = () => {

const [clockState, setClockState] = useState();

useEffect(() => {
  setInterval(() => {
      const date = new Date();
      setClockState(date.toLocaleTimeString());
  }, 1000);
}, []);

    return (
        <div className="digitalClock">
            <p>{clockState}</p>
        </div>
    )
}
