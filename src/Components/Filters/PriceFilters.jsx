import React, { useState } from "react";

const PriceFilters = ({ setPriceFilters }) => {
  const [selectedRange, setSelectedRange] = useState("all");

  const priceRanges = [
    { label: "All", value: "all" },
    { label: "$0 - $3", value: "0-3" },
    { label: "$3 - $6", value: "3-6" },
    { label: "$6 - $50", value: "6-50" },
  ];

  return (
    <div>
      <h2 className="text-[25px]">Filter Products by Price</h2>
      {priceRanges.map((range) => (
        <label key={range.value} style={{ display: "block", margin: "5px 0" }}>
          <input
            type="radio"
            name="priceRange"
            value={range.value}
            checked={selectedRange === range.value}
            onChange={(e) => {
              setSelectedRange(e.target.value);
              setPriceFilters(e.target.value);
            }}
          />{" "}
          {range.label}
        </label>
      ))}
    </div>
  );
};

export default PriceFilters;
