import React from "react";
import { ImCancelCircle } from "react-icons/im";

function CartItem({ item, removeItem }) {
  return (
    <tr key={item.id} className="text-left">
      <td className="py-2 px-4 border-b">
        <img
          src={item.productId.imageUrl}
          className="w-16 h-16 mx-2 object-cover"
          alt=""
        />
      </td>
      <td className="py-2 px-4 border-b">{item.productId.name}</td>
      <td className="py-2 px-4 border-b">${item.productId.price}</td>
      <td className="py-2 px-4 border-b">{item.quantity}</td>
      <td className="py-2 px-4 border-b">
        ${(item.productId.price * item.quantity).toFixed(2)}
      </td>
      <td className="py-2 px-4 border-b">
        <button
          onClick={() => {
            removeItem(item.productId._id, item.productId.price);
          }}
        >
          <ImCancelCircle />
        </button>
      </td>
    </tr>
  );
}

export default CartItem;
