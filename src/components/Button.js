import React from "react";
const classes = {
  primary:
    "bg-blue-600 hover:bg-blue-700 dark:bg-indigo-700 dark:hover:bg-indigo-800 text-white",
  secondary:
    "bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-600 dark:hover:bg-zinc-700 text-black dark:text-white",
};
export const Button = ({ variant, className, ...props }) => {
  return (
    <button
      className={` ${className} ${
        classes[variant ?? "primary"]
      } text-xs py-2 px-4 rounded-md transition`}
      {...props}
    ></button>
  );
};
