import Title from "../Shared/Title/Title";
import { FaCalendar, FaLocationArrow } from "react-icons/fa";

const UpcomingEvents = () => {
  return (
    <div className="text-white mt-20 container w-11/12 mx-auto">
      <Title content="Feature Events" />
      <div className="mt-10">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 overflow-hidden rounded-md h-[400px] relative group cursor-move">
            <img
              src="https://images.unsplash.com/photo-1561489411-c0ce86e994bb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="w-full object-cover rounded-md h-[400px] duration-500 hover:h-[500px] hover:brightness-50"
            />
            <div className="absolute left-10 bottom-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <p className="text-sm font-bold">$220 - $450</p>
              <h2 className="font-bold text-xl text-accent">IT Conference</h2>
              <div className="flex items-center gap-4 text-sm">
                <p className="inline-flex items-center gap-2">
                  <FaCalendar />
                  Jan - 12
                </p>
                <p className="inline-flex items-center gap-2">
                  <FaLocationArrow />
                  New York
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-1 overflow-hidden rounded-md h-[400px] relative group cursor-move">
            <img
              src="https://images.unsplash.com/photo-1444210971048-6130cf0c46cf?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="w-full object-cover rounded-md h-[400px] duration-500 hover:h-[500px] hover:brightness-50"
            />
            <div className="absolute left-10 bottom-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <p className="text-sm font-bold">$20 - $85</p>
              <h2 className="font-bold text-xl text-accent">Family Vacation</h2>
              <div className="flex items-center gap-4 text-sm">
                <p className="inline-flex items-center gap-2">
                  <FaCalendar />
                  Apr - 22
                </p>
                <p className="inline-flex items-center gap-2">
                  <FaLocationArrow />
                  London
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className=" overflow-hidden rounded-md h-[400px] relative group cursor-move">
            <img
              src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="w-full object-cover rounded-md h-[400px] duration-500 hover:h-[500px] hover:brightness-50"
            />
            <div className="absolute left-10 bottom-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <p className="text-sm font-bold">$150 - $220</p>
              <h2 className="font-bold text-xl text-accent">Music Night</h2>
              <div className="flex items-center gap-4 text-sm">
                <p className="inline-flex items-center gap-2">
                  <FaCalendar />
                  July - 28
                </p>
                <p className="inline-flex items-center gap-2">
                  <FaLocationArrow />
                  Netherland
                </p>
              </div>
            </div>
          </div>
          <div className=" overflow-hidden rounded-md h-[400px] relative group cursor-move">
            <img
              src="https://images.unsplash.com/photo-1551454211-35c47de27645?q=80&w=1488&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="w-full object-cover rounded-md h-[400px] duration-500 hover:h-[500px] hover:brightness-50"
            />
            <div className="absolute left-10 bottom-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <p className="text-sm font-bold">$10 - $50</p>
              <h2 className="font-bold text-xl text-accent">Magic Night</h2>
              <div className="flex items-center gap-4 text-sm">
                <p className="inline-flex items-center gap-2">
                  <FaCalendar />
                  Dec - 18
                </p>
                <p className="inline-flex items-center gap-2">
                  <FaLocationArrow />
                  China
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
