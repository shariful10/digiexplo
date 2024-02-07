import React from "react";
import RightBar from "../SingleBlogPage/RightBar";
import Container from "../Container";
import ImageCard from "../ImageCard";
import BlogCards from "./BlogCards";

const BlogContent = () => {
<<<<<<< HEAD
	return (
		<div className="grid md:grid-cols-3 gap-6 mb-5 md:mb-10">
			<div className="md:col-span-2">
				{/* <ImageCard className="sm:grid-cols-2" /> */}
			</div>
			<RightBar />
		</div>
	);
=======
  return (
    <div className="grid md:grid-cols-3 gap-6 mb-5 md:mb-10">
      <div className="md:col-span-2">
        {/* <ImageCard className="sm:grid-cols-2" /> */}
        <BlogCards />
      </div>
      <RightBar />
    </div>
  );
>>>>>>> db27cc3f91a84fb232e99ab70513891ab9a0477a
};

export default BlogContent;
