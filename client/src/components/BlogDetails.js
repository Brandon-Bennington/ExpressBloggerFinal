import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBlogById } from "./api";
import DeleteBlog from "./DeleteBlog";

function BlogDetails() {
  const [blog, setBlog] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      const fetchedBlog = await getBlogById(id);
      setBlog(fetchedBlog);
    }

    fetchData();
  }, [id]);

  const handleEdit = () => {
    alert("Edit button clicked in BlogDetails!");
  };

  return (
    <div>
      {blog ? (
        <>
          <h2>{blog.title}</h2>
          <p>{blog.text}</p>
          <button onClick={handleEdit}>Edit</button>
          <DeleteBlog id={blog._id} />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default BlogDetails;
