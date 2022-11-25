import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';

import {
  Routes,
  Route
 } from "react-router-dom";

function App() {
  return(
    <Routes>
      <Route path="/przychodnia" element={<Home />} />
      <Route path="/przychodnia/login" element={<Login />} />
    </Routes>
  )
}

export default App;