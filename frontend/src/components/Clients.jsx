import { useEffect } from "react";
import Banner from "./Banner";
import styles from './styles/Services.module.css'

//import sm_banner from '../assets/images/banner_1.jpg'
import banner_11 from "../assets/banners/banner_11.jpg"
import banner_12 from "../assets/images/img_three.jpg"


const Clients = () => {

    useEffect(()=>{
        document.title = "Maitri Capital -  Our Clients"
    })

    const text = "Serving Clients Accross Africa"
    return (
        <div className="mg-tp">
            <Banner backgroundImg={banner_11} extraImg={banner_12}  mainText={text} />
            <div className="about-top">
                <p className="front-p" style={{paddingLeft:'0px'}}>Our Services</p>
                <p className="p-about" style={{paddingLeft:'0px'}}>
                    We offer a range of investment and corporate 
                    advisory services to help our clients succeed in the complex and dynamic African market.
                </p>
            </div>
            {/* <div className={styles.diverse}>
                <div className="diver-holder">
                    <p className="front-p">Divestitures</p>
                    <p className="">
                        With our deep expertise in the African market and our unwavering commitment to our clients, 
                        Maitri Capital is a trusted partner for investors looking to succeed in this dynamic and fast-paced market.
                    </p>
                </div>
                <div className="diver-img">
                    <img src={sm_banner} alt="" />
                </div>
            </div> */}
            <div className={styles.services}>
                <div>
                    <h4>Investment Advisory</h4>
                    <p>
                        We offer a wide range of advisory services, including Mergers and Acquisitions, 
                        Capital Raising, Private Placement, Valuation, Due Diligence, Capital Structure and 
                        Restructuring, and Investment Research. Our team of experienced advisors has deep knowledge 
                        of the African market, and we work closely with our clients 
                        to develop customized investment strategies that meet their specific goals and objectives.
                    </p>
                </div>
                <div>
                    <h4>Corporate Advisory</h4>
                    <p>
                    Whether our clients are looking to grow their business, optimize their operations, 
                    or address specific challenges, our team has the expertise to help them succeed. 
                    We provide end-to-end support throughout the corporate advisory process, 
                    from identifying opportunities and developing strategies to executing plans and achieving results. 
                    Our team also provides comprehensive financial management and board advisory 
                    services, helping our clients to make informed decisions and achieve their long-term goals.
                    </p>
                </div>
                <div>
                    <h4>Research & Data Insights</h4>
                    <p>
                        Our team of expert analysts leverages cutting-edge technology and
                        sophisticated data-driven methodologies to deliver in-depth insights
                        that inform and drive your business decisions. Whether you need to
                        monitor market trends, understand consumer behavior, or gain a
                        competitive edge, we have the tools and expertise to help you succeed.
                        With a focus on delivering actionable insights and a commitment to
                        accuracy and precision.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Clients