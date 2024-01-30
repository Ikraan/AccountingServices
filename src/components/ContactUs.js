import React from 'react';
import Navbar from './Navbar';
import './ContactUs.css';
import Footer from './Footer';

function ContactUs() {
    return (
        <>
            <Navbar />
            <div className="contact-container">
                <img src={require('../Images/contactUs.jpg')} alt="services" />
            </div>
            <div className='contactUs'>
                <div className='servicesWrapper'>
                    <h3>If you are interested and want to know more about our accountancy services and processes; </h3>
                    <h3> from self-assessment to tax rebates & payroll. Please fill out the form below, and Alyousifi accounting services will get back to you!</h3>
                    <div className='formTable'>
                        <form action="https://formspree.io/f/xyyrzrzy" method="POST">
                            <div className="form-group">
                                <label htmlFor="your-name">Your Name (Required)</label>
                                <input className="form-control" type="text" name="your-name" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="your-message">What type of help do you require?</label>
                                <textarea className="form-control" rows="6" name="your-message" required></textarea>
                            </div>
                            <div className="form-group">
                                <label htmlFor="your-email">Your Email (Required)</label>
                                <input className="form-control" type="email" name="your-email" required />
                            </div>
                            <button className="btn-submit" type="submit">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default ContactUs;
