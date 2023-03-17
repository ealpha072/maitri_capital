import React from 'react'
import {Services} from './Services'
import styles from './styles/Footer.module.css'

const Footer = () => {
    const inv_adv = [
        "Mergers and Acquisitions",
        "Capital Raising",
        "Private Placement",
        "Valuation",
        "Due Diligence",
        "Capital Structure and Restructuring",
        "Investment Research"
    ]
    const cop_adv = [
        "Financial Modelling",
        "Business Plan",
        "Strategic Reviews",
        "Feasibility Studies",
        "Family Business Advisory",
        "CFO and Financial Management",
        "Board Advisory"
    ]
    const research = [
        "Market Research",
        "Surveys",
        "Market Entry"
    ]
    const cl_investors = [
        "Private Equity Funds",
        "Venture Capital Funds",
        "Development Finance Institutions",
        "Foundations",
        "Family Offices",
        "HNWIs",
        "Accelerators & Incubators"
    ]
    const cl_comps = [
        "Listed Companies",
        "Family Businesses",
        "Multi National Corporations (MNCs) ",
        "Startups",
        "SMEs"
    ]
    const cl_inst = [ 
        "Policy Makers",
        "NGOs",
        "Think Tanks"
    ]
    const industrycoverage = [
        "Agriculture","Education","Financial Services","Health",
        "Hospitality","ICT","Infrastructure","Manufacturing","Power & Clean Energy",
        "Real Estate","Services"
    ]
    const aboutus = [
        "Our Story","Team","What Differentiates Us",
        "Our Values","Our Projects","Knowledge","Careers"
    ]

  return (
    <div>
        <footer className={styles.footer}>
            <div className="row">
                <div className='col-lg-2 col-md-4 col-sm-6 col-xs-12 footer-services footer-div'>
                        <h6>Our Services</h6>
                        <div className="services-ul">
                            <h5>Investment Advisory</h5>
                            <Services service_array={inv_adv}/>
                            <h5>Corporate Advisory</h5>
                            <Services service_array={cop_adv}/>
                            <h5>Research</h5>
                            <Services service_array={research}/>
                        </div>
                </div>
                <div className='col-lg-2 col-md-4 col-sm-6 col-xs-12 footer-clients footer-div'>
                    <h6>Clients We Serve</h6>
                    <div className='clients-ul'>
                        <h5>Investors</h5>
                        <Services service_array={cl_investors } />
                        <h5>Companies & Entrepreneurs</h5>
                        <Services service_array={cl_comps} />
                        <h5>Institutional</h5>
                        <Services service_array={cl_inst } />
                    </div>
                </div>
                <div className='col-lg-2 col-md-4 col-sm-6 col-xs-12 footer-industrycoverage footer-div'>
                    <h6>Industry Coverage</h6>
                    <div className="industry-ul">
                        <Services service_array={ industrycoverage } />
                    </div>
                </div>
                <div className='col-lg-2 col-md-4 col-sm-6 col-xs-12 footer-aboutus footer-div'>
                    <h6>About Us</h6>
                    <div className="about-ul">
                        <Services service_array={ aboutus } />
                    </div>
                </div>
                <div className='col-lg-2 col-md-4 col-sm-6 col-xs-12 footer-news footer-div'>
                    <h6>News</h6>
                    <p>Subscribe to our latest news and insights</p>
                    <button className='btn btn-primary'>Subscribe Now</button>
                </div>
                <div className={`col-lg-2 col-md-4 col-sm-6 col-xs-12 footer-div ${styles.footerSocials}`}>
                    <h6>Follow</h6>
                    <ul className={styles.list}>
                        <li><a href="mailto:info@maitri-group.com"><i className='fa fa-envelope fa-xl'></i></a></li>
                        <li><a href="https://twitter.com/maitricapital?lang=en" target="_blank" rel="noreferrer"><i className='fa fa-twitter'></i></a></li>
                        <li><a href="https://www.linkedin.com/company/maitricapitalltd/"  target="_blank" rel="noreferrer"><i className='fa fa-linkedin'></i></a></li>
                        <li><a href="tel:+254736920222"><i className='fa fa-phone'></i></a></li>
                    </ul>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer