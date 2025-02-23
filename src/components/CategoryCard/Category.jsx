import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../context/Context";

const Category = ({ img, name }) => {
  const { setOption } = useContext(Context);
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        setOption(name);
        navigate("/shop?page=1");
      }}
    >
      <img src={img} alt={name} />
      <p>{name}</p>
    </div>
  );
};

export default Category;
