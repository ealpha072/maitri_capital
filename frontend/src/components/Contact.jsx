import { useEffect } from "react"
import styles from "./styles/Contact.module.css"

import Banner from "./Banner"
import banner_6 from "../assets/banners/banner_6.jpg"

const Contact = () => {
    useEffect(()=>{
        document.title = "Maitri Capital - Contact us"
    })
    
    const text = "Connect with Us"

    return (
        <div className='contact-holder'>
            <Banner backgroundImg={banner_6} extraImg={banner_6} shortText={text} />
            <div className="sector-brief about-top">
                <div className="sector-expl about-p">
                    <p className="front-p">Our Offices </p>
                    <p className="p-about">
                        Our offices are located in the bustling city of Nairobi, 
                        the capital of Kenya. We pride ourselves on being easily 
                        reachable and accessible to all our clients, 
                        and we look forward to welcoming you to our Nairobi offices.
                    </p>
                </div>
            </div>
            <div className="sector-brief about-top">
                <div className="sector-expl about-p">
                    <p className="front-p">Contact Us </p>
                    <p className="p-about">
                        Thank you for your interest in Maitri Capital. 
                        If you have a question specifically about our services 
                        and how we may be able to help you please contact your local office 
                        below and they will connect you with the best suited individual.
                    </p>
                    <p className="p-about">
                        If you are interested in a career with us, please visit the careers 
                        section of our website..
                    </p>
                    <p className="p-about">
                        If you have a media enquiry please email  <a href="mailto:info@maitri-group.com">info@maitri-group.com</a>
                    </p>
                    <p className="p-about">
                        If you would like to receive our news please sign up using the form below.
                    </p>
                </div>
            </div>
            <div className={styles.contactForm}>
                <form action="" className={styles.form}>
                    <div className="row">
                        <div className="form-group col-12 col-md-6 col-lg-6">
                            <label for="inputEmail4">First Name <span className='required-field'>*</span></label>
                            <input type="text" className="form-control" id="inputEmail4" placeholder="Email" />
                        </div>
                        <div className="form-group col-12 col-md-6 col-lg-6">
                            <label for="inputPassword4">Last Name <span className='required-field'>*</span></label>
                            <input type="text" className="form-control" id="inputPassword4" placeholder="Password" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-12 col-md-6 col-lg-6">
                            <label for="inputEmail4">Company name <span className='required-field'>*</span></label>
                            <input type="text" className="form-control" id="inputEmail4" placeholder="Telephone number" />
                        </div>
                        <div className="form-group col-12 col-md-6 col-lg-6">
                            <label for="inputPassword4">Company Email <span className='required-field'>*</span></label>
                            <input type="email" className="form-control" id="inputPassword4" placeholder="Password" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-12 col-md-6 col-lg-6">
                            <label for="inputEmail4">Telephone <span className='required-field'>*</span></label>
                            <input type="tel" className="form-control" id="inputEmail4" placeholder="Telephone number" />
                        </div>
                        <div className="form-group col-12 col-md-6 col-lg-6">
                            <label for="inputPassword4">Details <span className='required-field'>*</span></label>
                            <textarea name="" id="" cols="30" rows="5" className='form-control'></textarea>
                        </div>
                    </div>
                </form>
            </div>
        </div>
  )
}

export default Contact