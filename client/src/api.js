import axios from 'axios';

const API_URL = 'http://localhost:5001/api/blogs';

// Using fetch
export const fetchBlogs = () => fetch(API_URL).then((res) => res.json());

// Using axios
export const axiosFetchBlogs = () => axios.get(API_URL).then((res) => res.data);

// Other API helper functions (using axios as an example)
export const getBlogById = (id) => axios.get(`${API_URL}/${id}`).then((res) => res.data);

export const createBlog = (blog) => axios.post(API_URL, blog).then((res) => res.data);

export const deleteBlog = (id) => axios.delete(`${API_URL}/${id}`).then((res) => res.data);

export const deleteAllBlogs = () => axios.delete(API_URL).then((res) => res.data);
