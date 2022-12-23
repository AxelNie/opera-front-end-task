import "../styles/RoomTemperatureList.css";
import "../index.css";
import RoomTemperatureWidget from "./RoomTemperatureWidget";
import kitchen from "../icons/Unionkitchen.svg";
import livingRoom from "../icons/Unionliving-room.svg";
import bedroom from "../icons/Vectorbedroom.svg";
import bathroom from "../icons/Vectorbathroom.svg";

function RoomTemperatureList() {
  return (
    <div className="container-temp-list">
      <RoomTemperatureWidget
        className="widget"
        icon={livingRoom}
        room={"Living room"}
        temp={"19°C"}
      />
      <RoomTemperatureWidget
        className="widget"
        icon={kitchen}
        room={"Kitchen"}
        temp={"21°C"}
      />
      <RoomTemperatureWidget
        className="widget"
        icon={bedroom}
        room={"Bedroom"}
        temp={"19°C"}
      />
      <RoomTemperatureWidget
        className="widget"
        icon={kitchen}
        room={"Bathroom"}
        temp={"22°C"}
      />
    </div>
  );
}

export default RoomTemperatureList;
