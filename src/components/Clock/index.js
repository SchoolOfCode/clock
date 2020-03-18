import React, { useEffect, useState } from "react";

function Clock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(tick, 1000);
    return () => clearInterval(timerID);
  }, [date]);

  function tick() {
    setDate(new Date());
  }
  return (
    <div>
      <h1>Hello, Remote School of Code!</h1>
      <h2>{date.toLocaleTimeString()}</h2>
    </div>
  );
}

export default Clock;
