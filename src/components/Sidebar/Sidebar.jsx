import React, { useContext, useEffect } from "react";
import Links from "../Links/Links";
import SearchForm from "../SearchForm/SearchForm";
import { IoCloseOutline } from "react-icons/io5";
import { Context } from "../../context/Context";
import "./Sidebar.css";

const Sidebar = () => {
  const { showSidebar, setShowSidebar } = useContext(Context);

  useEffect(() => {
    window.onresize = () => {
      if (window.innerWidth > 639) setShowSidebar(false);
    };
  }, [window.innerWidth]);

  return (
    <div
      style={{ transform: showSidebar ? "translateX(0)" : "translateX(-100%)" }}
      className="sidebar"
    >
      <button onClick={() => setShowSidebar(false)}>
        <IoCloseOutline fontSize={30} />
      </button>
      <SearchForm />
      <Links />
    </div>
  );
};

export default Sidebar;
