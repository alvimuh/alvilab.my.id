import Link from "next/link";
import React from "react";

const Button = ({ children, onClick = () => {}, href, ...props }) => {
  let classess = [
    "font-semibold text-base bg-gray-800 text-white px-4 py-1 rounded",
  ];
  if (href != null)
    return (
      <Link className={classess.join(" ")} href={href} {...props}>
        {children}
      </Link>
    );
  else
    return (
      <button className={classess.join(" ")} onClick={onClick} {...props}>
        {children}
      </button>
    );
};

export default Button;
