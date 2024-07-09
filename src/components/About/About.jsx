import React from 'react';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBusinessTime, faChartPie, faStar, faClipboardList, faLockOpen, faEject, faPaperPlane, faPhone } from '@fortawesome/free-solid-svg-icons';
import AboutImage from '../../assets/about/ab.avif';

export default function About() {

    const faBusinessIcon = <FontAwesomeIcon icon={faBusinessTime} />
    const faChartPieIcon = <FontAwesomeIcon icon={faChartPie} />
    const faStarIcon = <FontAwesomeIcon icon={faStar} />
    const faClipboardListIcon = <FontAwesomeIcon icon={faClipboardList} />
    const faLockOpenIcon = <FontAwesomeIcon icon={faLockOpen} />
    const faEjectIcon = <FontAwesomeIcon icon={faEject} />
    const faPaperPlaneIcon = <FontAwesomeIcon icon={faPaperPlane} />
    const faPhoneIcon = <FontAwesomeIcon icon={faPhone} />

  return (
    <>
    <section id="about">
        <div class="container">
            <div className="title_headling">
                <h3>Welcome to Deevelo X, where innovation meets expertise and development meets marketing.  </h3>
                <p>We offer a comprehensive suite of services designed to elevate your brand and drive your success in the digital landscape. From crafting compelling personal brands to executing cutting-edge digital marketing strategies, our team is dedicated to delivering excellence .</p>
            </div>
            <div className="about_box_wrapper">
                <div className="about_box">
                    <div className="about_icon">
                        {faBusinessIcon}
                    </div>
                    <div className="about_content">
                        <h5>Our Mission</h5>
                        <p>At Deevelo X, our mission is to empower businesses to thrive in the digital landscape. Through innovative solutions, creative content, and strategic marketing, we aim to elevate your brand from inception to industry leader. We are dedicated to delivering excellence and driving success for our clients.  From crafting compelling personal brands to executing cutting-edge digital marketing strategies.</p>
                    </div>
                </div>
                <div className="about_box">
                    <div className="about_icon green_icon">
                        {faChartPieIcon}
                    </div>
                    <div className="about_content">
                        <h5>Our Story</h5>
                        <p>We were founded on the principle of blending development and marketing to create powerful digital solutions. We specialize in developing cutting-edge software, mobile apps, and websites, as well as implementing impactful digital marketing strategies. Our journey began with a vision to help brands grow and succeed in a competitive market, and today, we continue to innovate and excel in delivering exceptional results for our clients.</p>
                    </div>
                </div>
                <div className="about_box">
                    <div className="about_icon blue_icon">
                        {faStarIcon}
                    </div>
                    <div className="about_content">
                        <h5>Our Values</h5>
                        <p>Our core values are innovation, integrity, and client satisfaction. We believe in developing comprehensive digital solutions that not only meet but exceed our clients' expectations. Our commitment to quality and excellence ensures that we build strong, lasting relationships with our clients. We strive to foster a loyal community around your brand, driving engagement and growth through effective strategies and creative content.</p>
                    </div>
                </div>
            </div>

            <div className="about_box_details">
                <div className="about_col">
                    <div className="about_image">
                        <img src={AboutImage} alt="about" className="about_main"/>
                    </div>
                    <div className="img_info__box">
                        <h6 className="img_info__title">LET US GROW TOGETHER</h6>
                        <p>Contact Us Today Only At</p>
                        <a href="/">{faPhoneIcon} <span>+91 80056 42075</span></a>
                    </div>
                </div>
                <div className="about_col more_space">
                    <h3>We have Business Skills that will increase your earnings</h3>
                    <p>Our Process to enhance Business Skills</p>

                    <div className="grid_info">
                        <div className="icon">{faClipboardListIcon}</div>
                        <div className="detail">
                            <h4>Initial Consultation</h4>
                            <p>Meet and understand your needs</p>
                        </div>
                    </div>
                    <div className="grid_info">
                        <div className="icon">{faLockOpenIcon}</div>
                        <div className="detail">
                            <h4>Strategy Development</h4>
                            <p>Create a tailored plan based on insights.</p>
                        </div>
                    </div>
                    <div className="grid_info">
                        <div className="icon green_icon">{faEjectIcon}</div>
                        <div className="detail">
                            <h4>Execution</h4>
                            <p>Kick off with a project alignment meeting.</p>
                        </div>
                    </div>
                    <div className="grid_info">
                        <div className="icon green_icon">{faPaperPlaneIcon}</div>
                        <div className="detail">
                            <h4>Review and Optimization</h4>
                            <p>Evaluate performance against goals</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
