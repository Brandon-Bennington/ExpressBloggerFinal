import axios from 'axios';

const API_BASE_URL = "http://localhost:3001/api/blogs";

export async function getAllBlogs() {
  const response = await axios.get(API_BASE_URL);
  return response.data;
}

export async function getBlogById(id) {
  const response = await axios.get(`${API_BASE_URL}/${id}`);
  return response.data;
}

export async function createBlog(blog) {
  const response = await axios.post(API_BASE_URL, blog);
  return response.data;
}

export async function deleteBlogById(id) {
  const response = await axios.delete(`${API_BASE_URL}/${id}`);
  return response.data;
}

export async function deleteAllBlogs() {
  const response = await axios.delete(API_BASE_URL);
  return response.data;
}
