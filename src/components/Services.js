import React from 'react'
import Navbar from './Navbar'
import './Services.css';
import Footer from './Footer';

function Services() {
  return (
    <>
    
    <Navbar />
    <div className="service-container">
            <img src={require('../Images/services.jpg')} alt="services" /> </div>
    <div className='services'>
        <div className='servicesWrapper'>
            <h4> Our Services</h4>
            <span>
            Our company offers a range of services tailored to meet the needs of small companies and sole traders: </span>
            <br/><br/>
            <ul className='services-checklist'>
                <h3><u>For Small Companies:</u></h3> <br/>
                <li>- <i>Corporation Tax:</i> We handle your corporation tax obligations, ensuring compliance and maximising tax efficiency.</li>
                <h3><u>VAT Return:</u></h3><br/>
                <li>- Our experts manage your VAT return, simplifying the process and ensuring accuracy.</li>
                <h3><u>Bookkeeping:</u></h3><br/>
                <li>- Our team can handle your bookkeeping, ensuring your financial records are organised and up to date</li>
                <h3><u>For Sole Traders:</u></h3><br/>
                <li>
- We provide self-assessment management services, helping you navigate the tax process smoothly.</li>
<h3><u>Payroll: </u></h3><br/>
<li>- We take care of your payroll needs, ensuring your employees are paid accurately and on time.</li> <br/>
<li>- We also offer payroll services for sole traders, streamlining your payroll processes.</li>
<li>With our comprehensive services, we aim to ease the administrative burdens for both small companies and sole traders, allowing you to focus on your core business activities.
</li><br/> <br/><br/>
            </ul>
            <div className='image-wrapper'>
            <div className="image-wrapper">
        <img src={require("../Images/financial-plan.jpg")} alt="working together" />
      </div>
      <div className="image-wrapper1">
        <img src={require("../Images/graph-pic.jpg")} alt="working together" />
      </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default Services
