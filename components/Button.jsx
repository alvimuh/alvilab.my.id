import Link from "next/link";
import React from "react";

const Button = ({
  children,
  onClick = () => {},
  variant,
  isBlock,
  className,
  href,
  ...props
}) => {
  let classess = ["font-semibold text-base px-4 py-1 rounded transition"];
  switch (variant) {
    case "solid":
      classess.push("bg-gray-800 text-white hover:bg-gray-600");
      break;
    case "outlined":
      classess.push(
        "text-gray-800 text-gray-800 border border-gray-800 hover:text-gray-600 hover:border-gray-500"
      );
      break;
    case "base":
      classess.push("text-gray-800 text-gray-800 hover:text-gray-600");
      break;
    default:
      classess.push("bg-gray-800 text-white hover:bg-gray-600");
  }
  if (isBlock) classess.push("block w-full");
  if (className) classess.push(className);
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
