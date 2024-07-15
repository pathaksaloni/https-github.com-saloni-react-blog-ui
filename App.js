

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Single from './pages/single/Single';
import TopHeader from './components/head/topheader/TopHeader';
import Writee from './write/Writee';
import Setting from './settings/Setting';
import Login from './login/Login';
import Register from './register/Register';

function App() {
  const currentUser = false; // Assuming currentUser logic

  return (
    <Router>
      <TopHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Home />} />
        <Route path="/register" element={currentUser ? <Home /> : <Register />} />
        <Route path="/login" element={currentUser ? <Home /> : <Login />} />
        <Route path="/post/:id" element={<Single />} />
        <Route path="/write" element={currentUser ? <Writee /> : <Login />} />
        <Route path="/settings" element={currentUser ? <Setting /> : <Login />} />
      </Routes>
    </Router>
  );
}

export default App;