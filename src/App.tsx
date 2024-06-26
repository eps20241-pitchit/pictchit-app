import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Navbar from './components/navbar';
import Home from './pages/Home/home';
import Introduction from './pages/Intro/intro';
import Register from './pages/Register/register';
import Pitch from './pages/Pitch/pitch';
import { CreatePitch } from './pages/CreatePitch';
import Login from './pages/Login/login';
import Contact from './pages/Contact/contact';
import { CreatePitchOCTC } from './pages/CreatePitchOCTC';

export function App() {
  return (
    <>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/"  element={<Home/>} />
            <Route path="/introduction" element={<Introduction/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/pitch" element={<Pitch/>} />
            <Route path="/create-pitch" element={<CreatePitch/>} />
            <Route path="/create-pitchoctc" element={<CreatePitchOCTC/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        </div>
      </Router>
      <Toaster />
    </>
  );
}
