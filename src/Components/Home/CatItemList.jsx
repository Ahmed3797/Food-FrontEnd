import React, { memo } from "react";
import CatItem from "./CatItem";
import useFetch from "../../hooks/FetchHook";

const CatItemList = ({ setUrl }) => {
  const URL = import.meta.env.VITE_URL;
  const { data: categories, error: caterror } = useFetch(
    `${URL}/api/categories`
  );

  return (
    <div className="flex flex-wrap">
      {categories?.map((item) => {
        return <CatItem item={item} key={item._id} setUrl={setUrl} />;
      })}
    </div>
  );
};

export default memo(CatItemList);
