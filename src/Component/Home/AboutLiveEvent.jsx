import { Button } from "@material-tailwind/react";
import Title from "../Shared/Title/Title";
import { FaLocationDot } from "react-icons/fa6";

const AboutLiveEvent = () => {
  return (
    <div className="text-white mt-20 container w-11/12 mx-auto">
      <Title content="About Live Events" />
      <div className="mt-10 grid lg:grid-cols-2 gap-10 place-items-center">
        <div className="h-full">
          <h2 className="text-xl font-bold text-accent">
            Where the worlds meet ?
          </h2>
          <p className="text-sm mt-5 text-gray-300 text-justify">
            The confluence of diverse cultures, ideas, and perspectives
            intertwines in bustling city streets, where languages, traditions,
            and histories converge, creating a vibrant tapestry of global
            intersection and exchange. This intersection serves as a nexus where
            people, customs, and innovations from various corners of the globe
            harmonize, fostering a mosaic of unity amidst diversity.
          </p>
          <p className="text-sm mt-5 text-gray-300 text-justify">
            At the crossroads of civilizations, where boundaries blur, lies the
            nexus where the world&apos;s stories intertwine and coalesce.
          </p>
          <div className="mt-10 flex items-center gap-5">
            <Button variant="gradient" color="deep-orange">
              $ Buy Ticket
            </Button>
            <Button variant="outlined" color="deep-orange">
              Read More
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-2 bg-white text-primary  rounded-md w-full h-full border border-dashed border-primary">
          <div className="flex justify-center items-center flex-col space-y-2 p-6 border-r border-b border-primary  border-dashed">
            <FaLocationDot size={50} className="text-accent" />
            <h2 className="font-bold text-xl text-secondary">Massachusetts</h2>
            <p className="text-gray-500">United State</p>
          </div>
          <div className="flex justify-center items-center flex-col space-y-2 p-6 border-b border-primary  border-dashed">
            <FaLocationDot size={50} className="text-accent" />
            <h2 className="font-bold text-xl text-secondary">Massachusetts</h2>
            <p className="text-gray-500">United State</p>
          </div>
          <div className="flex justify-center items-center flex-col space-y-2 p-6  border-primary  border-dashed border-r">
            <FaLocationDot size={50} className="text-accent " />
            <h2 className="font-bold text-xl text-secondary">Massachusetts</h2>
            <p className="text-gray-500">United State</p>
          </div>
          <div className="flex justify-center items-center flex-col space-y-2 p-6  border-primary  border-dashed">
            <FaLocationDot size={50} className="text-accent" />
            <h2 className="font-bold text-xl text-secondary">Massachusetts</h2>
            <p className="text-gray-500">United State</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutLiveEvent;
