import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import BlogList from './components/BlogList';
import BlogDetails from './components/BlogDetails';
import CreateBlog from './components/CreateBlog';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="container">
          <h1 className="my-4">Blog App</h1>

          {/* Navigation links */}
          <nav>
            <ul className="nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/create">Create Blog</Link>
              </li>
            </ul>
          </nav>

          {/* Route configuration */}
          <Routes>
            <Route exact path="/" element={<BlogList />} />
            <Route path="/blog/:id" element={<BlogDetails />} />
            <Route path="/create" element={<CreateBlog />} />
          </Routes>

        </div>
      </Router>
    </div>
  );
}

export default App;
