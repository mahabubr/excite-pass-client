import { MdPaid, MdDiscount, MdArrowOutward } from "react-icons/md";
import { FaInfoCircle } from "react-icons/fa";
import { Button, Input } from "@material-tailwind/react";
import { ImPaypal } from "react-icons/im";
import { GrVisa } from "react-icons/gr";
import { RiMastercardFill } from "react-icons/ri";
import { FaCreditCard } from "react-icons/fa";
import { useState } from "react";

const Booking = ({ singleData, ticketCount }) => {
  const [payType, setPayType] = useState("");
  const [couponData, setCouponData] = useState("");

  const totalTicketPrice = (
    parseInt(ticketCount + 1) * parseFloat(singleData.price)
  ).toFixed(2);

  const taxPrice = (totalTicketPrice * 0.2).toFixed(2);

  const discountPrice =
    couponData === "EXP5548"
      ? (parseFloat(totalTicketPrice) * 0.1).toFixed(2)
      : 0;

  const totalPrice = (
    parseFloat(totalTicketPrice) - parseFloat(discountPrice)
  ).toFixed(2);

  const discountTotalPrice = (
    parseFloat(totalPrice) + parseFloat(taxPrice)
  ).toFixed(2);

  return (
    <div>
      <div className="bg-secondary p-4 font-bold rounded-t-md flex items-center gap-3">
        <MdPaid size={20} />
        <p>Booking Info</p>
      </div>
      <div className="bg-white text-primary p-6 rounded-b-md space-y-4">
        <div className="border-b pb-5 border-primary border-dashed">
          <div className="flex items-center gap-4 ">
            <FaInfoCircle className="text-secondary" size={30} />
            <div>
              <h2 className="font-bold text-lg text-accent">
                {singleData.location}
              </h2>
              <p className="text-sm">
                {new Date(singleData.time).toDateString()}
              </p>
              <p className="text-sm">Hall No : {singleData.hall_no}</p>
              <p className="text-sm font-bold">
                Price : $ {singleData.price} x {parseInt(ticketCount) + 1}
              </p>
            </div>
          </div>
        </div>
        <div className="border-b pb-5 border-primary border-dashed">
          <h2 className="font-bold text-lg text-accent">
            Select Discount Coupon
          </h2>
          <div className="flex items-center gap-4 mt-4">
            <MdDiscount className="text-secondary" size={30} />
            <Input
              onChange={(e) => setCouponData(e.target.value)}
              variant="outlined"
              label="Type EXP5548"
            />
          </div>
        </div>
        <div className="border-b pb-5 border-primary border-dashed">
          <h2 className="font-bold text-lg text-accent">Your Preferred Bank</h2>
          <div className="grid grid-cols-2 place-items-center gap-4 mt-4">
            <ImPaypal
              onClick={() => setPayType("Paypal")}
              className="text-white bg-gray-900 w-full p-3 text-5xl rounded-md cursor-pointer hover:bg-indigo-800 duration-300"
            />
            <GrVisa
              onClick={() => setPayType("Visa")}
              className="text-white bg-gray-900 w-full p-3 text-5xl rounded-md cursor-pointer hover:bg-amber-800 duration-300"
            />
            <RiMastercardFill
              onClick={() => setPayType("Master Card")}
              className="text-white bg-gray-900 w-full p-3 text-5xl rounded-md cursor-pointer hover:bg-red-800 duration-300"
            />
            <FaCreditCard
              onClick={() => setPayType("Card")}
              className="text-white bg-gray-900 w-full p-3 text-5xl rounded-md cursor-pointer hover:bg-green-800 duration-300"
            />
          </div>
        </div>
        {payType && (
          <div className=" space-y-2">
            <h2 className="font-bold text-lg text-accent">
              Pay With - <span className="text-secondary">{payType}</span>
            </h2>
            <Input variant="outlined" label="XXXX-XXXX-XXXX-XXXXX" />
            <Input variant="outlined" label="253" />
            <Input variant="outlined" label="John De" />
          </div>
        )}
        <div className="border p-5 rounded-md border-primary border-dashed  space-y-2">
          <h2 className="font-bold text-lg text-accent">
            Your Ticket Price Summary
          </h2>
          <div className="mt-2 border-b-2 border-primary pb-2">
            <div className="flex justify-between text-sm font-semibold">
              <p>Person x {ticketCount}</p>
              <p>${totalTicketPrice}</p>
            </div>
            <div className="flex justify-between text-sm font-semibold">
              <p>Tax x 20%</p>
              <p>${taxPrice}</p>
            </div>
          </div>
          <div className="mt-2 border-b-2 border-primary pb-2">
            <div className="flex justify-between text-sm font-semibold">
              <p>Membership Discount</p>
              <p>$0</p>
            </div>
            <div className="flex justify-between text-sm font-semibold">
              <p>Discount</p>
              <p>${discountPrice}</p>
            </div>
          </div>
          <div className="mt-2 ">
            <div className="flex justify-between text-sm font-semibold">
              <p>Total Price</p>
              <p>${discountTotalPrice}</p>
            </div>
          </div>
          <div>
            <Button
              variant="gradient"
              color="deep-orange"
              size="sm"
              className="flex justify-center items-center gap-4 w-full mt-6"
            >
              Book a Ticket <MdArrowOutward size={20} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
