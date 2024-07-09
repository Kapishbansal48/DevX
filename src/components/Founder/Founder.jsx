import React from 'react';
import './Founder.css';
import IMG1 from '../../assets/contact/img1.webp';
import IMG2 from '../../assets/contact/img2.webp';

export default function Founder() {

    return (
        <>
         <div id="founder">
            <div className="container">
                <div className="title_headling">
                    <h3>Founders</h3>
                    <p>Our True Sensations of DeveeloX</p>
                </div>
                <div className="service_wrapper">
                    <div className="service_box">
                        {/* <div className="service_icon blue_icon">{faLaptopCodeIcon}</div> */}
                        <div className="image1">
                        <img src={IMG1} alt="img" />
                        </div>
                        <h4 className="number">01</h4>
                        <div className="service_content">
                            <h5> Arham Banthia</h5>
                            <p>Founder and chief visionary, Arham is the driving force behind the company. He loves to keep his hands full by participating in the development of software, marketing, and customer experience strategies.</p>
                            
                        </div>
                    </div> 
                    <div className="service_box">
                        {/* <div className="service_icon">{faChartBarIcon}</div> */}
                        <div className="image2">
                        <img src={IMG2} alt="img" />
                        </div>
                        <h4 className="number">02</h4>
                        <div className="service_content">
                            <h5> Harsh Khandelwal</h5>
                            <p>Harsh loves taking on challenges.  With a wealth of experience in personal branding, digital marketing, and software development , he has helped the company to get where it is today. He is among the best minds in the industry</p>
                            
                        </div>
                    </div>
                    
                </div>
            </div>
         </div>
        </>
      )
}
