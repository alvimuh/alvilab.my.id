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
  let classess = [
    "font-semibold text-base text-center px-4 py-2 rounded transition",
  ];
  switch (variant) {
    case "solid":
      classess.push(
        "bg-gray-800 dark:bg-gray-100 text-white dark:text-gray-900 hover:bg-gray-600 dark:hover:bg-gray-300"
      );
      break;
    case "outlined":
      classess.push(
        "text-gray-800 dark:text-gray-100 border border-gray-800 dark:border-gray-100 hover:text-gray-600 dark:hover:text-gray-300 hover:border-gray-500 dark:hover:border-gray-300"
      );
      break;
    case "base":
      classess.push(
        "text-gray-800 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-300"
      );
      break;
    default:
      classess.push(
        "bg-gray-800 dark:bg-gray-100 text-white dark:text-gray-900 hover:bg-gray-600 dark:hover:bg-gray-300"
      );
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
