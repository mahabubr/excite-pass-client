import img from "../../assets/banner-bg.jpg";
import person from "../../assets/magic-person.png";
import { MdArrowOutward } from "react-icons/md";

const Banner = () => {
  return (
    <div
      className="text-white h-96 select-none"
      style={{
        backgroundImage: `url(${img})`,
        backgroundRepeat: "no-repeat",
        height: "80vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full flex justify-center items-center h-full gap-28 container mx-auto">
        <div className="lg:w-6/12 p-10">
          <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-light to-secondary">
            Las Vegas Show &apos;23
          </h1>
          <h2 className="mt-8 text-xl font bold">
            3 days / 12 magic show / 20+ magician / show a little faith /{" "}
            <p className="text-gray-400">there magic in the night</p>
          </h2>
          <div className="border mt-6"></div>
          <div className="grid grid-cols-2  mt-8 place-items-center">
            <div className="">
              <h4 className="font-bold">February 12-18</h4>
              <p className="text-sm text-gray-400">4525 prod, Las Vegas</p>
            </div>
            <div className="flex items-center gap-3 ">
              <MdArrowOutward className="text-4xl bg-white rounded-full text-primary p-1 hover:bg-secondary duration-300" />
              <p>Contact Us</p>
            </div>
          </div>
        </div>
        <div className="lg:w-4/12 hidden lg:block">
          <img src={person} alt="" className="h-full w-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
