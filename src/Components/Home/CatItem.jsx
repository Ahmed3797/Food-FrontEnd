import React from "react";

const CatItem = ({ item, setUrl }) => {
  return (
    <div
      className="m-3 flex flex-col items-center"
      onClick={() => {
        setUrl(item._id);
      }}
    >
      <img
        src={`${item.imageUrl}`}
        alt={item.name}
        className="w-20 h-20 object-cover rounded-full"
      />
      <p>{item.name}</p>
    </div>
  );
};

export default CatItem;
