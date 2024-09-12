import React from "react";
import useFetch from "../../hooks/FetchHook";
import MyAccordion from "./Accordian";

const OrdersList = () => {
  const URL = import.meta.env.VITE_URL;
  const token = localStorage.getItem("authToken");
  const url = `${URL}/api/orders/`;
  const { data, error, loading } = useFetch(url, {
    method: "Get",
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": token,
    },
  });

  function completed_orders() {
    const r_data = data.filter((item) => {
      return item.status === "delivered";
    });
    return r_data;
  }

  function Running_orders() {
    const r_data = data.filter((item) => {
      return item.status === "pending" || item.status === "shipped";
    });

    return r_data;
  }
  return (
    <div>
      <div className="mb-3">
        <MyAccordion data={Running_orders()} name="Running Orders" />
      </div>

      <MyAccordion data={completed_orders()} name="Completed Orders" />
    </div>
  );
};

export default OrdersList;
