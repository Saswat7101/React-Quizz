import { useState, useEffect } from "react";

export default function QuestionTimer({ timeout, onTimeOut }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    const timer = setTimeout(onTimeOut, timeout);
    return () => clearTimeout(timer);
  }, [timeout, onTimeOut]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);

    return () => clearInterval(interval);
  }, [remainingTime]);

  return <progress id="question-time" max={timeout} value={remainingTime} />;
}
