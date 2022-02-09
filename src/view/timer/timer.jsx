import React, { useState, useEffect, useCallback } from "react";


const Timer = ({ settings }) => {
  const [minutes, setMinutes] = useState(settings.workMinutes);
  const [seconds, setSeconds] = useState(settings.workSeconds);
  const [displayMessage, setDisplayMessage] = useState(false);
  const [color, setColor] = useState("")
  const [isStart, setIsStart] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {

      if (!isStart) {
        return;
      }
      const colorchoix = minutes == 0 && seconds <= 20 ? "red" : "green";
      setColor(colorchoix)
      if (seconds === 0) {
        if (minutes !== 0) {
          setSeconds(59);
          setMinutes(minutes - 1);
        } else {
          let minutes = displayMessage ? settings.workMinutes : settings.breakMinutes;
          let seconds = displayMessage ? settings.workSeconds : settings.breakSeconds;

          setSeconds(seconds);
          setMinutes(minutes);
          setDisplayMessage(!displayMessage);
        }
      } else {
        setSeconds(seconds - 1);
      }
      clearInterval(interval);
    }, 1000);
  }, [seconds, isStart, settings]);

  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

  const onStart = () => {
    setIsStart(true);
  };
  const onStop = () => {
    setIsStart(false);
  };

  const onReset = useCallback(() => {
    onStop()
    setSeconds(settings.workSeconds);
    setMinutes(settings.workMinutes);
  }, [minutes, seconds]);
  
  return (
    <div class={`timer bg_${color}`}>
      <p class="timer_text">{`${timerMinutes} : ${timerSeconds}`}</p>
      <div class="timer_actionbar">
        <button class="timer_btn" onClick={onStart}>start</button>
        <button class="timer_btn" onClick={onStop}>stop</button>
        <button class="timer_btn" onClick={onReset}>reset</button>
      </div>
      
    </div>
  );
};

export default Timer;
