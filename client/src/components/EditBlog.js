import React, { useState, useEffect } from 'react';
import { getBlogById, updateBlog } from './api';

const EditBlog = ({ id, onEditSuccess }) => {
  const [blog, setBlog] = useState(null);
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [author, setAuthor] = useState('');
  const [categories, setCategories] = useState('');

  useEffect(() => {
    async function fetchBlog() {
      const fetchedBlog = await getBlogById(id);
      setBlog(fetchedBlog);
      setTitle(fetchedBlog.title);
      setText(fetchedBlog.text);
      setAuthor(fetchedBlog.author);
      setCategories(fetchedBlog.categories.join(', '));
    }

    fetchBlog();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const updatedBlog = await updateBlog(id, {
      title,
      text,
      author,
      categories: categories.split(',').map((category) => category.trim()),
    });
    onEditSuccess(updatedBlog);
  };

  if (!blog) return <div>Loading...</div>;

  return (
    <form onSubmit={handleUpdate}>
      <h2>Edit Blog</h2>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <label htmlFor="text">Text:</label>
      <textarea
        name="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      <label htmlFor="author">Author:</label>
      <input
        type="text"
        name="author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <br />
      <label htmlFor="categories">Categories (comma separated):</label>
      <input
        type="text"
        name="categories"
        value={categories}
        onChange={(e) => setCategories(e.target.value)}
      />
      <br />
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditBlog;
