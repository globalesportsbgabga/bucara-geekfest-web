import { useEffect, useState } from "react";
import styles from "./Countdown.module.css";

const EVENT_DATE = new Date("2026-08-21T09:00:00");

function Countdown() {
  const calculateTime = () => {
    const difference = EVENT_DATE - new Date();

    if (difference <= 0) {
      return {
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      };
    }

    return {
      days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, "0"),
      hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, "0"),
      minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, "0"),
      seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
    };
  };

  const [time, setTime] = useState(calculateTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(calculateTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.countdown}>

      <div className={styles.card}>
        <span>{time.days}</span>
        <small>Días</small>
      </div>

      <div className={styles.card}>
        <span>{time.hours}</span>
        <small>Horas</small>
      </div>

      <div className={styles.card}>
        <span>{time.minutes}</span>
        <small>Minutos</small>
      </div>

      <div className={styles.card}>
        <span>{time.seconds}</span>
        <small>Segundos</small>
      </div>

    </div>
  );
}

export default Countdown;