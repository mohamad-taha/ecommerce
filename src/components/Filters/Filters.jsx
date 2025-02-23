import React, { useContext, useEffect } from "react";
import { Context } from "../../context/Context";
import "./Filters.css";

const Filters = () => {
  const { query, option, setOption } = useContext(Context);
  const [filters, setFilters] = React.useState([]);

  useEffect(() => {
    const getOptions = async () => {
      const resp = await fetch("https://dummyjson.com/products/category-list");
      const data = await resp.json();
      setFilters(data);
    };
    getOptions();
  }, []);
  return (
    <div className="filters">
      <input
        style={{ pointerEvents: query == "" ? "all" : "none" }}
        id="listSelect"
        type="text"
        list="dataList"
        placeholder={query !== "" ? "unusable while search" : "select category"}
        onChange={(e) => {
          setOption(e.target.value);
        }}
        value={option || ""}
      />
      <datalist id="dataList">
        <option value="">category</option>
        {filters.map((filter, id) => (
          <option value={filter} key={id}>
            {filter}
          </option>
        ))}
      </datalist>
    </div>
  );
};

export default Filters;
