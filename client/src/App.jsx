import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PostList from './components/PostList';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Posts from './components/Posts';
import CreatePost from './components/CreatePost';
import RequireAuth from './components/RequireAuth';

function App() {
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.reload();
  };

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>{" | "}
        <Link to="/signup">Sign Up</Link>{" | "}
        <Link to="/login">Login</Link>{" | "}
        <Link to="/create">Create Post</Link>{" | "}
        <Link to="/posts">View Posts</Link>{" | "}
        {token && <button onClick={handleLogout}>Log Out</button>}
      </nav>

      <h1>Welcome to Alanwoko's Blog</h1>

      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create" element={
          <RequireAuth>
            <CreatePost />
          </RequireAuth>
        } />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </Router>
  );
}

export default App;
