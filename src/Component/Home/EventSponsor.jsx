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
      <div className="mt-10 grid grid-cols-5 place-items-center gap-10 text-5xl ">
        <div className="border border-dashed p-8 rounded-full hover:bg-white hover:text-primary duration-500 group">
          <FaBattleNet className="group-hover:animate-spin" />
        </div>
        <div className="border border-dashed p-8 rounded-full hover:bg-white hover:text-primary duration-500 group">
          <FaInternetExplorer className="group-hover:animate-spin"/>
        </div>
        <div className="border border-dashed p-8 rounded-full hover:bg-white hover:text-primary duration-500 group">
          <FaMagnet className="group-hover:animate-spin"/>
        </div>
        <div className="border border-dashed p-8 rounded-full hover:bg-white hover:text-primary duration-500 group">
          <FaAd className="group-hover:animate-spin"/>
        </div>
        <div className="border border-dashed p-8 rounded-full hover:bg-white hover:text-primary duration-500 group">
          <DiGoogleAnalytics className="group-hover:animate-spin"/>
        </div>
        <div className="border border-dashed p-8 rounded-full hover:bg-white hover:text-primary duration-500 group">
          <BsAirplaneEnginesFill className="group-hover:animate-spin"/>
        </div>
        <div className="border border-dashed p-8 rounded-full hover:bg-white hover:text-primary duration-500 group">
          <GrBitcoin className="group-hover:animate-spin"/>
        </div>
        <div className="border border-dashed p-8 rounded-full hover:bg-white hover:text-primary duration-500 group">
          <ImAngry2 className="group-hover:animate-spin"/>
        </div>
        <div className="border border-dashed p-8 rounded-full hover:bg-white hover:text-primary duration-500 group">
          <Si3M className="group-hover:animate-spin"/>
        </div>
        <div className="border border-dashed p-8 rounded-full hover:bg-white hover:text-primary duration-500 group">
          <TiChartPie className="group-hover:animate-spin"/>
        </div>
      </div>
    </div>
  );
};

export default EventSponsor;
