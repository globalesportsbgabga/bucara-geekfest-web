import { useEffect, useState } from "react";

import styles from "./HeroCountdown.module.css";

function HeroCountdown() {

    const eventDate = new Date("2026-08-21T09:00:00");

    const calculateTimeLeft = () => {

        const now = new Date();

        const difference = eventDate.getTime() - now.getTime();

        if (difference <= 0) {

            return {

                days: 0,

                hours: 0,

                minutes: 0,

                seconds: 0

            };

        }

        return {

            days: Math.floor(difference / (1000 * 60 * 60 * 24)),

            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),

            minutes: Math.floor((difference / (1000 * 60)) % 60),

            seconds: Math.floor((difference / 1000) % 60)

        };

    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {

        const timer = setInterval(() => {

            setTimeLeft(calculateTimeLeft());

        }, 1000);

        return () => clearInterval(timer);

    }, []);

    return (

        <div className={styles.countdown}>

            <div className={styles.item}>

                <span className={styles.number}>
                    {String(timeLeft.days).padStart(2, "0")}
                </span>

                <span className={styles.label}>
                    Días
                </span>

            </div>

            <div className={styles.item}>

                <span className={styles.number}>
                    {String(timeLeft.hours).padStart(2, "0")}
                </span>

                <span className={styles.label}>
                    Horas
                </span>

            </div>

            <div className={styles.item}>

                <span className={styles.number}>
                    {String(timeLeft.minutes).padStart(2, "0")}
                </span>

                <span className={styles.label}>
                    Minutos
                </span>

            </div>

            <div className={styles.item}>

                <span className={styles.number}>
                    {String(timeLeft.seconds).padStart(2, "0")}
                </span>

                <span className={styles.label}>
                    Segundos
                </span>

            </div>

        </div>

    );

}

export default HeroCountdown;