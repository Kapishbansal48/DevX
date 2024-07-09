import React from 'react';
import './Services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faChartBar, faCopy, faMarker, faUserGear, faCoins } from '@fortawesome/free-solid-svg-icons';

export default function Services() {

    // Icons
    const faLaptopCodeIcon = <FontAwesomeIcon icon={faLaptopCode} />
    const faChartBarIcon = <FontAwesomeIcon icon={faChartBar} />
    const faCopyIcon = <FontAwesomeIcon icon={faCopy} />
    const faMarkerIcon = <FontAwesomeIcon icon={faMarker} />
    const faUserGearIcon = <FontAwesomeIcon icon={faUserGear} />
    const faCoinsIcon = <FontAwesomeIcon icon={faCoins} />
  return (
    <>
     <div id="services">
        <div className="container">
            <div className="title_headling">
                <h3>What's Services We Are Offering to Our Customers</h3>
                <p>We are there with the Following services for our Customers</p>
            </div>
            <div className="service_wrapper">
                <div className="service_box">
                    <div className="service_icon blue_icon">{faLaptopCodeIcon}</div>
                    <h4 className="number">01</h4>
                    <div className="service_content">
                        <h5> Digital Marketing</h5>
                        <p>SEO (Search Engine Optimization) to boost your online presence.
PPC (Pay-Per-Click) campaigns for targeted traffic and leads.
Social Media Marketing to engage with your audience.
Content Marketing that drives engagement and conversions.
Email Marketing campaigns for effective communication..</p>
                        <a href="/" className="read">Explore</a>
                    </div>
                </div> 
                <div className="service_box">
                    <div className="service_icon">{faChartBarIcon}</div>
                    <h4 className="number">02</h4>
                    <div className="service_content">
                        <h5> Personal Branding</h5>
                        <p>
                            <ul><li>Build a compelling personal brand that resonates with your audience.</li>
<li>Professional headshot sessions and personal website development.</li>
<li>Social media profile optimization and content strategy.</li>
<li>Branding consultations tailored to your career goals.</li></ul></p>
                        <a href="/" className="read">Explore</a>
                    </div>
                </div>
                <div className="service_box">
                    <div className="service_icon green_icon">{faCopyIcon}</div>
                    <h4 className="number">03</h4>
                    <div className="service_content">
                        <h5>Meta Ads</h5>
                        <p>
<ul><li>Creative ad copy and visual design to capture audience attention.</li><br></br>
<li>ROI-focused ad strategies for maximum impact.</li><br></br>
<li>Continuous optimization and performance tracking.</li>
</ul></p>
                        <a href="/" className="read">Explore</a>
                    </div>
                </div>
                <div className="service_box">
                    <div className="service_icon">{faMarkerIcon}</div>
                    <h4 className="number">04</h4>
                    <div className="service_content">
                        <h5>Content Creation & Social Media Management</h5>
                        <p>Creative content writing for blogs, websites, and social media platforms.
Social Media Management to grow your following and increase engagement.
Video Production and Editing for compelling visual storytelling.
Graphic Design for branded visuals and marketing materials
Analytics and Reporting to measure campaign effectiveness.</p>
                        <a href="/" className="read">Explore</a>
                    </div>
                </div>
                <div className="service_box">
                    <div className="service_icon green_icon">{faUserGearIcon}</div>
                    <h4 className="number">05</h4>
                    <div className="service_content">
                        <h5>Content Production</h5>
                        <p>Crafting visually compelling ads that resonate with your target audience.
Focus on creating ads that drive higher conversion rates and maximize Return on Advertising Spend (ROAS). Brainstorming and developing unique concepts and storyboards for ad campaigns. Professional filming and editing services to produce high-quality video content for ads.
Tailoring content for various platforms to ensure maximum impact and engagement.</p>
                        <a href="/" className="read">Explore</a>
                    </div>
                </div>
                <div className="service_box">
                    <div className="service_icon blue_icon">{faCoinsIcon}</div>
                    <h4 className="number">06</h4>
                    <div className="service_content">
                        <h5>Software Development </h5>
                        <p>
                        <ul><li>Custom Software Solutions tailored to your business needs.</li>
 <li>Mobile App Development for iOS and Android platforms.</li>
<li>Web Development with modern technologies and frameworks.</li>
<li>E-commerce Solutions for seamless online transactions.</li>
<li>UI/UX Design to enhance user experience.</li></ul></p>
                        <a href="/" className="read">Explore</a>
                    </div>
                </div>
                
            </div>
        </div>
     </div>
    </>
  )
}
