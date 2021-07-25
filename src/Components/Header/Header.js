import React from "react";
import "./Header.css";
import Logo from "../../Images/logo.svg";
import Settings from "../../Images/settings.png";
import Search from "../../Images/search.png";
const Header = () => {
  return (
    <div className="headerNavbar">
      <div>
        <ul>
          <li>Coins</li>
          <li>Exchanges</li>
          <li>Swap</li>
        </ul>
      </div>
      <div>
        <img src={Logo} alt="logoicon" className="logo" />
      </div>
      <div className="connectwallet">
        <img src={Search} alt="searchicon" />
        <img src={Settings} alt="settingsicon" />
        <button>Connect Wallet</button>
      </div>
    </div>
  );
};

export default Header;
