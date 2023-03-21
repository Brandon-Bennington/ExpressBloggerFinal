import React, { useState, useEffect } from "react";
import { getAllBlogs, deleteBlogById, deleteAllBlogs } from "./api";

function BlogList() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const fetchedBlogs = await getAllBlogs();
    setBlogs(fetchedBlogs);
  };

  const handleDelete = async (id) => {
    await deleteBlogById(id);
    fetchData();
  };

  const handleDeleteAll = async () => {
    await deleteAllBlogs();
    fetchData();
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div>
      <h2>Blog List</h2>
      {blogs.map((blog) => (
        <div key={blog._id}>
          <h3>{blog.title}</h3>
          <p>{blog.text}</p>
          <button onClick={() => handleDelete(blog._id)}>Delete</button>
        </div>
      ))}
      <button onClick={handleDeleteAll}>Delete All Blogs</button>
      <button onClick={handleRefresh}>Refresh</button>
    </div>
  );
}

export default BlogList;
