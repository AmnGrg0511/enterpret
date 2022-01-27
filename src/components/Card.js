import React from "react";

const classes = {
  primary: "bg-white dark:bg-zinc-900 shadow-xl",
  flat: "bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-[#404348]",
};

export const Card = ({ variant, className, ...props }) => {
  return (
    <div
      {...props}
      className={`${
        classes[variant ?? "primary"]
      } m-auto rounded overflow-hidden flex flex-col ${className}`}
    />
  );
};
