import React from "react";
import RightBar from "../SingleBlogPage/RightBar";
import Container from "../Container";
import ImageCard from "../ImageCard";
import BlogCards from "./BlogCards";

const BlogContent = () => {
  return (
    <div className="grid md:grid-cols-3 gap-6 mb-5 md:mb-10">
      <div className="md:col-span-2">
        <BlogCards />
      </div>
      <RightBar />
    </div>
  );
};

export default BlogContent;
