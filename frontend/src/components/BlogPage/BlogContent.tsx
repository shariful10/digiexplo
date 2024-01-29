import React from "react";
import RightBar from "../RightBar";
import Container from "../Container";
import ImageCard from "../ImageCard";



const BlogContent = () => {
	return (
      <div className="grid md:grid-cols-3 gap-6 mb-5 md:mb-10">
         <div className="md:col-span-2">
            <ImageCard className="sm:grid-cols-2" />
         </div>
         <RightBar />
      </div>
	);
};

export default BlogContent;
