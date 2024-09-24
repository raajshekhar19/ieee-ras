import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Slidebar.css';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="close-btn" onClick={toggleSidebar}>×</button>
      <nav className="sidebar-links">
        <Link to="/" onClick={toggleSidebar}>Home</Link>
        <Link to="/about" onClick={toggleSidebar}>About</Link>
        <Link to="/events" onClick={toggleSidebar}>Events</Link>
        <Link to="/gallery" onClick={toggleSidebar}>Gallery</Link>
        <Link to="/contact" onClick={toggleSidebar}>Contact</Link>
      </nav>
    </div>
  );
};

export default Sidebar;