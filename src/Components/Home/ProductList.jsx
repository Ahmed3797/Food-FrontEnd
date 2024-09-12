import React from "react";
import useFetch from "../../hooks/FetchHook";
import { ThreeDots } from "react-loader-spinner";
import ItemsCard from "./ItemsCard";

const ProductList = ({ url }) => {
  const { data, error, loading } = useFetch(url);
  if (loading)
    return (
      <div className="h-[400px] flex justify-center items-center ">
        <ThreeDots
          height={80}
          width={80}
          color="#201E43"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#4fa94d"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      </div>
    );
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <div className="flex flex-wrap justify-around w-[100%] items-center gap-8 ">
        {data?.map((item) => {
          return <ItemsCard item={item} key={item._id} />;
        })}
      </div>
    </div>
  );
};

export default ProductList;
