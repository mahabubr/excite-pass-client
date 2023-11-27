import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { FaCalendar } from "react-icons/fa";
import { LiaSearchLocationSolid } from "react-icons/lia";

const EventCard = ({ event }) => {
  return (
    <div className="grid lg:grid-cols-5 gap-20 p-6  border-b pb-8 border-primary border-dashed">
      <div className="lg:col-span-1  lg:border-r lg:pe-4 border-primary border-dashed">
        <img
          src={event.image}
          alt=""
          className="rounded-md w-full h-full object-cover lg:border p-1 border-primary border-dashed bg-white"
        />
      </div>
      <div className="lg:col-span-3  ">
        <h2 className="text-xl font-bold text-white">{event.name}</h2>
        <p className="mt-2 text-gray-300">{event.description}</p>
        <div className="mt-8 flex justify-between text-sm font-bold flex-wrap text-light-green-200">
          <p className="text-center flex items-center gap-2">
            <FaCalendar />
            {new Date(event.time).toDateString()}
          </p>
          <p className="text-center flex items-center gap-2">
            <LiaSearchLocationSolid />
            {event.location} - {event.hall_no} - {event.seat_no}
          </p>
          <p className="text-center flex items-center gap-2">$ {event.price}</p>
        </div>
      </div>
      <div className="lg:col-span-1 lg:border-l  border-primary border-dashed">
        <div className="flex justify-center items-center h-full w-full">
          <Link to={`/event/${event._id}`}>
            <Button variant="gradient" color="deep-orange">
              Details
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
