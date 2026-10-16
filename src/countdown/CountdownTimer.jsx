import { useState, useEffect } from "react";

// Official wedding date: Sunday, January 3, 2027 at 5:00 PM
const TARGET_DATE = new Date("January 3, 2027 17:00:00").getTime();

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
        On Sunday 3<sup>rd</sup> January 2027, At 5:00 P.M,
      </p>
    </div>
  );
};

export default CountdownTimer;
