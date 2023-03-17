import { useEffect } from "react"
import { Link } from "react-router-dom"


import Banner from "./Banner"
import banner_6 from "../assets/banners/banner_6.jpg"

const Careers = () => {
    useEffect(()=>{
        document.title = "Maitri Capital - Careers"
    })

    const text = "Dedicated to Building a Team of Professionals"

    return (
        <div className='contact-holder' style={{marginBottom:"100px"}}>
            <Banner backgroundImg={banner_6} extraImg={banner_6} mainText={text} />
            <div className="sector-brief about-top">
                <div className="sector-expl about-p">
                    <p className="front-p">Our Careers </p>
                    <p className="p-about">
                        Our company is dedicated to building a team of talented professionals who 
                        bring diverse perspectives and experiences to our work. We believe in providing a 
                        collaborative and inclusive work environment where everyone can contribute their unique 
                        skills and talents to help us achieve our goals.
                    </p>
                </div>
            </div>
            <div className="sector-brief about-top">
                <div className="sector-expl about-p">
                    <p className="front-p"> </p>
                    <p className="p-about">
                        Thank you for your interest in Maitri Capital. 
                        If you're interested in joining our team, please send your resume and a cover letter to 
                         <a href="mailto:info@maitri-group.com"> info@maitri-group.com</a>
                    </p>

                    <p className="p-about">
                        Thank you for considering our company as a potential employer. We look forward to hearing from you!
                    </p>
                </div>
            </div>
        </div>
  )
}

export default Careers