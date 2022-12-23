import "../styles/BottomNav.css";
import "../index.css";
import gear from "../icons/coolicongear.svg";
import bars from "../icons/cooliconbars.svg";
import home from "../icons/cooliconhome.svg";
import bulb from "../icons/cooliconbulb.svg";

function BottomNav() {
  return (
    <div className="bottom-nav">
      <div className="bottom-nav-content">
        <div className="household">
          <img src={home} alt={"home"} />
          <p className="household-text">Household</p>
        </div>
        <img src={bars} alt={"bars"} />
        <img src={bulb} alt={"bulb"} />
        <img src={gear} alt={"gear"} />
      </div>
    </div>
  );
}

export default BottomNav;
