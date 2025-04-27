import React, { useState } from "react";
import useFetch from "../../hooks/FetchHook";
import Cats from "./Cats";

const CategoryFilters = ({ setCategoryFilters }) => {
  const URL = import.meta.env.VITE_URL;
  const { data: categories, error: caterror } = useFetch(
    `${URL}/api/categories`
  );

  if (caterror) {
    return (
      <>
        <div>There is an error while loading Category</div>
      </>
    );
  }
  console.log(categories);

  return (
    <div>
      <p className="text-[25px] mb-5 mt-6">Filter By Category</p>
      <div className="flex w-[100%] justify-around items-center">
        {categories.map((cats) => {
          return <Cats category={cats} setCategoryFilters={setCategoryFilters} />;
        })}
      </div>
    </div>
  );
};

export default CategoryFilters;
