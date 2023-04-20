import React from "react";
import PropTypes from "prop-types";

const Section = ({ children, className, withoutYSpace, withoutContainer }) => {
  let classess = [];

  if (!withoutYSpace) classess.push("py-16");
  if (className) classess.push(className);

  return (
    <section className={classess.join(" ")}>
      {withoutContainer ? (
        children
      ) : (
        <div className="max-w-5xl mx-auto px-12">{children}</div>
      )}
    </section>
  );
};

Section.propTypes = {};

export default Section;
