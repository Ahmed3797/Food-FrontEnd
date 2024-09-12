import React from "react";
import { FaBoxOpen } from "react-icons/fa";

const OrderItem = ({ item }) => {
  function items_name() {
    let str = "";
    for (let product of item.items) {
      str += product.productId.name;
    }
    return str;
  }
  return (
    <tr className="flex flex-wrap justify-between items-center">
      <td className=" p-2">
        <FaBoxOpen color="#134B70" size="3em" />
      </td>
      <td className=" p-2">{items_name()}</td>
      <td className=" p-2">{item.totalAmount}</td>
      <td className=" p-2">item : {item.items.length}</td>
      <td className=" p-2">{item.status}</td>
    </tr>
  );
};

export default OrderItem;
