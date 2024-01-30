import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { Login } from './Login';
import { Register } from './Register';
import Footer from './Footer';
import './Home.css';

function Home() {
  const [currentForm, setCurrentForm] = useState('login');
  const [loggedInUser, setLoggedInUser] = useState(
    // localStorage.getItem('registeredUsername') || 
    null
  );

  const handleLogout = () => {
    console.log('logging out...');
    setLoggedInUser(null);
  };

  useEffect(() => {
    console.log('loggedInUser changed:', loggedInUser);
  }, [loggedInUser]);

  const handleRegister = (name) => {
    setLoggedInUser(name);
  };

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <>
    <div>
        <div className="home-container">
            <img src={require('../Images/laptop.png')} alt="homepage" />
        </div>
    </div>
    <Navbar onLogout={handleLogout} loggedInUser={loggedInUser} />
    <div className="auth-form-container">
        {loggedInUser ? (
            <h1>Welcome, {loggedInUser}!</h1>
        ) : (
            <>
                {currentForm === 'login' ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} onRegister={handleRegister} />}
                
                <div className="content-container">
                    <div className='spanBox'>
                      <br/>
                        In person <span>|</span> By Phone <span>|</span> Online
                        <br/>
                        <br/>
                    </div>
                    <div className="button-container">
                        <button className="bookbtn">Book Appointment</button>
                        <button className="startbtn">Start Online Now</button>
                    </div>
                </div>
            </>
        )}
    </div>
    <Footer />
</>

  )}

export default Home;
