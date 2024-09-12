import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Dialog from "./Dialog/Dialog";
import { isTokenValid, logout } from "../lib/ValidToken";
import { toast } from "react-toastify";

const UpperBar = () => {
  let check = isTokenValid();
  const [isLoggedIn, setIsLoggedIn] = useState(check);
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef(null);

  const openDialog = () => {
    dialogRef.current.showModal();
  };

  const closeDialog = () => {
    dialogRef.current.close();
  };

  const handleLogout = () => {
    logout();
    setIsLoggedIn(false);
    toast.success("Logged out successfully!");
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white w-[100%] p-4 flex justify-between items-center">
      <div>
        <h1 className="text-4xl font-bold text-[#201E43]">AAM</h1>
      </div>

      <div className="hidden md:block">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `mx-2 ${isActive ? "border-b-4 border-[#201E43]" : ""}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/cart"
          className={({ isActive }) =>
            `mx-2 ${isActive ? "border-b-4 border-[#201E43]" : ""}`
          }
        >
          Cart
        </NavLink>
        <NavLink
          to="/orders"
          className={({ isActive }) =>
            `mx-2 ${isActive ? "border-b-4 border-[#201E43]" : ""}`
          }
        >
          Order
        </NavLink>
      </div>

      <div className="hidden md:block">
        <button
          className="text-white bg-[#201E43] p-2 rounded-md"
          onClick={isLoggedIn ? handleLogout : openDialog}
        >
          {isLoggedIn ? "LOG OUT" : "LOG IN"}
        </button>
      </div>

      <div className="md:hidden">
        <FaBars className="text-3xl cursor-pointer" onClick={toggleMenu} />
      </div>

      {isOpen && (
        <div className="absolute top-[70px] z-20 right-0 bg-white w-full h-screen md:hidden flex flex-col items-center">
          <NavLink
            to="/"
            className="mx-2 p-4"
            onClick={toggleMenu}
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            Home
          </NavLink>
          <NavLink
            to="/cart"
            className="mx-2 p-4"
            onClick={toggleMenu}
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            Cart
          </NavLink>
          <NavLink
            to="/orders"
            className="mx-2 p-4"
            onClick={toggleMenu}
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            Order
          </NavLink>
          <button
            className="text-white bg-[#201E43] p-2 rounded-md mt-4"
            onClick={isLoggedIn ? handleLogout : openDialog}
          >
            {isLoggedIn ? "LOG OUT" : "LOG IN"}
          </button>
        </div>
      )}

      <Dialog dialogRef={dialogRef} closeDialog={closeDialog} />
    </div>
  );
};

export default UpperBar;
