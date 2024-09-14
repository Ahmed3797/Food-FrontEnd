import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignIn = ({ closeDialog }) => {
  const URL = import.meta.env.VITE_URL;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    let url = `${URL}/api/users/signup`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Set content type to JSON
      },
      body: JSON.stringify(data),
    })
      .then(async (response) => {
        if (response.ok) {
          const data = await response.json();
          const { token } = data;
          const now = new Date().getTime();
          localStorage.setItem("authToken", token);
          localStorage.setItem("tokenTimestamp", now);

          toast.success("SignIn successful!", {
            autoClose: 3000,
          });

          closeDialog();
        }
      })
      .catch((error) => {
        toast.error("SignIn failed. Please check your credentials.", {
          autoClose: 3000,
        });
      });
  };

  return (
    <>
      <div className="w-full max-w-sm  space-y-8  ">
        <h2 className="text-2xl font-bold text-center">SignIN</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              {...register("name", { required: "Name is required" })}
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register("email", { required: "Email is required" })}
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              {...register("password", { required: "Password is required" })}
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-600">
                {errors.password.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-medium text-white bg-[#201E43] rounded-md hover:bg-[#46438a] focus:outline-none focus:ring-2 focus:ring-offset-2 "
          >
            Sign In
          </button>
        </form>
      </div>
    </>
  );
};

export default SignIn;
