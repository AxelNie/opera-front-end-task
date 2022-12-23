import "../styles/RoomTemperatureWidget.css";
import "../index.css";

function RoomTemperatureWidget(props) {
  const style = {
    background:
      props.room === "Living room"
        ? "linear-gradient(160.35deg, #00EBC1 7.95%, #00BDC9 92.76%)"
        : props.room === "Kitchen"
        ? "linear-gradient(160.35deg, #26C8FC 7.95%, #5E76F5 92.76%)"
        : props.room === "Bedroom"
        ? "linear-gradient(160.35deg, #FFD875 7.95%, #F43D53 92.76%)"
        : props.room === "Bathroom"
        ? "linear-gradient(160.35deg, #FC6FFF 7.95%, #AF3DF4 92.76%)"
        : "linear-gradient(160.35deg, #FFD875 7.95%, #F43D53 92.76%)",
    boxShadow:
      props.room === "Living room"
        ? "0px 5px 12px #00EBC140"
        : props.room === "Kitchen"
        ? "0px 5px 12px #26C8FC40"
        : props.room === "Bedroom"
        ? "0px 5px 12px #FFD87540"
        : props.room === "Bathroom"
        ? "0px 5px 12px #FC6FFF40"
        : "0px 5px 12px #FFD87540",
  };

  return (
    <div className="widget-container">
      <div className="box">
        <div className="icon-bg" style={style}>
          <img className="icon" src={props.icon} />
        </div>
      </div>
      <div className="temperature">{props.temp}</div>
      <div className="room-title">{props.room}</div>
    </div>
  );
}

export default RoomTemperatureWidget;
