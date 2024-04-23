import React, { useEffect, useState } from 'react'
import './ComingSoon.css'
import { FaPaperPlane } from "react-icons/fa";
function ComeingSoon() {
    const deadlineDate = new Date('DEC 31, 2024 11:59:59').getTime();
    const [countdown, setCountdown] = useState({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    });
  
    useEffect(() => {
      const timer = setInterval(() => {
        const currentDate = new Date().getTime();
        const distance = deadlineDate - currentDate;
  
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
        setCountdown({ days, hours, minutes, seconds });
      }, 1000);
  
      return () => clearInterval(timer);
    }, []);

  return (
<div className="coming-soon-info">
  <div className="wrapper">

    <div className="coming-back">
      <h1>We are launching soon </h1>
      <div className="countdown">
        <div className="countdown-days">
        <div className="number" >{countdown.days}</div>
          <span className="">days</span>
        </div>
        <div className="countdown-hours">
        <div className="number" >{countdown.hours}</div>
          <span className="">hours</span>
        </div>
        <div className="countdown-minutes">
        <div className="number" >{countdown.minutes}</div>
          <span className="">minutes</span>
        </div>
        <div className="countdown-seconds">
          <div className="number" >{countdown.seconds}</div>
          <span className="">seconds</span>
        </div>
      </div>
      <form action="#" method="post">
        <input
          type="text"
          name="Email"
          required=""
          placeholder="Subscribe to get notified"
        />
        <button className='p-3 send'>
        <FaPaperPlane size={30} color='#fff'/>
        </button>
      </form>
    </div>
  </div>
</div>

  )

}
export default ComeingSoon;
