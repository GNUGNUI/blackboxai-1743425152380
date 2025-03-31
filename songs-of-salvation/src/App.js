import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeDashboard from './components/HomeDashboard';
import SongDetails from './components/SongDetails';
import Login from './components/Login';
import AdminDashboard from './components/AdminDashboard';
import ThemeChanger from './components/ThemeChanger';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-deep-purple to-black text-white">
        <Routes>
          <Route path="/" element={<HomeDashboard />} />
          <Route path="/song/:id" element={<SongDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/theme" element={<ThemeChanger />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;