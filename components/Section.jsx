import React from "react";
import PropTypes from "prop-types";

const Section = ({
  children,
  className,
  containerClassName,
  withoutYSpace,
  withoutContainer,
}) => {
  let sectionClass = [];
  let containerClass = ["container-default"];

  if (!withoutYSpace) sectionClass.push("py-16");

  if (className) sectionClass.push(className);

  if (containerClassName) containerClass.push(containerClassName);

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
