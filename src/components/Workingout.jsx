import { useRef, useState } from "react";
export default function Workingout({ title, description, time, onComplete }) {
  const timer = useRef();
  const [timing, setTiming] = useState(time);

  console.log("time=", time);
  console.log("timing=", timing);

  function handleStartWorkout() {
    timer.current = setInterval(() => {
      setTiming((previousTiming) => {
        if (previousTiming <= 1) {
          clearInterval(timer.current);
          onComplete();
          return 0;
        }
        return previousTiming - 1;
      });
    }, 1000);
  }

  function handleStopWorkout() {
    clearInterval(timer.current);
    if (timer.current === timing) {
      clearInterval(timer.current);
      onComplete();
    }
  }

  return (
    <article className="workout">
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{timing}</p>
      <p>
        <button onClick={handleStartWorkout}>Start</button>
        <button onClick={handleStopWorkout}>Stop</button>
      </p>
    </article>
  );
}
