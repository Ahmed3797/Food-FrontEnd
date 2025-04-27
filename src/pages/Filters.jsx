import React, { useState } from "react";
import Filt from "../Components/Filters/Filt";
import Results from "../Components/Filters/Results";

const Filters = () => {
  const [pricefilters, setPriceFilters] = useState({});
  const [categoryfilters, setCategoryFilters] = useState([]);
  const [filters, setFilters] = useState({});

  function setPricesFilters(Pricefilter) {

    if(Pricefilter=="all")
    {
      setPriceFilters({ min: 0, max: 10000000 });
    }
    else{
    const [min, max] = Pricefilter.split("-").map(Number);
    setPriceFilters({ min: min, max: max });
    }
  }

  function setCategoriesFilters(category) {
    setCategoryFilters((state) => {
      return [...state, category];
    });
  }

  function ApplyFilters() {
    setFilters({
      pricefilters: pricefilters,
      categoryfilters: categoryfilters,
    });
  }

  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="">
          <Filt
            setCategoryFilters={setCategoriesFilters}
            setPriceFilters={setPricesFilters}
            apply={ApplyFilters}
          ></Filt>
        </div>
        <div className="col-span-2">
          <Results filters={filters} />
        </div>
      </div>
    </div>
  );
};

export default Filters;
