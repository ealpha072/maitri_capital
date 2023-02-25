
import styles from "./styles/About.module.css"

import Banner from "./Banner";
import banner_9 from "../assets/banners/banner_9.jpg"
import banner_10 from "../assets/banners/banner_10.jpg"

const About = () => {
   const text = "Providing expert investment and corporate advisory services in Africa"
    return (
        <div className="about-container">
            <Banner backgroundImg={banner_10} extraImg={banner_9} shortText={text} />
            <div className="about-top d-flex">
                <div className="about-p">
                    <p className="front-p">About Us</p>
                    <p className="p-about">
                        Welcome to Maitri Capital, your trusted partner in investment and 
                        corporate advisory services in Africa. With over 6 years of experience, 
                        we have established ourselves as a leading provider of investment solutions 
                        and research services in the region.
                    </p>
                    <p className="p-about">
                        Our team of experts is dedicated to providing you with tailor-made solutions 
                        that meet your unique needs. We understand that every business is different, 
                        and we take the time to understand your business goals and aspirations. 
                    </p>
                </div>
                <div className={styles.foundingYear}>
                    <p className="front-p">2016</p>
                    <p className='core-ind'>Founded and led by same Team</p>
                    <button className="btn btn-primary"> <i className='fa fa-download'></i> Company Brochure</button>
                </div>
            </div>

            <div className={styles.aboutBottom}>
                <div>
                    <div className={styles.aboutLeft}>
                        <p className="front-p">What makes us different</p>
                        <ul>
                            <li>We are committed to excellence and customer satisfaction. 
                                Our team is dedicated to providing the highest level of service and support to our clients.</li>
                            <li>We have established long-standing relationships with our clients and partners in the African market. 
                                We are committed to building lasting partnerships based on trust, respect, and mutual benefit. </li>
                            <li>Our team has a deep understanding of the African market, and we leverage our local expertise to provide 
                                tailor-made solutions that meet the unique needs of our clients. 
                            </li>
                        </ul>
                    </div>
                    <div className={styles.aboutRight}>
                        <p>
                            "We offer unparalleled expertise to help investors succeed in the dynamic and fast-paced African investment landscape"
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.storyLine}>
                <div>
                    <p className="">Our Story</p>
                    <p>
                        <strong>[Maitri Capital]</strong> was founded in 2016 by two partners who shared a passion for investing in Africa. 
                        At the time, the African investment landscape was full of challenges and opportunities, and the founders 
                        saw an opportunity to create a firm that could help investors navigate these challenges and capitalize on the opportunities.
                        Today, [Company Name] has grown into a leading provider of investment and corporate advisory services in Africa. 
                        We have a team of experts who are dedicated to providing our clients with the highest level of service and support, 
                        and we have established long-standing relationships with our clients and partners across the region.
                    </p>
                    <p>
                        The firm's focus on research and local expertise helped it stand out 
                        in a crowded market, and it quickly became known as a go-to firm for investors looking to enter or expand in Africa.
                    </p>
                    <p>
                        Despite our growth, we remain committed to our founding principles of local expertise, 
                        research capabilities, commitment to excellence, and long-standing relationships. 
                        We believe that these principles are the key to our success, and we will continue to 
                        uphold them as we grow and expand in the years to come.
                    </p>
                </div>
            </div>
        </div>
  );
}

export default About