import Title from "../Shared/Title/Title";
import { FaBattleNet, FaInternetExplorer, FaAd } from "react-icons/fa";
import { FaMagnet } from "react-icons/fa6";
import { BsAirplaneEnginesFill } from "react-icons/bs";
import { DiGoogleAnalytics } from "react-icons/di";
import { GrBitcoin } from "react-icons/gr";
import { ImAngry2 } from "react-icons/im";
import { Si3M } from "react-icons/si";
import { TiChartPie } from "react-icons/ti";

const EventSponsor = () => {
  return (
    <div className="text-white mt-20 container w-11/12 mx-auto">
      <Title content="Our Event Sponsors" />
      <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 place-items-center gap-10 text-5xl ">
        <div className="border border-dashed p-8 rounded-full hover:bg-white hover:text-primary duration-500 group  backdrop-blur-lg bg-white/20">
          <FaBattleNet className="group-hover:animate-spin" />
        </div>
        <div className="border border-dashed p-8 rounded-full hover:bg-white hover:text-primary duration-500 group backdrop-blur-lg bg-white/20">
          <FaInternetExplorer className="group-hover:animate-spin" />
        </div>
        <div className="border border-dashed p-8 rounded-full hover:bg-white hover:text-primary duration-500 group backdrop-blur-lg bg-white/20">
          <FaMagnet className="group-hover:animate-spin" />
        </div>
        <div className="border border-dashed p-8 rounded-full hover:bg-white hover:text-primary duration-500 group backdrop-blur-lg bg-white/20">
          <FaAd className="group-hover:animate-spin" />
        </div>
        <div className="border border-dashed p-8 rounded-full hover:bg-white hover:text-primary duration-500 group backdrop-blur-lg bg-white/20">
          <DiGoogleAnalytics className="group-hover:animate-spin" />
        </div>
        <div className="border border-dashed p-8 rounded-full hover:bg-white hover:text-primary duration-500 group backdrop-blur-lg bg-white/20">
          <BsAirplaneEnginesFill className="group-hover:animate-spin" />
        </div>
        <div className="border border-dashed p-8 rounded-full hover:bg-white hover:text-primary duration-500 group backdrop-blur-lg bg-white/20">
          <GrBitcoin className="group-hover:animate-spin" />
        </div>
        <div className="border border-dashed p-8 rounded-full hover:bg-white hover:text-primary duration-500 group backdrop-blur-lg bg-white/20">
          <ImAngry2 className="group-hover:animate-spin" />
        </div>
        <div className="border border-dashed p-8 rounded-full hover:bg-white hover:text-primary duration-500 group backdrop-blur-lg bg-white/20">
          <Si3M className="group-hover:animate-spin" />
        </div>
        <div className="border border-dashed p-8 rounded-full hover:bg-white hover:text-primary duration-500 group backdrop-blur-lg bg-white/20">
          <TiChartPie className="group-hover:animate-spin" />
        </div>
      </div>
    </div>
  );
};

export default EventSponsor;
