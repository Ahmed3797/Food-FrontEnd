import React, { useState } from "react";

const Cats = ({ category, setCategoryFilters }) => {
  const [select, setSelected] = useState(false);

  function toggle() {
    setCategoryFilters(category);
    setSelected(!select);
  }

  return (
    <div>
      <button
        className={` font-medium rounded-xl border-[2px] border-[black] p-[6px] ${
          select ? "bg-red-200" : ""
        } w-[100px]`}
        onClick={toggle}
      >
        {category.name}
      </button>
    </div>
  );
};

export default Cats;
