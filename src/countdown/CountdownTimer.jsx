import { useState, useEffect } from "react";

// Placeholder future wedding date so the countdown actively runs (since real date is TBD)
const getFutureTargetDate = () => {
  const placeholder = new Date("December 28, 2026 17:00:00").getTime();
  if (placeholder > Date.now()) {
    return placeholder;
  }
  return Date.now() + 65 * 24 * 60 * 60 * 1000;
};

const TARGET_DATE = getFutureTargetDate();

function calculateTimeLeft() {
  const now = new Date().getTime();
  const difference = TARGET_DATE - now;

  if (difference > 0) {
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }
  return { days: 0, hours: 0, minutes: 0, seconds: 0 };
}

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ textAlign: "center", fontFamily: "Oswald, Arial" }}>
      <div style={{ fontSize: "3rem", fontWeight: "bold" }}>
        {timeLeft.days}d : {timeLeft.hours}h : {timeLeft.minutes}m :{" "}
        {timeLeft.seconds}s
      </div>
      {timeLeft.days === 0 &&
        timeLeft.hours === 0 &&
        timeLeft.minutes === 0 &&
        timeLeft.seconds === 0 && <p>The Wedding has started!</p>}
      <p className="event-info">
        Which Will Be Held
        <br />
        On Friday 23<sup>rd</sup> January 2026, At 5:00 P.m,
      </p>
    </div>
  );
};

export default CountdownTimer;
