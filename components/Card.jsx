import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const Card = ({ title, description, featuredImg, plarform, tech }) => {
  return (
    <div className="border rounded-lg pb-[100%] relative overflow-hidden shadow-sm ">
      <img src={featuredImg} className="absolute top-0" />
      <div className="absolute transition ease-out duration-300 bottom-0 translate-y-[60px] hover:-translate-y-0 h-[calc(100%+60px)] w-full bg-gradient-to-t from-white via-[#ffffffd3] flex flex-col justify-end">
        <div className="px-4 py-3">
          <h4 className="text-xl font-semibold mb-2 text-gray-900">{title}</h4>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
        <div className="h-[60px] px-4 flex items-start gap-2">
          <div className="border rounded-md p-2">
            <p className="text-gray-600 text-sm font-semibold leading-tight">
              {plarform}
            </p>
            <p className="text-gray-400 text-xs font-regular leading-none">
              Platform based
            </p>
          </div>
          <div className="border rounded-md p-2">
            <p className="text-gray-600 text-sm font-semibold leading-tight">
              {tech}
            </p>
            <p className="text-gray-400 text-xs font-regular leading-none">
              Tech stack
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {};

export default Card;
