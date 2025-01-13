"use client";
import { toast, ToastOptions } from "react-toastify";

const showToast = (
  message: string,
  type: "success" | "error" | "info" | "warning" = "info",
) => {
  const options: ToastOptions = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    closeButton: (
      <span className="absolute right-[4px] top-[2px] text-gray-400 hover:text-gray-500">
        X
      </span>
    ),
  };

  switch (type) {
    case "success":
      toast.success(message, {
        ...options,
        className: "!bg-eerie-black-2 !text-orange-yellow-crayola",
      });
      break;
    case "error":
      toast.error(message, {
        ...options,
        className: "!bg-eerie-black-2 !text-orange-yellow-crayola",
      });
      break;
    case "info":
      toast.info(message, {
        ...options,
        className: "!bg-eerie-black-2 !text-orange-yellow-crayola",
      });
      break;
    case "warning":
      toast.warn(message, {
        ...options,
        className: "!bg-eerie-black-2 !text-orange-yellow-crayola",
      });
      break;
    default:
      toast(message, options);
  }
};

export default showToast;
