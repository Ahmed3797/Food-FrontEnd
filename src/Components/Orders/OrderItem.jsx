import React from "react";
import { FaBoxOpen } from "react-icons/fa";
import Lottie from "lottie-react";
import pending from '../../assets/pending.json'
import confirmed from '../../assets/confirmed.json'
import delivered from '../../assets/delivered.json'

const OrderItem = ({ item }) => {
  function items_name() {
    let str = "";
    for (let product of item.items) {
      str += product.productId.name;
    }
    return str;
  }

  function lottiedata()
  {
    if (item.status == "pending")
    {
     return pending
    }
    else if(item.status == "accepted")
    {
     return confirmed
    }
    elseif(item.status == "delivered")
    {
      return delivered
    }
  }


  return (
    <tr className="flex flex-wrap justify-between items-center border-[3px] border-dotted border-[#FFCDB2]">
      <td className=" p-2 ">
        <Lottie animationData={lottiedata()} loop={true} style={{width:80,height:80}} />
      </td>
      <td className=" p-2">{items_name()}</td>
      <td className=" p-2">{item.totalAmount}</td>
      <td className=" p-2">item : {item.items.length}</td>
      <td className=" p-2">{item.status}</td>
    </tr>
  );
};

export default OrderItem;
