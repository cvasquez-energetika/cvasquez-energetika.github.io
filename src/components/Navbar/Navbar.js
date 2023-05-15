import React from "react";
import Logo from "../../assets/images/logo.png";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header>
        <img className="logo" src={Logo} alt="Energetika Logo" />
        <nav>
          <ul className="nav_links">
            <li>
              <Link to={"/support"}>Soporte</Link>
            </li>
            <li>
              <Link to={"/policy"}>Politica de Privacidad</Link>
            </li>
          </ul>
        </nav>
        <a href="##">
          <button>Contacto</button>
        </a>
      </header>
    </>
  );
};

export default Navbar;
