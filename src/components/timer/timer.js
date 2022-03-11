import { useState, useEffect } from "react";

function Timer() {
    const getTime = () => {
        const date = new Date();
        const hours = date.getHours();
        const isPM = hours > 12;
        return `${isPM ? hours - 12 : hours}:${date.getMinutes().toString().padStart(2, '0')} ${isPM ? 'PM' : 'AM'}`;
    }
    const [time, setTime] = useState(getTime());

    useEffect(() => {
        const timer = requestAnimationFrame(function newTime() {
            setTime(getTime());
            requestAnimationFrame(newTime);
        });
        return () => cancelAnimationFrame(timer);
    }, []);
    return (
        <p className="m-0 d-block text-dark small">{time}</p>
    );
}

export default Timer;
