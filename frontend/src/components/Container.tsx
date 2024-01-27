import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
	return <div className="md:max-w-[1540px] mx-auto px-5 md:px-0">{children}</div>;
};

export default Container;
