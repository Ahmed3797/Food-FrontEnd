import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/FetchHook";
import { ThreeDots } from "react-loader-spinner";
import ItemsCard from "../Home/ItemsCard";
import PriceFilters from "./PriceFilters";
const URL = import.meta.env.VITE_URL;

const Results = ({ filters }) => {
  const url = `${URL}/api/products`;
  const [filteredData, setFilteredData] = useState([]);
  const [load,setLoading]=useState(false)

  useEffect(() => {
    setLoading(true)
    const newdata = data?.filter((item) => {
      let decision =
        item?.price >= filters?.pricefilters?.min &&
        item?.price <= filters?.pricefilters.max;
      return decision;
    });
    setFilteredData(newdata);
    setLoading(false)
  }, [filters]);

  const { data, error, loading } = useFetch(url);

  useEffect(() => {
    if (data) {
      setFilteredData(data);
    }
  }, [data]);
  if (loading || load)
    return (
      <div className="h-[400px] flex justify-center items-center ">
        <ThreeDots
          height={80}
          width={80}
          color="#FFCDB2"
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
    <div className="mt-6 mb-6">
      <div className="flex flex-wrap justify-center w-[100%] items-center gap-8 ">
        {filteredData?.map((item) => {
          return <ItemsCard item={item} key={item._id} />;
        })}
      </div>
    </div>
  );
};

export default Results;
