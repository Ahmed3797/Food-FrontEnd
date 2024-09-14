import React, { useRef, useImperativeHandle, forwardRef } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const DelFrom = forwardRef((props, ref) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const URL = import.meta.env.VITE_URL;
    const token = localStorage.getItem("authToken");
  try {

    const response = await fetch(`${URL}/api/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": token,
      },
      body: JSON.stringify({
        deliveryInfo: {
          email: data.email,
          street: data.street,
          city: data.city,
          state: data.state,
          zip: data.zip,
          country: data.country,
        },
      }),
    });
    
    const result = await response.json();
    if (response.ok) {
      toast.success("Order created successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      navigate("/");
    }
  } catch (error) {
    toast.error("Order didnot created succesfully", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  }

    

    
    
  };

  useImperativeHandle(ref, () => ({
    submitForm: handleSubmit(onSubmit),
  }));

  return (
    <div className="p-4">
      <h1 className="text-3xl font-semibold">Delivery Information</h1>
      <form method="post">
        <input
          className="border-2 my-2 p-2 w-[100%]"
          type="email"
          name="email"
          placeholder="Type your Email"
          {...register("email", { required: "email is required" })}
        />
        {errors.email && <p>{errors.email.message}</p>}
        <br />

        <input
          className="border-2 my-2 p-2 w-[100%]"
          type="text"
          name="street"
          placeholder="Type your Street No"
          {...register("street", { required: "Street is required" })}
        />
        {errors.street && <p>{errors.street.message}</p>}
        <br />

        <div className="w-[100%] flex">
          <div className="w-[50%] my-2 mr-2">
            <input
              className="border-2  p-2 mr-3 w-full"
              type="text"
              name="city"
              placeholder="Type your City"
              {...register("city", { required: "City is required" })}
            />
            {errors.city && <p>{errors.city.message}</p>}
          </div>
          <div className="my-2 w-[50%]">
            <input
              className="border-2  p-2 w-full"
              type="text"
              name="state"
              placeholder="Type your State"
              {...register("state", { required: "State is required" })}
            />
            {errors.state && <p>{errors.state.message}</p>}
          </div>
        </div>

        <div className="w-[100%] flex">
          <div className="my-2 w-[50%] mr-2">
            <input
              className="border-2  p-2  w-full"
              type="number"
              name="zip"
              placeholder="Type Zip Code Here"
              {...register("zip", { required: "ZIP Code is required" })}
            />
            {errors.zip && <p>{errors.zip.message}</p>}
          </div>

          <div className="w-[50%] my-2">
            <input
              className="border-2  p-2 w-full"
              type="text"
              name="country"
              placeholder="Type your Country"
              {...register("country", { required: "Name is required" })}
            />
            {errors.country && <p>{errors.country.message}</p>}
          </div>
        </div>
      </form>
    </div>
  );
});

export default DelFrom;
