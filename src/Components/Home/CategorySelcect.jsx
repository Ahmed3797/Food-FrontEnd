import React, { useState } from "react";
import CatItemList from "./CatItemList";
import ProductList from "./ProductList";

const CategorySelcect = () => {
  const URL = import.meta.env.VITE_URL;
  const [prodUrl, setProdUrl] = useState(`${URL}/api/products`);


  function setUrl(cats) {
    const url = `${URL}/api/products?cats=${cats}`;
    setProdUrl(url);
  }
  return (
    <div>
      <div className="flex flex-wrap">
        <div className="m-3 flex flex-col items-center justify-center">
          <button
            className="w-20 h-20 rounded-full bg-slate-100 p-2 hover:bg-slate-400"
            onClick={() => {
              const url = `${URL}/api/products`;
              setProdUrl(url);
            }}
          >
            Clear Filters
          </button>
        </div>
        <CatItemList setUrl={setUrl} />
      </div>

      <ProductList url={prodUrl} />
    </div>
  );
};

export default CategorySelcect;
