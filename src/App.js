import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Aboutus from './components/Aboutus/Aboutus';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';

import {
  Routes,
  Route
 } from "react-router-dom";

function App() {
  return(
    <Routes>
      <Route path="/przychodnia" element={<Home />} />      
      <Route path="/przychodnia/aboutus" element={<Aboutus />} />
      <Route path="/przychodnia/services" element={<Services />} />
      <Route path="/przychodnia/contact" element={<Contact />} />
      <Route path="/przychodnia/login" element={<Login />} />
    </Routes>
  )
}

export default App;