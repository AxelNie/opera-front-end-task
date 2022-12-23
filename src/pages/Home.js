import "../styles/Home.css";
import "../index.css";
import TopNav from "../components/TopNav";
import BottomNav from "../components/BottomNav";
import RoomTemperatureList from "../components/RoomTemperatureList";
import CurrentUsage from "../components/CurrentUsage";
import Modes from "../components/Modes";

function Home() {
  return (
    <div className="home-container">
      <TopNav />
      <RoomTemperatureList />
      <CurrentUsage />
      <Modes />
      <BottomNav />
    </div>
  );
}

export default Home;
