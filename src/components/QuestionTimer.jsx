import { useState, useEffect } from "react";

export default function QuestionTimer({ timeout, onTimeOut }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    setTimeout(onTimeOut, timeout);
  }, [onTimeOut, timeout]);

  useEffect(() => {
    setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);
  }, [remainingTime]);

  return <progress id="question-time" max={timeout} value={remainingTime} />;
}
