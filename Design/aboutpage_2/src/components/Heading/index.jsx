import React from "react";

const sizes = {
  textxs: "text-[14px] font-medium",
};

const Heading = ({ children, className = "", size = "textxs", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-teal-700 font-roboto ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
