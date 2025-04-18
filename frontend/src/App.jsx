import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import PieView from './pages/PieView';
import GraphView from './pages/GraphView';

export default function App() {
  return (
    <Router>
      <div className="bg-container text-white">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
          <Link className="navbar-brand" to="/">Dashboard</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto">
              <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/pie">Pie View</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/graph">Graph View</Link></li>
            </ul>
          </div>
        </nav>

        <div className="container py-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pie" element={<PieView />} />
            <Route path="/graph" element={<GraphView />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
