import React, { useState, useEffect } from 'react';
import BlogList from './BlogList';
import CreateBlog from './CreateBlog';
import { getAllBlogs, createBlog } from './api';

function App() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const fetchedBlogs = await getAllBlogs();
      setBlogs(fetchedBlogs);
    }

    fetchData();
  }, []);

  const addBlog = async (newBlog) => {
    const createdBlog = await createBlog(newBlog);
    setBlogs([...blogs, createdBlog]);
  };

  return (
    <div>
      <h1>Blog App</h1>
      <CreateBlog addBlog={addBlog} />
      <BlogList blogs={blogs} />
    </div>
  );
}

export default App;
