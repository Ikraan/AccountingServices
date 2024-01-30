

// function AboutUs() {
//   return (
//     <div className='wrapper'>
//       <div className='clearboth'></div>
//       <div className='divider' style={{marginTop: '77px'}}></div>
//       <div className='text-column'>
//         <div className='text-wrapper'>
//           <div className='title-h2' style={{textAlign: 'center'}}>Our Mission</div>
//         </div>
//       </div>
//       <div className='clearboth'></div>
//       <div className='divider' style={{marginTop: '37px'}}></div>
//       <div className='text-wrapper ptext'>
//         <div className='text-wrapper'>
//           <p style={{textAlign: 'center'}}>AYS enjoys the reputation of being one of the most successful accounting services in U.K. We have earned this position by continuously offering innovation and leading edge solutions to our clients over many years</p>
//         </div>
//       </div>
//       <div className='clearboth'></div>
//       <div className='divider' style={{marginTop: '50px'}}></div>
//       <div className='row-bulletpoints'>
//         <div className='row-container'>
//           <div className='inner-column'>
//             <div className='inner-wrapper'>
//               <div className='row-list'>
//                 <ul>
//                   <li>We offer tailored solutions for your needs</li>
//                   <li>We understand your business processes</li>
//                   <li>We look for long term business relationships</li>
//                   <li>Your business is important to us</li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//           <div className='clearboth'></div>
//           <div className='divider' style={{marginTop: '95px'}}></div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from 'react';
import './AboutUs.css';
import Navbar from './Navbar';
import Footer from './Footer';

const AboutUs = () => {
  return (
    <>
    <Navbar />
    <div className="aboutuswrapper">

        </div>
    <div className="about-us-wrapper">
      <div className="text-wrapper">
        <br></br>
        <h1>About Us</h1>
        <br></br>
        <span>
        AYS enjoys the reputation of being one of the most successful accounting services in U.K. 
        We have earned this position by continuously offering innovation and leading edge solutions to our clients over many years
        </span>
        <br></br>
        <br></br>
        <ul className="checked-list">
          <li>We offer tailored solutions for your needs</li>
          <li>We understand your business processes</li>
          <li>We look for long term business relationships</li>
          <li>Your business is important to us</li>
        </ul>
        <br></br>
      </div>
      <div className="images-wrapper">
        <img src={require("../Images/workOnDesk.png")} alt="working together" />
      </div>
    </div>
    <div className='para1'>
        <p> Our Philosophy</p>
        <div className='para2'>
        <span>
We channel our passion and professionalism into both hard and intelligent work, allowing our clients the freedom to concentrate on their passions.<br/> 
Integrity and transparency form the cornerstone of our ethos, pushing us to enhance every situation we encounter.<br/>
 Our dedication to continual learning ensures that our clients consistently meet their business objectives.<br/>
  Ultimately, our goal is to forge enduring partnerships, anchored in shared success. </span></div>
    </div>
    <Footer />
    </>
  );
};

export default AboutUs;

