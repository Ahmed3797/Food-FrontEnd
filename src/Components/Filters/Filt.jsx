import React from "react";
import PriceFilters from "./PriceFilters";
import CategoryFilters from "./CategoryFilters";

const Filt = ({ setCategoryFilters, setPriceFilters, apply }) => {
  return (
    <div className="p-3">
      <PriceFilters setPriceFilters={setPriceFilters} />
      {/* <CategoryFilters setCategoryFilters={setCategoryFilters} /> */}
      <div className="text-center">
        <button
          className="mt-6 mb-6 bg-[#ffcdb2] transition-all delay-25 hover:bg-black rounded-md p-3 text-white font-semibold"
          onClick={apply}
        >
          Apply Filter
        </button>
      </div>
    </div>
  );
};

export default Filt;
