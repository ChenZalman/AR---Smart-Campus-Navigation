import React from "react";

const sizes = {
  textxs: "text-[64px] font-normal md:text-[48px]",
  texts: "text-[65px] font-normal md:text-[48px]",
  textmd: "text-[96px] font-normal not-italic md:text-[48px]",
};

const Text = ({ children, className = "", as, size = "textmd", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-teal-700 font-manrope ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
