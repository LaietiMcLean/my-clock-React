import React, { useState, useEffect } from 'react'

import '../Components/Countdown.css'

export const Countdown = () => {

  const [time, setTime] = useState("");

  useEffect(()=>{
    let countDownDate = new Date("March 6, 2022 21:20:00").getTime();
    let x = setInterval(()=>{
        let now = new Date().getTime();
        let distance = countDownDate - now;
        let days = Math.floor(distance / (1000*60*60*24));
        let hours = Math.floor((distance % (1000*60*60*24))/(1000*60*60));
        let minutes = Math.floor((distance % (1000*60*60))/(1000*60));
        let seconds = Math.floor((distance % (1000*60))/1000);

        setTime(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");

        if(distance < 0) {
            clearInterval(x);
            setTime("Countdown Finished")
        }
    },1000);
},[]);
  
  return (
    <div className="Countdown">
    <p>{time}</p>
    </div>
  )
}
