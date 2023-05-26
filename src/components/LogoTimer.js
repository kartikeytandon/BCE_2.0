import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LogoTimer = () => {

  const navigate = useNavigate()
    const blockverseLogo = "/assets/blockverselogo.webp"
    const initialTime = {
      hours: 2,
      minutes: 0,
      seconds: 0,
    };


  const [remainingTime, setRemainingTime] = useState(() => {
    const storedTime = localStorage.getItem('remainingTime');
    return storedTime ? JSON.parse(storedTime) : initialTime;
  });

  const [isTimerVisible, setIsTimerVisible] = useState(false);

  useEffect(() => {
    let interval;

    // if (isTimerVisible) {
      interval = setInterval(() => {
        setRemainingTime(prevTime => {
          const newSeconds = prevTime.seconds - 1;
          const newMinutes = prevTime.minutes - (newSeconds < 0 ? 1 : 0);
          const newHours = prevTime.hours - (newMinutes < 0 ? 1 : 0);

          const newTime = {
            hours: newHours,
            minutes: newMinutes < 0 ? 59 : newMinutes,
            seconds: newSeconds < 0 ? 59 : newSeconds
          };

          localStorage.setItem('remainingTime', JSON.stringify(newTime));
          
          return newTime;
        });
      }, 1000);
    // }

    return () => clearInterval(interval);
  }, []);

  const handleMouseEnter = () => {
    setIsTimerVisible(true);
    // console.log(isTimerVisible);
  };
  
  const handleMouseLeave = () => {
    setTimeout(() => {
      setIsTimerVisible(false);
      // console.log(isTimerVisible);
    }, 5000);
  };

  const { hours, minutes, seconds } = remainingTime;

  if(hours === 0 && minutes === 0 && seconds === 0){
    setRemainingTime({
      hours: 2,
      minutes: 0,
      seconds: 0,
    })
    localStorage.removeItem('remainingTime')
    console.log('timer over')
    
    navigate("/submitted")
  }

  return (
    <div
      className={`w-1/6 transition-opacity duration-500 cursor-wait grid place-items-center relative`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* {isTimerVisible ? (
        <button className="text-3xl font-bold font-iceberg px-4 opacity-75">
          {`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}
        </button>
      ) : (
        <img src={blockverseLogo} alt="" className="w-full h-full p-2" />
      )} */}

       <img src={blockverseLogo} alt="" className={`w-full h-full p-2 transition-opacity duration-500 ${isTimerVisible ? 'opacity-0' : 'opacity-100'}`} />
      <button className={`text-3xl font-bold font-iceberg px-4 absolute transition-opacity duration-500 ${!isTimerVisible ? 'opacity-0' : 'opacity-70'}`}>
          {`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}
      </button>
    </div>
  );
};

export default LogoTimer;