import React, { useRef } from "react";
import DelFrom from "../Components/Delievery/DelFrom";
import { useSelector } from "react-redux";

const DeliveryPage = () => {
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const formRef = useRef();

  const handlePlaceOrder = () => {
    if (formRef.current) {
      formRef.current.submitForm();
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:space-x-16 pt-20">
      <DelFrom ref={formRef} />
      <div>
        <div>
          <h1 className="text-2xl font-bold font[20px] my-4">Cart Totals</h1>
          <div className="w-[100%]">
            <div className="flex w-[100%] justify-between border-b-2 my-2">
              <p>Sub total </p>
              <p>{totalPrice}</p>
            </div>
            <div className="flex w-[100%] justify-between border-b-2 my-2">
              <p>Delivery fee</p>
              <p>$50</p>
            </div>
            <div className="flex w-[100%] justify-between border-b-2 my-2">
              <p>Total</p>
              <p>${totalPrice + 50}</p>
            </div>
          </div>
        </div>
        <div className="mt-[50px]">
          <h1 className="text-3xl font-semibold">Payment Method</h1>
          <p className="my-3">Cash On Delivery</p>
        </div>
        <button
          className="bg-[#201E43] text-white p-3 rounded-sm mt-4 hover:bg-[#0e0d20]"
          onClick={handlePlaceOrder}
        >
          PLACE ORDER
        </button>
      </div>
    </div>
  );
};

export default DeliveryPage;
