import React from "react";
import drop from "../assests/Vector.svg";

export const Dropdown = ({ onSelect, options, className, ...props }) => {
  return (
    <div className="relative">
      <select
        onChange={({ target: { value } }) => onSelect(value)}
        className={`${className} appearance-none mr-4 mb-2 w-48 text-xs rounded px-3 py-2 bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-700 dark:hover:bg-zinc-600 text-black dark:text-white`}
        {...props}
      >
        {options?.map((option, i) => (
          <option key={`opt-${i}`}>{option}</option>
        ))}
      </select>
      <img src={drop} alt="" className="absolute right-7 top-3.5" />
    </div>
  );
};
