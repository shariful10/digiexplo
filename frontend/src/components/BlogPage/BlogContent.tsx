import React from "react";
import { blogData } from "../data";
import BlogCards from "./BlogCards";
import RightBar from "../SingleBlogPage/RightBar";

const BlogContent = () => {
  return (
    <div className="grid lg:grid-cols-3 gap-6 mb-5 md:mb-10">
      <div className="lg:col-span-2">
        <BlogCards items={blogData} />
      </div>
      <RightBar />
    </div>
  );
};

export default BlogContent;
