import { toast } from "react-toastify";

export const isTokenValid = () => {
  const token = localStorage.getItem("authToken");
  const timestamp = parseInt(localStorage.getItem("tokenTimestamp"), 10);
  const now = new Date().getTime();

  const validityDuration = 30 * 24 * 60 * 60 * 1000;

  if (token && now - timestamp < validityDuration) {
    return true;
  } else {
    localStorage.removeItem("authToken");
    localStorage.removeItem("tokenTimestamp");
    return false;
  }
};

export const logout = () => {
  localStorage.removeItem("authToken");
  localStorage.removeItem("tokenTimestamp");

  toast.success("You are Logged out", {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
};
