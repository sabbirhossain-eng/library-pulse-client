import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import useAuth from "../../Hooks/useAuth";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const {darkMode} = useAuth();

  useEffect(() => {
    fetch("blog.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className={`lg:flex lg:justify-between space-y-4 lg:space-y-0 ${darkMode ? "bg-[#1f2023] rounded-lg text-[#ffffff]" : "light-theme"}`}>
        <div>
            <hr className="bg-[#f3701d] py-[2px]" />
            <h2 className="text-3xl font-semibold text-[#f3701d]">From Our Blog</h2>
        </div>
      <div className="space-y-10">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog}></BlogCard>
        ))}
      </div>
    </div>
  );
};

export default Blog;
