import "../styles/TopNav.css";
import "../index.css";
import hamburgerMenu from "../icons/Unionhamburger.svg";
import avatar from "../icons/avatar.svg";

function TopNav() {
  return (
    <div className="container-topnav">
      <div className="left">
        <img
          className="topnav-hamburger"
          src={hamburgerMenu}
          alt={"hamburger menu"}
        />
        <h1 className="topnav-title">Household</h1>
      </div>
      <img className="topnav-avatar" src={avatar} alt={"avatar"} />
    </div>
  );
}

export default TopNav;
