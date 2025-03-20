import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from "./Home";
import Blog from "./Blog";
import BlogPost from "./BlogPost";

function App() {
  return (
    <div className="App">
      <Router> 
        <nav>
          <Link to="/">Home</Link>
          <Link to="/blog">Blog</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path ="/blog" element={<Blog />} />
          <Route path ="/blog/blogid" element={<BlogPost />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
