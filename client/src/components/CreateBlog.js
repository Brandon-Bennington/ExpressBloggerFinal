import React, { useState } from 'react';
import { createBlog } from './api';

const CreateBlog = () => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newBlog = {
      title,
      text,
      author,
    };

    const savedBlog = await createBlog(newBlog);
    console.log('Created blog:', savedBlog);
    window.location.reload(); // Refresh the page
  };

  return (
    <div>
      <h1>Create Blog</h1>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        <br />
        <label>Text:</label>
        <textarea value={text} onChange={(e) => setText(e.target.value)} />
        <br />
        <label>Author:</label>
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
        <br />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateBlog;
