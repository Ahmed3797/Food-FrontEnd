import { useRef } from "react";
import DelFrom from "../Components/Delievery/DelFrom";
import useFetch from "../hooks/FetchHook";

const DeliveryPage = () => {
  const formRef = useRef();

  const URL = import.meta.env.VITE_URL;
  const token = localStorage.getItem("authToken");
  let {data} = useFetch(`${URL}/api/carts/price`, {
    method: "Get",
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": token,
    },
  });
 
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
              <p>${data.subtotal}</p>
            </div>
            <div className="flex w-[100%] justify-between border-b-2 my-2">
              <p>Delivery fee</p>
              <p>${data.deliveryFee}</p>
            </div>
            <div className="flex w-[100%] justify-between border-b-2 my-2">
              <p>Total</p>
              <p>${data.total}</p>
            </div>
          </div>
        </div>
        <div className="mt-[50px]">
          <h1 className="text-3xl font-semibold">Payment Method</h1>
          <p className="my-3">Cash On Delivery</p>
        </div>
        <button
          className="bg-[#FFB4A2] text-white p-3 rounded-sm mt-4 hover:bg-[#B5828C]"
          onClick={handlePlaceOrder}
        >
          PLACE ORDER
        </button>
      </div>
    </div>
  );
};

export default DeliveryPage;
