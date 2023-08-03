import React from "react";
import "../../styles/navbar.scss";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <nav class="navbar">
      <img
        className="navbar-logo"
        height={50}
        src={require("../../Assets/logo.png")}
        alt="logo"
      />
      <div className="navs">
        <Link to="/" className="nav-item" activeClassName="active">
          Ana Sayfa
        </Link>
        <Link to="/table" className="nav-item" activeClassName="active">
          Puan Durumu
        </Link>
        <Link to="/news" className="nav-item" activeClassName="active">
          Haberler
        </Link>
        <Link to="/stats" className="nav-item" activeClassName="active">
          İstatistikler
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
