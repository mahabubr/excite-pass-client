import Banner from "../../Component/Home/Banner";
import EntertainmentGuide from "../../Component/Home/EntertainmentGuide";
import Search from "../../Component/Home/Search";
import UpcomingEvents from "../../Component/Home/UpcomingEvents";

const Home = () => {
  return (
    <div>
      <Banner />
      <Search />
      <UpcomingEvents />
      <EntertainmentGuide />
    </div>
  );
};

export default Home;
