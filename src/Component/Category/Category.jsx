import { useQuery, gql } from "@apollo/client";
import { useParams } from "react-router-dom";
import Loader from "../Shared/Loader/Loader";
import Title from "../Shared/Title/Title";
import EventCard from "../UI/Card/EventCard";

const GET_CATEGORY = gql`
  query EventsAll($categoryEventsId: ID!) {
    CategoryEvents(id: $categoryEventsId) {
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

const Category = () => {
  const { id } = useParams();

  const { loading, data } = useQuery(GET_CATEGORY, {
    variables: { categoryEventsId: id },
  });

  const categories = data?.CategoryEvents;

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="mt-10 container w-11/12 mx-auto text-white">
      <Title content="Upcoming Events" />
      <div className="mt-10 backdrop-blur-lg bg-white/20 rounded-lg border border-primary border-dashed">
        {categories.length > 0 &&
          categories.map((event, i) => <EventCard key={i} event={event} />)}
      </div>
    </div>
  );
};

export default Category;
