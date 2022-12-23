import "../styles/CurrentUsage.css";
import energy from "../icons/energy.svg";
import temp from "../icons/thermostat.svg";
import humidity from "../icons/humidity.svg";
import backgroundSvg from "../icons/background-shape.svg";

function CurrentUsage() {
  function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
    var angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

    return {
      x: centerX + radius * Math.cos(angleInRadians),
      y: centerY + radius * Math.sin(angleInRadians),
    };
  }

  function describeArc(x, y, radius, startAngle, endAngle) {
    var start = polarToCartesian(x, y, radius, endAngle);
    var end = polarToCartesian(x, y, radius, startAngle);

    var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

    var d = [
      "M",
      start.x,
      start.y,
      "A",
      radius,
      radius,
      0,
      largeArcFlag,
      0,
      end.x,
      end.y,
    ].join(" ");

    return d;
  }
  return (
    <div className="current-usage-container">
      <p className="current-usage-title">Current usage</p>
      <div className="current-usage-content">
        <div className="data-vis-container">
          <div className="data-vis">
            <img className="data-vis-icon" src={temp} />
          </div>
          <h2>21°C</h2>
        </div>
        <div className="usage-kwh-container">
          <svg className="circle-bar">
            <path
              className="arc-path"
              d={describeArc(74.5, 74.5, 60, 0, 140)}
              fill="none"
              stroke="#00D2DF20"
              stroke-width="16"
            />
            <path
              className="arc-path"
              d={describeArc(74.5, 74.5, 68, 0, 140)}
              fill="none"
              stroke="#00D2DF"
              stroke-width="4"
            />
          </svg>
          <div className="usage-circle">
            <img className="energy-icon" src={energy} />
            <h2 className="usage-text">14 kWh</h2>
            <p className="usage-price">€ 1.25</p>
          </div>
        </div>
        <div className="data-vis-container">
          <div className="data-vis">
            <img className="data-vis-icon" src={humidity} />
          </div>
          <h2>58%</h2>
        </div>
      </div>
    </div>
  );
}

export default CurrentUsage;
