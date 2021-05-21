import React, { useEffect, useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import data from "./data";

function App() {
  const [items, setItems] = useState(data);

  const filterCategory = (e) => {
    const value = e.target.value;
    if (value === "all") {
      setItems(data);
    } else {
      const breakfastItems = data.filter((item) => item.category === value);
      setItems(breakfastItems);
    }
  };
  return (
    <div>
      <div className="flex flex-col text-center justify-center items-center">
        <Categories filterCategory={filterCategory} />
        <div>
          {items.map((item) => {
            return <Menu key={item.id} {...item} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
