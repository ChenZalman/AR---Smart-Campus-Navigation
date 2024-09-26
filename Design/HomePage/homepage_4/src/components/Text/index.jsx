import React from "react";

const sizes = {
  textxs: "text-[32px] font-normal not-italic md:text-[30px] sm:text-[28px]",
  texts: "text-[64px] font-normal md:text-[48px]",
  textmd: "text-[65px] font-normal md:text-[48px]",
};

const Text = ({ children, className = "", as, size = "textxs", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-teal-700 font-manrope ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
