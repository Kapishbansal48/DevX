import React from 'react';
import './Contact.css';
import ContactImage from '../../assets/contact/con.png';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLocationDot, faPhone , faPaperPlane } from '@fortawesome/free-solid-svg-icons';
// import AboutImage from '../../assets/about/about_img.jpg';
// import { Link } from 'react-router-dom';

export default function Contact() {
    // const faLocationDotIcon = <FontAwesomeIcon icon={faLocationDot} />
    // const faPhoneIcon = <FontAwesomeIcon icon={faPhone} />
    // const faPaperPlaneIcon = <FontAwesomeIcon icon={faPaperPlane} />
  return (
    <>
        <section id="contact">
            <div className="container">
                <div className="contact_wrapper">
                    <div className="contact_col">
                        <div className="contact_image">
                            <img src={ContactImage} alt="Contact"/>
                        </div>
                    </div>
                    <div className="contact_col">
                        <h2>Contact US</h2>
                        <form>
                            <div className="input_wrapper">
                                <input type="text" className="form-control" placeholder="Your Name..." autocomplete="off"/>
                            </div>
                            <div className="input_wrapper">
                                <input type="text" className="form-control" placeholder="Your Company Name..." autocomplete="off"/>
                            </div>
                            <div className="input_wrapper">
                                <input type="text" className="form-control" placeholder="Subject*" autocomplete="off"/>
                            </div>
                            <div className="input_wrapper">
                                <input type="text" className="form-control" placeholder="Your Phone..." autocomplete="off"/>
                            </div>
                            <div className="input_wrapper">
                                <input type="email" className="form-control" placeholder="Your Email..." autocomplete="off"/>
                            </div>
                            <div className="input_wrapper">
                                <textarea placeholder="Write a Message/Question..."></textarea>
                            </div>
                            <div className="btn_wrapper">
                                <button type="submit" className="btn">
                                    Submit
                                </button>
                            </div>
                        </form>
                        
                    {/* </div> */}
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
