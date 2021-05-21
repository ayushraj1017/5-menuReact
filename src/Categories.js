import React from "react";
import items from "./data";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];
const Categories = ({ filterCategory }) => {
  return (
    <section>
      <h1 className="text-center">MENU</h1>

      <div className="flex justify-between">
        {allCategories.map((category, index) => {
          return (
            <div>
              <button
                className="bg-yellow-600 text-yellow-100 p-4 m-2 capitalize"
                value={category}
                onClick={filterCategory}
                key={index}
              >
                {category}
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Categories;
