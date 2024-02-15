import React from "react";
import { blogData } from "../data";
import BlogCards from "./BlogCards";
import RightBar from "../SingleBlogPage/RightBar";

const BlogContent = () => {
<<<<<<< HEAD
   return (
      <div className="grid md:grid-cols-3 gap-6 mb-5 md:mb-10">
         <div className="md:col-span-2">
            <BlogCards items={blogData} />
         </div>
         <RightBar />
      </div>
   );
=======
  return (
    <div className="grid md:grid-cols-3 gap-6 mb-5 md:mb-10">
      <div className="md:col-span-2">
        <BlogCards items={blogData} />
      </div>
      <RightBar />
    </div>
  );
>>>>>>> 95688c5e6f3f86e9ba52fe4080cb763063b82123
};

export default BlogContent;
