import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/Home/home';
import Introduction from './pages/Intro/intro';
import Register from './pages/Register/register';
import Pitch from './pages/Pitch/pitch';
import { CreatePitch } from './pages/CreatePitch';
import Login from './pages/Login/login';

export function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/"  element={<Home/>} />
          <Route path="/introduction" element={<Introduction/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/pitch" element={<Pitch/>} />
          <Route path="/create-pitch" element={<CreatePitch/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </div>
    </Router>
  );
}
