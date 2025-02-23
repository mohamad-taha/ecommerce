import React, { useContext } from "react";
import logo from "../../assets/imgs/logo.svg";
import Links from "../Links/Links";
import { Link } from "react-router-dom";
import { IoMdList } from "react-icons/io";
import SearchForm from "../SearchForm/SearchForm";
import "./Navbar.css";
import { Context } from "../../context/Context";

const Navbar = () => {
  const { setShowSidebar } = useContext(Context);

  return (
    <nav>
      <Link to={"/"}>
        <img src={logo} alt="logo" />
      </Link>
      <Links />
      <div>
        <SearchForm />
        <button
          onClick={() => setShowSidebar(true)}
          className="menuBtn"
          aria-label="list button"
        >
          <IoMdList fontSize={25} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
