import './App.css';
import axios from 'axios';
import Home from './components/Home';
import React, { useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
// eslint-disable-next-line no-unused-vars
import {Login} from './components/Login';
import ContactUs from './components/ContactUs';


function App() {
  const [email ] = useState('');
  const [pass ] = useState('');
  const BASE_URL = 'http://localhost:5000/api';

// eslint-disable-next-line no-unused-vars
  const handleRegister = async () => {
    try {
      await axios.post(`${BASE_URL}/register`,{email, pass});
      console.log('Registeration successful!');
    } catch (error) {
      console.error('Registeration failed:', error.message);
    }
  };
// eslint-disable-next-line no-unused-vars
  const handleLogin = async () => {
    try {
      await axios.post(`${BASE_URL}/login`, {email,pass});
      console.log('Login successful!');
    } catch (error){
      console.error('Login failed:', error.message)
    }
  };

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/AboutUs' exact element={<AboutUs />} />
        <Route path='/Services' exact element={<Services />} />
        <Route path='/ContactUs' exact element={<ContactUs />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
