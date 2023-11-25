import Title from "../Shared/Title/Title";
import { IoTicketOutline, IoDiamondOutline  } from "react-icons/io5";
import { BsBalloon } from "react-icons/bs";
import { FaAward } from "react-icons/fa";


const WhyChoose = () => {
  return (
    <div className="text-white mt-20 container w-11/12 mx-auto">
      <Title content="Why Choose Us" />
      <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="backdrop-blur-lg bg-white/20 group p-8 rounded-md hover:bg-white hover:text-primary duration-500 select-none ">
          <IoTicketOutline size={60} color="orange" />
          <h2 className="font-bold text-lg mt-4 text-accent">
            Ultimate Flexibility
          </h2>
          <p className="text-sm font-light text-justify ">
            You’re in control, with free cancellation and payment options to
            satisfy any plan or budget.
          </p>
        </div>
        <div className="backdrop-blur-lg bg-white/20 group p-8 rounded-md hover:bg-white hover:text-primary duration-500 select-none ">
          <BsBalloon size={60} color="orange" />
          <h2 className="font-bold text-lg mt-4 text-accent">
            Memorable Experiences
          </h2>
          <p className="text-sm font-light text-justify ">
            Browse and book tours and activities so incredible, you’ll want to
            tell your friends.
          </p>
        </div>
        <div className="backdrop-blur-lg bg-white/20 group p-8 rounded-md hover:bg-white hover:text-primary duration-500 select-none ">
          <IoDiamondOutline size={60} color="orange" />
          <h2 className="font-bold text-lg mt-4 text-accent">
            Quality at Our Core
          </h2>
          <p className="text-sm font-light text-justify ">
            High quality standards. Millions of reviews. A tour company.
          </p>
        </div>
        <div className="backdrop-blur-lg bg-white/20 group p-8 rounded-md hover:bg-white hover:text-primary duration-500 select-none ">
          <FaAward size={60} color="orange" />
          <h2 className="font-bold text-lg mt-4 text-accent">
            Award Wining Support
          </h2>
          <p className="text-sm font-light text-justify ">
            New price? New plan? No problem. We’re here to help, 24/7.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
