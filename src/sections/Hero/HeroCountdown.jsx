
import { useEffect, useState } from "react";

import styles from "./HeroCountdown.module.css";

function HeroCountdown() {
  const eventDate = new Date("2027-04-02T10:00:00-05:00");

  const calculateTimeLeft = () => {
    const difference = eventDate.getTime() - Date.now();

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.countdown} aria-label="Cuenta regresiva para la apertura">
      {[
        { value: timeLeft.days, label: "Días" },
        { value: timeLeft.hours, label: "Horas" },
        { value: timeLeft.minutes, label: "Minutos" },
        { value: timeLeft.seconds, label: "Segundos" },
      ].map((item) => (
        <div className={styles.item} key={item.label}>
          <span className={styles.number}>
            {String(item.value).padStart(2, "0")}
          </span>

          <span className={styles.label}>{item.label}</span>
        </div>
      ))}
    </div>
  );
}

export default HeroCountdown;
