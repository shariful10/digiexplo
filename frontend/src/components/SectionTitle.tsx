import React from "react";

interface HeadingProps {
  title: string;
  subtitle: string;
}

const SectionTitle = ({ title, subtitle }: HeadingProps) => {
  return (
    <h2 className="font-bold text-3xl md:text-[48px] text-textColor text-center mb-3.5">
      {title} <span className="text-primary">{subtitle}</span>
    </h2>
  );
};

export default SectionTitle;
