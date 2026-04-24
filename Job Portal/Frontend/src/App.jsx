import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Briefcase, LogIn, UserPlus } from 'lucide-react';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import './index.css';

function App() {
  return (
    <Router>
      <nav>
        <div className="container nav-content">
          <Link to="/" className="logo">
            <Briefcase size={28} color="#3b82f6" />
            <span>JobPortal</span>
          </Link>
          <div className="nav-links">
            <Link to="/" className="nav-link">Jobs</Link>
            <Link to="/dashboard" className="nav-link">Dashboard</Link>
            <Link to="/login" className="btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem' }}>
              <LogIn size={18} />
              Login
            </Link>
          </div>
        </div>
      </nav>

      <main className="container" style={{ padding: '3rem 1.5rem' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
