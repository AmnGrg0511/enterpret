import React from "react";

export const ThemeProvider = ({ className, ...props }) => {
  const theme = localStorage.getItem("theme");
  return (
    <div className={theme ?? "dark"}>
      <div
        {...props}
        className={`bg-white dark:bg-black overflow-auto h-screen ${className}`}
      />
    </div>
  );
};
