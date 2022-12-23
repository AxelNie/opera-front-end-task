import "../styles/Modes.css";
import "../index.css";
//import hamburgerMenu from "../icons/Unionhamburger.svg";
import settingsIcon from "../icons/settings.svg";
import ModesButton from "./ModesButton";
import coolAirIcon from "../icons/cool-air.svg";
import ecoIcon from "../icons/eco.svg";
import silentIcon from "../icons/silent.svg";

function Modes() {
  return (
    <div className="modes-container">
      <div className="modes-header">
        <h1 className="modes-title">Modes</h1>
        <img className="settings-icon" src={settingsIcon} />
      </div>
      <div className="modes-buttons-container">
        <ModesButton mode="Cool air" enabled={true} icon={coolAirIcon} />
        <ModesButton mode="Eco" enabled={false} icon={ecoIcon} />
        <ModesButton mode="Silent" enabled={false} icon={silentIcon} />
      </div>
    </div>
  );
}

export default Modes;
