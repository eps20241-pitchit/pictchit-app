
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/Home/home';
import Introduction from './pages/Intro/intro';
import Register from './pages/Register/register';
import CreatedPitch from './pages/CreatedPitch/createdPitch';


export function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/"  element={<Home/>} />
          <Route path="/introduction" element={<Introduction/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/created-pitch" element={<CreatedPitch/>}/>
        </Routes>
      </div>
    </Router>
  );
}
