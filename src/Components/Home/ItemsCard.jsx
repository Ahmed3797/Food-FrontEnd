import React, { useState } from "react";
import { handleAddItem, handleRemoveItem } from "../../lib/ItemsLogic";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";

const ItemsCard = ({ item }) => {
  const [select, SetSelect] = useState(false);
  const [value, SetValue] = useState(0);

  const url = () => {
    let items = item.imageUrl.split("/");
    return items[2];
  };

  url();
  return (
    <div className="w-[265px] h-[350px] shadow-lg rounded-lg ">
      <div className="h-[200px]">
        <img
          src={`${item.imageUrl}`}
          className="h-[100%] w-[100%] object-cover rounded-t-lg "
          alt=""
        />

        <div className="relative">
          <div className="absolute bottom-3 right-3 z-10 text-center ">
            {!select && (
              <button
                onClick={() => {
                  SetSelect(true);
                  SetValue(value + 1);
                  handleAddItem(item, item.price);
                }}
              >
                <p className="bg-white rounded-full w-6 h-6 flex justify-center items-center ">
                  <GoPlus />
                </p>
              </button>
            )}

            {select && (
              <div className="flex bg-white rounded-lg">
                <button
                  className="w-6 bg-orange-600 text-center flex justify-center items-center rounded-l-lg"
                  onClick={() => {
                    if (value == 1) {
                      SetSelect(false);
                    }
                    SetValue((value) => {
                      let val = value - 1;
                      return val;
                    });
                    handleRemoveItem(item._id, item.price);
                  }}
                >
                  <FiMinus />
                </button>
                <p className="w-6 text-center">{value}</p>
                <button
                  className="bg-green-600 w-6 text-center rounded-r-lg flex justify-center items-center"
                  onClick={() => {
                    SetValue(value + 1);
                    handleAddItem(item, item.price);
                  }}
                >
                  <GoPlus />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="p-4">
        <h1 className="font-semibold my-2 ">{item.name}</h1>
        <p className="text-gray-500 text-sm  my-2">{item.description}</p>
        <p className="text-red-400 font-semibold text-lg my-2">${item.price}</p>
      </div>
    </div>
  );
};

export default ItemsCard;
