import React from "react";

const ExperienceItem = ({ tag, title, subtitle, description }) => {
  return (
    <div className="flex justify-between gap-1 flex-col-reverse md:flex-row mb-6">
      <div>
        <p className="text-base font-medium leading-snug">{title}</p>
        <p className="text-sm">{subtitle}</p>

        <p className="text-sm text-gray-500 mt-1">{description}</p>
      </div>
      <div className="md:text-right font-medium">
        <p className="text-xs text-gray-500">{tag}</p>
      </div>
    </div>
  );
};

export default ExperienceItem;
