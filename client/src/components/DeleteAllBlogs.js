import React, { useEffect, useState } from "react";
import { getAllBlogs } from "./api";
import DeleteAllBlogs from "./DeleteAllBlogs";

function BlogList() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const fetchedBlogs = await getAllBlogs();
      setBlogs(fetchedBlogs);
    }

    fetchData();
  }, []);

  return (
    <div>
      <h2>Blog List</h2>
      {blogs.map((blog) => (
        <div key={blog._id}>
          <h3>{blog.title}</h3>
          <p>{blog.text}</p>
        </div>
      ))}
      <button onClick={() => window.location.reload()}>
        See All Blogs
      </button>
      <DeleteAllBlogs />
    </div>
  );
}

export default BlogList;
