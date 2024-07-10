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

    const text = "Serving Clients Across Africa"
    return (
        <div className="mg-tp">
            <Banner backgroundImg={banner_11} extraImg={banner_12}  mainText={text} />
            <div className="about-top">
                <p className="front-p" style={{paddingLeft:'0px'}}>Our Clients</p>
                <p className="p-about" style={{paddingLeft:'0px'}}>
                    We take great pride in the relationships we have built with our diverse clientele, 
                    which includes investors, companies, entrepreneurs, and institutions. We understand 
                    that each of these groups has unique needs and goals, and we are committed to providing 
                    personalized and tailored solutions to help them achieve their objectives.
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
                    <h4>Investors</h4>
                    <p>
                        Investors form a crucial part of our clientele, and we take pride in the range of 
                        services we offer to meet their unique investment needs. Our investor clients include 
                        private equity funds, venture capital funds, development finance institutions, foundations, 
                        family offices, high-net-worth individuals (HNWIs), accelerators, and incubators. 
                        We offer a range of services including deal sourcing, due diligence, valuation, and 
                        portfolio management. We have a deep understanding of the private equity landscape and 
                        leverage our extensive network to identify high-quality investment opportunities that meet 
                        our clients' objectives.
                    </p>
                </div>
                <div>
                    <h4>Companies & Entrepreneurs</h4>
                    <p>
                        Our client base includes listed companies, family businesses, multinational corporations (MNCs), 
                        startups, and small and medium-sized enterprises (SMEs). we offer a range of advisory services 
                        including succession planning, family governance, and business valuation. We have a deep understanding 
                        of the complexities of doing business across borders and leverage our extensive global network to help 
                        our clients navigate local regulations and customs. For startups, we offer a range of services including 
                        mentorship, fundraising, and business model optimization. We understand the unique challenges facing 
                        small and medium-sized businesses and work closely with our clients to help them achieve their financial 
                        and strategic objectives.
                    </p>
                </div>
                <div>
                    <h4>Institutional</h4>
                    <p>
                        At our company, we are proud to work with a diverse group of institutional clients, including policy 
                        makers, NGOs, and think tanks. Our institutional services are designed to meet the unique needs and 
                        objectives of each of these clients, helping them to achieve their missions and make a positive impact 
                        in the world. we also offer a range of support services to help our institutional clients achieve their 
                        objectives. These include training and capacity building, stakeholder engagement, and communication support. 
                        We believe that by working closely with our institutional clients and providing them with the tools and 
                        support they need to succeed, we can help them make a positive impact in the world and achieve their missions.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Clients