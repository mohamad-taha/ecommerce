import React from "react";
import logo from "../../assets/imgs/logo.svg";
import Links from "../Links/Links";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="container mt">
      <footer>
        <img src={logo} alt="logo" />
        <div>
          <p>Links</p>
          <Links />
        </div>
        <div>
          <p>help</p>
          <ul>
            <li>Payments Options</li>
            <li>Returns</li>
            <li>Privacy Policies</li>
          </ul>
        </div>
        <div>
          <p>Newsletter</p>
          <input type="text" name="msg" placeholder="write letter here" />
          <button>SUBSCRIBE</button>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
