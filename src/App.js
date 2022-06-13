import React from 'react';
import './style.css';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import ReactBasics from './pages/ReactBasics';
import Params from './components/react-router-dom/Params';

export default function App() {
  return (
    <>
      <nav className="navbar">
        <Link to="/react-basics">React Basics</Link>
        <Link to="/router-id/123">React Router</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Navigate to="/react-basics" />} replace />
        <Route path="/react-basics" element={<ReactBasics />} />
        <Route path="/router-id/:id" element={<Params />} />
        <Route path="*" element={<span>404</span>} />
      </Routes>
    </>
  );
}
