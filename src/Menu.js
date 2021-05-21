import React from "react";

const Menu = ({ key, title, price, img, desc }) => {
  return (
    <div
      className="bg-yellow-500 p-4 border border-2 rounded-2xl shadow-2xl m-5 text-center capitalize max-w-sm"
      key={key}
    >
      <img src={img} width="50%" className="mt-1 rounded-xl shadow-lg  ml-20" />
      <div className="flex justify-between mx-2 pt-2">
        <h3>{title}</h3>
        <p className="text-yellow-100">${price}</p>
      </div>
      <small className="text-center">{desc}</small>
    </div>
  );
};

export default Menu;
