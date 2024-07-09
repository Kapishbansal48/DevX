import React,{useState, useEffect} from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faLocationDot, faPhone , faPaperPlane} from '@fortawesome/free-solid-svg-icons';
// import "./footer.html"

export default function Footer() {

    // Icons
    const faArrowUpIcon = <FontAwesomeIcon icon={faArrowUp} />
     const faLocationDotIcon = <FontAwesomeIcon icon={faLocationDot} />
    const faPhoneIcon = <FontAwesomeIcon icon={faPhone} />
    const faPaperPlaneIcon = <FontAwesomeIcon icon={faPaperPlane} />

    // State
    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }

    const listenToScroll = () => {
        let heightToHidden = 250;
        const windowScroll = document.body.scrollTop || document.documentElement.scrollTop;

        (windowScroll > heightToHidden) ? setIsVisible(true) : setIsVisible(false);
    }

    useEffect(()=>{
        window.addEventListener("scroll", listenToScroll);
    })

  return (
    <>
    <section className="container">
        <footer className="footer">
            <p>Copyright © Trivion Technologies Private Limited</p> 
            <div className="con">
                       <p className='con1'> Trivion Technologies Private Limited</p>
                    <div className="about_icon">
                    {faLocationDotIcon}
                    </div>
                    <div className="about_content">
                    <p className='con1'>G-03, Capital High Street, Mahal Road,Jaipur</p>
                    </div>
                    <div className="about_icon">
                        {faPhoneIcon}
                    </div>
                    <div className="about_content">
                    <p className='con2'>+91 80056 42075</p>
                    </div>
                    <div className="about_icon">
                        {faPaperPlaneIcon}
                    </div>
                    <div className="about_content">
                    <p className='con3'>hello@deevelox.com</p>    
                    </div>
             </div>       
        </footer>
    </section>

    {/* Scroll To Top */}
    {
        isVisible && (
            <div className="scroll_top" onClick={scrollToTop}>
                {faArrowUpIcon}
            </div>
        )
    } 
    </>
  )
}
