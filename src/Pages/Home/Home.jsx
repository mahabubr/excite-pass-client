import AboutLiveEvent from "../../Component/Home/AboutLiveEvent";
import Banner from "../../Component/Home/Banner";
import EntertainmentGuide from "../../Component/Home/EntertainmentGuide";
import EventSchedule from "../../Component/Home/EventSchedule";
import EventSponsor from "../../Component/Home/EventSponsor";
import Search from "../../Component/Home/Search";
import Subscription from "../../Component/Home/Subscription";
import TimeCountdown from "../../Component/Home/TimeCountdown";
import UpcomingEvents from "../../Component/Home/UpcomingEvents";
import WhyChoose from "../../Component/Home/WhyChoose";

const Home = () => {
  return (
    <div>
      <Banner />
      <Search />
      <UpcomingEvents />
      <EntertainmentGuide />
      <EventSchedule />
      <TimeCountdown />
      <AboutLiveEvent />
      <WhyChoose />
      <Subscription />
      <EventSponsor />
    </div>
  );
};

export default Home;
