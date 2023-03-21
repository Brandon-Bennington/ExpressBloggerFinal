import React from "react";
import { deleteBlogById } from "./api";

function DeleteBlog({ id }) {
  const handleDelete = async () => {
    const deletedBlog = await deleteBlogById(id);
    console.log("Deleted blog:", deletedBlog);
  };

  return (
    <button onClick={handleDelete}>
      Delete Blog
    </button>
  );
}

export default DeleteBlog;
