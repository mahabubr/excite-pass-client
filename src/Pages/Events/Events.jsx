import { Link, useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import Loader from "../../Component/Shared/Loader/Loader";
import { Breadcrumbs } from "@material-tailwind/react";
import Information from "../../Component/Booking/Information";
import Booking from "../../Component/Booking/Booking";
import { useState } from "react";
import { usePDF } from "react-to-pdf";

const GET_SINGLE_EVENTS = gql`
  query singleEvents($singleEventId: ID!) {
    SingleEvent(id: $singleEventId) {
      _id
      category
      description
      hall_no
      image
      location
      name
      price
      seat_no
      time
      time_from
    }
  }
`;

const Events = () => {
  const { id } = useParams();

  const { loading, data } = useQuery(GET_SINGLE_EVENTS, {
    variables: { singleEventId: id },
  });

  const [ticketCount, setTicketCount] = useState("0");
  const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });

  const singleData = data?.SingleEvent;

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="text-white ">
      <div
        style={{
          backgroundImage: `url(${singleData.image})`,
          backgroundRepeat: "no-repeat",
          height: "40vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-secondary  h-full  opacity-80">
          <div className="container w-11/12 mx-auto flex justify-center items-center h-full flex-col">
            <h2 className="text-white font-black text-5xl">
              {singleData.name}
            </h2>
            <p className="text-gray-400">{singleData.description}</p>
            <div className="mt-10">
              <Breadcrumbs>
                <Link to="/">Home</Link>
                <Link>Event</Link>
              </Breadcrumbs>
            </div>
          </div>
        </div>
      </div>
      <div className="container w-11/12 mx-auto mt-20 grid lg:grid-cols-6 gap-10">
        <div className="lg:col-span-4">
          <Information
            setTicketCount={setTicketCount}
            ticketCount={ticketCount}
            targetRef={targetRef}
          />
        </div>
        <div className="lg:col-span-2">
          <Booking
            toPDF={toPDF}
            singleData={singleData}
            ticketCount={ticketCount}
          />
        </div>
      </div>
    </div>
  );
};

export default Events;
