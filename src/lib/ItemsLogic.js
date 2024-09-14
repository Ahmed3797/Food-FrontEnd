import { toast } from "react-toastify";
import { MinusInTotalPrice, AddInTotalPrice } from "../Store/cartSlice";
import { store } from "../Store/Store";

export const handleAddItem = (item, price) => {
  const token = localStorage.getItem("authToken");

  if (!token) {
    toast.error("Please login first to add items to your cart.", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    return;
  }

  const obj = {
    productId: item._id,
    quantity: 1,
  };

  const URL = import.meta.env.VITE_URL;
  const url = `${URL}/api/carts/`;

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": token,
    },
    body: JSON.stringify(obj),
  })
    .then(async (response) => {
      const data = await response.json();
      store.dispatch(AddInTotalPrice(price));
      toast.success("Item added to cart!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    })
    .catch((error) => {
      toast.error("Failed to add item to cart.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    });
};

export const handleRemoveItem = (id, price) => {
  const token = localStorage.getItem("authToken");

  if (!token) {
    toast.error("Please login first to remove items from your cart.", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    return;
  }

  const URL = import.meta.env.VITE_URL;
  let url = `${URL}/api/carts/${id}`;

  fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": token,
    },
  })
    .then(async (response) => {
      if (!response.ok) {
        throw new Error("Failed to remove item from cart");
      }
      const data = await response.json();
      store.dispatch(MinusInTotalPrice(price));
      toast.success("Item removed from cart!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    })
    .catch((error) => {
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
