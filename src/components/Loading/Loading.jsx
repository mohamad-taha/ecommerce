import React from "react";
import "./Loading.css";

const Loading = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <svg viewBox="25 25 50 50" className="loading">
        <circle r="20" cy="50" cx="50"></circle>
      </svg>
    </div>
  );
};

export default Loading;
