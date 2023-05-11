import React, { useEffect, useState } from 'react';

const LogoTimer = () => {
    const blockverseLogo = "/assets/blockverseLogo.png"
  const [remainingTime, setRemainingTime] = useState({
    hours: 2,
    minutes: 0,
    seconds: 0
  });

  const [isTimerVisible, setIsTimerVisible] = useState(false);

  useEffect(() => {
    let interval;

    if (isTimerVisible) {
      interval = setInterval(() => {
        setRemainingTime(prevTime => {
          // Calculate the remaining time by subtracting 1 second
          const newSeconds = prevTime.seconds - 1;
          const newMinutes = prevTime.minutes - (newSeconds < 0 ? 1 : 0);
          const newHours = prevTime.hours - (newMinutes < 0 ? 1 : 0);

          // Update the state with the new remaining time
          return {
            hours: newHours,
            minutes: newMinutes < 0 ? 59 : newMinutes,
            seconds: newSeconds < 0 ? 59 : newSeconds
          };
        });
      }, 1000);
    }

    // Clean up the interval on component unmount or when the timer is not visible
    return () => clearInterval(interval);
  }, [isTimerVisible]);

  const handleMouseEnter = () => {
    setIsTimerVisible(true);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setIsTimerVisible(false);
    }, 5000);
  };

  const { hours, minutes, seconds } = remainingTime;

  return (
    <div
      className={`w-1/6 transition-opacity duration-500 cursor-wait grid place-items-center`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isTimerVisible ? (
        <button className="text-3xl font-bold font-iceberg px-4 opacity-75">
          {`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}
        </button>
      ) : (
        <img src={blockverseLogo} alt="" className="w-full h-full p-2" />
      )}
    </div>
  );
};

export default LogoTimer;
