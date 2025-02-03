import React from "react";

const sizes = {
  textxs: "text-[17px] font-normal not-italic",
  texts: "text-[32px] font-normal not-italic md:text-[30px] sm:text-[28px]",
  textmd: "text-[64px] font-normal md:text-[48px]",
  textlg: "text-[65px] font-normal md:text-[48px]",
};

const Text = ({ children, className = "", as, size = "textxs", ...restProps }) => {
  const Component = as || "p";

  const textColorClass = className.includes("text-")
    ? ""
    : "text-teal-700"; // Only apply default color if no custom color is specified

  return (
    <Component
      className={`${sizes[size]} font-manrope ${textColorClass} ${className}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
