import React, { useState } from "react";
import LogIn from "../Auth/LogIn";
import SignIn from "../Auth/SignIn";
import { IoMdClose } from "react-icons/io";

const Dialog = ({ dialogRef, closeDialog }) => {
  const [toogle, setToggle] = useState(false);

  return (
    <dialog ref={dialogRef} className="  w-[400px] p-6 min-h-[600px]">
      <div className="w-full flex justify-end">
        <button onClick={closeDialog}>
          <IoMdClose size={20} />
        </button>
      </div>
      <h1 className="text-4xl font-bold text-[#201E43] text-center mb-3">
        AAM
      </h1>
      <hr />
      <div className="flex w-[100%] p-2 justify-between my-3">
        <button
          className="hover:border-b-2 font-semibold border-[#201E43] w-[50%] h-10"
          onClick={() => {
            setToggle(false);
          }}
        >
          Sign IN
        </button>
        <button
          className="hover:border-b-2 font-semibold w-[50%] border-[#201E43] h-10"
          onClick={() => {
            setToggle(true);
          }}
        >
          Log IN
        </button>
      </div>
      {toogle ? (
        <LogIn closeDialog={closeDialog} />
      ) : (
        <SignIn closeDialog={closeDialog} />
      )}
    </dialog>
  );
};

export default Dialog;
