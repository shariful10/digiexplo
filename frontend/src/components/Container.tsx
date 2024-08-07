import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className="mx-auto px-5 md:px-0 w-full z-10">{children}</div>;
};

export default Container;
