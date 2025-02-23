import React, { useContext, useState } from "react";
import { Context } from "../../context/Context";
import search from "../../assets/imgs/search.svg";
import { useNavigate } from "react-router-dom";
import "./SearchForm.css";

const SearchForm = () => {
  const [showInput, setShowInput] = useState(false);
  const { query, setQuery, setShowSidebar } = useContext(Context);
  const navigate = useNavigate();

  const searchData = (e) => {
    e.preventDefault();
    setShowInput(!showInput);
    if (showInput && query !== "") {
      setShowInput(!showInput);
      navigate("/shop?page=1");
    }
    setShowSidebar(false);
  };

  return (
    <form className="searchForm" onSubmit={searchData}>
      <input
        onChange={(e) => setQuery(e.target.value)}
        style={{
          opacity: showInput ? "1" : "0",
          pointerEvents: showInput ? "all" : "none",
        }}
        id="searchInput"
        placeholder="search title"
      />
      <button type="submit" aria-label="search">
        <img src={search} alt="search icon" />
      </button>
    </form>
  );
};

export default SearchForm;
