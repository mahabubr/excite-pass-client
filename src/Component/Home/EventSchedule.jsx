import Loader from "../Shared/Loader/Loader";
import Title from "../Shared/Title/Title";
import { useQuery, gql } from "@apollo/client";
import EventCard from "../UI/Card/EventCard";

const GET_EVENTS = gql`
  query Events {
    Events {
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

const EventSchedule = () => {
  const { loading, error, data } = useQuery(GET_EVENTS);

  const events = data?.Events.slice(0, 3);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className=" mt-20 container w-11/12 mx-auto">
      <Title content="Event Schedule" />
      <p className="text-sm mt-2 text-justify text-accent md:w-8/12 mx-auto">
        Join us for an exciting lineup of speakers and workshops in our event
        schedule, promising insightful discussions and engaging activities for
        all attendees. Explore a diverse range of sessions and networking
        opportunities in our meticulously crafted event schedule, designed to
        inspire and empower participants.
      </p>
      <div className="mt-10 backdrop-blur-lg bg-white/20 rounded-lg border border-primary border-dashed">
        {!error &&
          events.length > 0 &&
          events.map((event, i) => <EventCard key={i} event={event} />)}
      </div>
    </div>
  );
};

export default EventSchedule;
