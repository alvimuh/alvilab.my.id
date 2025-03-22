import React from "react";
import PropTypes from "prop-types";

const Section = ({
  children,
  className,
  containerClassName,
  withoutYSpace,
  withoutContainer,
}) => {
  let sectionClass = ["dark:text-gray-100"];
  let containerClass = ["container-default"];

  if (!withoutYSpace) sectionClass.push("py-16");

  if (className) sectionClass.push(className);

  if (containerClassName) containerClass.push(containerClassName);

  // Replace bg-gray-50 with dark mode support
  sectionClass = sectionClass.map((cls) =>
    cls === "bg-gray-50" ? "bg-gray-50 dark:bg-gray-800" : cls
  );

  return (
    <section className={sectionClass.join(" ")}>
      {withoutContainer ? (
        children
      ) : (
        <div className={containerClass.join(" ")}>{children}</div>
      )}
    </section>
  );
};

Section.propTypes = {};

export default Section;
