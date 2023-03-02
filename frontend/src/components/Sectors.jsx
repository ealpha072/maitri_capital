import {useState, useEffect} from 'react'
import styles from './styles/Sector.module.css'

import Banner from './Banner'
import banner_5 from "../assets/banners/banner_5.jpg"

const Sectors = () => {

    useEffect(()=>{
        document.title = "Maitri Capital -  Sectors"
    })

    const text = "Sector diverse Company"
    const [isDisplay, setDisplay] = useState(false)
    const handleToggle = (e) => {
        e.preventDefault()
        setDisplay(!isDisplay)
    }

    return (
        <div className="sector-section">
            <Banner backgroundImg={banner_5} extraImg={banner_5} mainText={text} />
            <div className="sector-brief about-top d-flex">
                <div className="sector-expl about-p">
                    <p className="front-p">Industry Coverage</p>
                    <p className="p-about">
                        We're an integrated part of the African economy, leveraging our expertise 
                        in key sectors like agriculture, real estate, education, health, infrastructure, 
                        Power and Clean Energy, hospitality, and ICT to provide the best possible investment 
                        and corporate advisory services.
                    </p>
                    <p className="aside-sectors" style={{paddingLeft:'25px'}}>
                        The company leverages its vast knowledge and expertise in these sectors to provide 
                        bespoke solutions to its clients. With a proven track record of success spanning over six years, 
                        Maitri Capital continues to set the standard for quality service delivery in the industry.
                    </p>
                    <p className="aside-sectors" style={{paddingLeft:'25px'}}>
                        The company's commitment to excellence, attention to detail, 
                        and ability to adapt to the ever-changing market dynamics has made it a 
                        preferred partner for many businesses seeking investment and corporate advisory services 
                        in these sectors.
                    </p>
                </div>
                <div className={styles.sectorCount}>
                    <p>11</p>
                    <p className='core-ind'>Core Sectors</p>
                </div>
            </div>
            <div className="sector-specific about-bottom" style={{backgroundColor:'#c1dee7'}}>
                <p className={styles.specificIndustries}>Specific Industries</p>
                <div className={`row ${styles.bottomSection}`}>
                    <div className="col-lg-2 col-md-4 col-sm-4 col-6">
                        <div className="sector-icon">
                            <i className='fa fa-leaf'></i>
                            <h4>Agriculture</h4>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-4 col-6">
                        <div className="sector-icon">
                            <i className='fa fa-graduation-cap'></i>
                            <h4>Education</h4>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-4 col-6">
                        <div className="sector-icon">
                            <i className='fa fa-user-md'></i>
                            <h4>Health</h4>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-4 col-6">
                        <div className="sector-icon">
                            <i className='fa fa-plane'></i>
                            <h4>Hospitality</h4>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-4 col-6">
                        <div className="sector-icon">
                            <i className='fa fa-laptop'></i>
                            <h4>ICT</h4>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-4 col-6">
                        <div className="sector-icon">
                            <i className='fa fa-industry'></i>
                            <h4>Manufaturing</h4>
                        </div>
                    </div>

                <a href="/#" onClick={ handleToggle }>{!isDisplay ? "More" : "Less"}</a>
                </div>
                <div className={isDisplay ? `row ${styles.bottomSection}  hidden-industries`: `hide`} style={{paddingTop:'0px'}}>
                    <div className="col-lg col-md-4 col-sm-4 col-6">
                        <div className="sector-icon">
                            <i className='fa fa-bolt'></i>
                            <h4>Clean Energy</h4>
                        </div>
                    </div>
                    <div className="col-lg col-md-4 col-sm-4 col-6">
                        <div className="sector-icon">
                            <i className='fa fa-usd'></i>
                            <h4>Financial Services</h4>
                        </div>
                    </div>
                    <div className="col-lg col-md-4 col-sm-4 col-6">
                        <div className="sector-icon">
                            <i className='fa fa-cogs'></i>
                            <h4>Infrastructure</h4>
                        </div>
                    </div>
                    <div className="col-lg col-md-4 col-sm-4 col-6">
                        <div className="sector-icon">
                            <i className='fa fa-handshake-o'></i>
                            <h4>Service</h4>
                        </div>
                    </div>
                    <div className="col-lg col-md-4 col-sm-4 col-6">
                        <div className="sector-icon">
                            <i className='fa fa-home'></i>
                            <h4>Real Estate</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sectors