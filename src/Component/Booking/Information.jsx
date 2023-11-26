import { Checkbox, Input, Option, Select } from "@material-tailwind/react";
import {
  FaPersonDotsFromLine,
  FaPeoplePulling,
  FaMobileScreenButton,
} from "react-icons/fa6";
import { IoPersonCircleSharp } from "react-icons/io5";
import { TbGenderAndrogyne } from "react-icons/tb";
import { GiWorld } from "react-icons/gi";
import { MdAlternateEmail } from "react-icons/md";

const Information = ({ setTicketCount, ticketCount }) => {
  const renderAdditionalForms = () => {
    const forms = [];

    for (let i = 0; i < parseInt(ticketCount); i++) {
      forms.push(
        <div className="mt-5" key={i}>
          <div className="bg-secondary p-4 font-bold rounded-t-md flex items-center gap-3">
            <FaPersonDotsFromLine size={20} />
            <p> Person {i + 2}: Primary Contact</p>
          </div>
          <div className="bg-white text-primary p-6 rounded-b-md space-y-4">
            <div className="flex items-center gap-4">
              <IoPersonCircleSharp size={35} />
              <div className="flex justify-center items-center w-full gap-4">
                <Input variant="outlined" label="First Name" />
                <Input variant="outlined" label="Last Name" />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <TbGenderAndrogyne size={35} />
              <div className="flex justify-center items-center w-full gap-4">
                <Select label="Select Your Gender">
                  <Option value="Male">Male</Option>
                  <Option value="Female">Female</Option>
                </Select>
              </div>
            </div>
            <div className="flex items-center gap-4 justify-center">
              <Checkbox label="Child" />
              <Checkbox label="Adult" />
            </div>
          </div>
        </div>
      );
    }

    return forms;
  };

  return (
    <div className="col-span-4">
      <div className="bg-secondary p-4 font-bold rounded-t-md flex items-center gap-3">
        <FaPersonDotsFromLine size={20} />
        <p> Person 1: Primary Contact</p>
      </div>
      <div className="bg-white text-primary p-6 rounded-b-md space-y-4">
        <div className="flex items-center gap-4">
          <FaPeoplePulling size={35} className="text-secondary" />
          <Select
            label="Select How Many Tickets"
            onChange={(e) => setTicketCount(e)}
          >
            <Option value="0">One</Option>
            <Option value="1">Two</Option>
            <Option value="2">Three</Option>
            <Option value="3">Four</Option>
            <Option value="4">Five</Option>
          </Select>
        </div>
        <div className="flex items-center gap-4">
          <IoPersonCircleSharp size={35} className="text-secondary" />
          <div className="flex justify-center items-center w-full gap-4">
            <Input variant="outlined" label="First Name" />
            <Input variant="outlined" label="Last Name" />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <TbGenderAndrogyne size={35} className="text-secondary" />
          <div className="flex justify-center items-center w-full gap-4">
            <Select label="Select Your Gender">
              <Option value="Male">Male</Option>
              <Option value="Female">Female</Option>
            </Select>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex justify-center items-center w-full gap-4">
            <GiWorld size={35} className="text-secondary" />
            <Input variant="outlined" label="Nationality" />
          </div>
          <div className="flex justify-center items-center w-full gap-4">
            <FaMobileScreenButton size={35} className="text-secondary" />
            <Input variant="outlined" label="Phone Number" />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex justify-center items-center w-full gap-4">
            <MdAlternateEmail size={35} className="text-secondary" />
            <Input variant="outlined" label="Your Email" />
          </div>
        </div>
        <div className="flex items-center gap-4 justify-center">
          <Checkbox label="Child" />
          <Checkbox label="Adult" />
        </div>
      </div>
      <div>{renderAdditionalForms()}</div>
    </div>
  );
};

export default Information;
