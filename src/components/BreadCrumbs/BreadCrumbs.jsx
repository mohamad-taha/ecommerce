import React from "react";
import "./BreadCrumbs.css";

const BreadCrumbs = ({ name }) => {
  return (
    <div className="mt breadCrumbs">
      <p>
        <span>Home</span>
        {">"}
        <span>product</span>
        {">"}
      </p>
      <p>{name}</p>
    </div>
  );
};

export default BreadCrumbs;
