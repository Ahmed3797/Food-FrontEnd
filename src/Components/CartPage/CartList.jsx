import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CartItem from "./CartItem";
import useFetch from "../../hooks/FetchHook";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { MinusInTotalPrice } from "../../Store/cartSlice";
import { ThreeDots } from "react-loader-spinner";

const CartList = () => {
  const URL = import.meta.env.VITE_URL;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [cartItemss, setCartItems] = useState([]);

  const token = localStorage.getItem("authToken");
  let { data: fetchedCartItems, loading } = useFetch(`${URL}/api/carts/`, {
    method: "Get",
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": token,
    },
  });

  useEffect(() => {
    if (fetchedCartItems) {
      setCartItems(fetchedCartItems.items);
    }
  }, [fetchedCartItems]);

  const handleRemoveItem = (id, price) => {
    const token = localStorage.getItem("authToken");
    let url = `${URL}/api/carts/${id}`;
    fetch(url, {
      method: "Delete",
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": token,
      },
    })
      .then(async (response) => {
        const data = await response.json();
        console.log("suucess in deleting data ", data);
        dispatch(MinusInTotalPrice(price));
        toast.success("Item removed from cart!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        setCartItems(() => {
          return data.items;
        });
        console.log(cartItemss);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Failed to remove item from cart.", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      });
  };

  const calculateTotalPrice = () => {
    return cartItemss
      .reduce((total, item) => total + item.productId.price * item.quantity, 0)
      .toFixed(2);
  };

  const totalPrice = () => {
    let price = Number(calculateTotalPrice()) + 50;
    return price;
  };

  if (loading) {
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
  }
  return (
    <div className="min-h-[400px]">
      {cartItemss?.length > 0 ? (
        <div>
          <div className="container mx-auto p-5">
            <div className="overflow-x-auto ">
              <table className="min-w-full bg-white  border-gray-200">
                <thead>
                  <tr>
                    <th className="py-2 px-8 border-b text-left">Item</th>
                    <th className="py-2 px-4 border-b text-left">Title</th>
                    <th className="py-2 px-4 border-b text-left">Price</th>
                    <th className="py-2 px-4 border-b text-left">Quantity</th>
                    <th className="py-2 px-4 border-b text-left">Total</th>
                    <th className="py-2 px-4 border-b text-left">Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItemss.map((item) => (
                    <CartItem
                      item={item}
                      removeItem={handleRemoveItem}
                      key={item._id}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h1 className="text-2xl font-bold font[20px] my-4">Cart Totals</h1>
            <div className="w-[300px]">
              <div className="flex w-[100%] justify-between border-b-2 my-2">
                <p>Sub total </p>
                <p>{calculateTotalPrice()}</p>
              </div>
              <div className="flex w-[100%] justify-between border-b-2 my-2">
                <p>Delivery fee</p>
                <p>$50</p>
              </div>
              <div className="flex w-[100%] justify-between border-b-2 my-2">
                <p>Toal</p>
                <p>${totalPrice()}</p>
              </div>
            </div>
            <button
              onClick={() => {
                navigate("/del");
              }}
              className="bg-[#134B70] p-2 my-2 text-white rounded-sm w-[220px] hover:bg-[#201E43]"
            >
              PROCEED CHECKOUT
            </button>
          </div>
        </div>
      ) : (
        <div className="flex min-h-[230px] justify-center items-center text-center">
          <div className="flex-grow">
            <p className="text-red-400 font-semibold text-2xl  cursor-pointer">
              No items in Cart yet
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartList;
