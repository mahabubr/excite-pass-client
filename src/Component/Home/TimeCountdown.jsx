import { useState, useEffect } from "react";
import moment from "moment";
import Title from "../Shared/Title/Title";

const TimeCountdown = () => {
  const calculateTimeLeft = () => {
    const now = moment();
    const futureDate = moment().add(40, "days");
    const duration = moment.duration(futureDate.diff(now));
    const totalSeconds = duration.asSeconds();
    return totalSeconds;
  };

  const [secondsRemaining, setSecondsRemaining] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsRemaining((prevSeconds) => prevSeconds - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const days = Math.floor(secondsRemaining / (60 * 60 * 24));
  const hours = Math.floor((secondsRemaining % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((secondsRemaining % (60 * 60)) / 60);
  const seconds = secondsRemaining % 60;

  return (
    <div className="text-white mt-20 container w-11/12 mx-auto">
      <Title content="Yearly Events Coming" />
      <div className="flex justify-center items-center flex-wrap">
        <div className=" p-4 rounded-md m-2 flex justify-center items-center">
          <h1 className="outline-text">{days}</h1>
          <span className="text-sm">days</span>
        </div>
        <div className=" p-4 rounded-md m-2 flex justify-center items-center">
          <h1 className="outline-text">{hours}</h1>
          <span className="text-sm">hours</span>
        </div>
        <div className=" p-4 rounded-md m-2 flex justify-center items-center">
          <h1 className="outline-text">{minutes}</h1>
          <span className="text-sm">minutes</span>
        </div>
        <div className=" p-4 rounded-md m-2 flex justify-center items-center">
          <h1 className="outline-text">{seconds}</h1>
          <span className="text-sm">seconds</span>
        </div>
      </div>
    </div>
  );
};

export default TimeCountdown;
