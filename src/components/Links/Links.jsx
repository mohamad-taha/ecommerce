import React from "react";
import { Link } from "react-router-dom";

const Links = () => {
  return (
    <ul>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/shop?page=1"}>Shop</Link>
      </li>
      <li>
        <Link>About</Link>
      </li>
      <li>
        <Link>Contact</Link>
      </li>
    </ul>
  );
};

export default Links;
