import { useEffect } from 'react';

import Banner from './Banner';
import styles from './styles/Team.module.css'

import neha from '../assets/images/neha.png'
import poonam from '../assets/images/poonam.png'
import banner_12 from "../assets/banners/banner_12.jpg"
import banner_13 from "../assets/images/img_three.jpg"

const Team = () => {
    useEffect(()=>{
        document.title = "Maitri Capital - Team"
    })

    const text = "A Proffesional Team Dedicated to Excellence"
    return (
        <div className="teams">
            <Banner backgroundImg={banner_12} extraImg={banner_13} mainText={text} />
            <div className="sector-brief about-top d-flex">
                <div className="sector-expl about-p">
                    <p className="front-p">Team</p>
                    <p className="p-about" style={{textAlign:"justify"}}>
                        Maitri Capital was founded by Poonam Vora and Neha Shah on the 
                        belief that infusing capital, talent, and know-how into local African 
                        companies can result in long-term economic development in their respective 
                        countries and across Africa. They wanted to shift the perception of finance from 
                        one of fierce competition in which the provider of capital wins to one in which 
                        everyone wins - one that is inclusive, sustainable, and equitable.
                    </p>
                    <p className="p-about" style={{textAlign:"justify"}}>
                        The team is supplemented with professionally qualified members 
                        from a wide range of diverse backgrounds in Africa and beyond. 
                        Each member is committed to building long-term value for our 
                        clients and driven by a passion for Africa. This is translated 
                        into every relationship with our clients through integrity, 
                        expert advice and going above and beyond.
                    </p>
                </div>
            </div>

            <div className={styles.founderDiv}>
                <div className={styles.founderDivInner}>
                    <div className={styles.teamPics}>
                        <div className={styles.teamDetails}>
                            <a href="https://www.linkedin.com/in/neha-shah-a057b31/" target="blank" rel="noreferrer">
                                <img src={neha} alt="" width={110} />
                            </a>
                            <p className="team-title">Co-Founder, <br /> Managing Director</p>
                        </div>
                        <div className={styles.founderHolder}>
                            <p>Neha Shah</p>
                            <p>
                                Neha has over 20 years of experience in Private Equity, Corporate Finance, M&A, 
                                Transaction Services, Research, Accounting, Tax and Advisory services. 
                                Neha has worked extensively in African private equity and investment banking for 
                                several leading global organizations. She also spent considerable time on the ground, 
                                leading the transformation of the family business in African financial services in Kenya.  
                            </p>
                            <p>
                                She began her career with KPMG in London, where she trained as a Chartered Accountant (ICAEW).
                                She then worked in investment banking for Lexicon Partners (now Evercore Partners), an award-winning 
                                UK energy and infrastructure team, as well as Dresdner Kleinwort's UK M&A team (now Commerzbank). 
                                Following that, Neha worked with Norfund, an emerging markets Development Finance Institute backed by 
                                the Norwegian Government, focusing on principal investments in Eastern Africa; as well as Actis, 
                                one of the largest emerging markets private equity funds, where she focused on Energy and 
                                Infrastructure investments, especially in Africa.
                            </p>
                            <p>
                                Neha is also a co-founder at Rafiki Ventures, 
                                a venture investment company. Neha holds a Master’s degree in Economics from the University of 
                                Cambridge and also holds an MBA from INSEAD. Neha was named one of the "Top 40 Under 40 women" by the Business Daily in Kenya. 
                                Neha was a member of Investor’s Circle’s Global Health Advisory Board, one of the largest impact 
                                investor networks, where she advised on global healthcare opportunities, including in Africa. 
                                She was also a member of the Economic Council of Oshwals’ in Kenya. She sits on the board of several 
                                privately owned businesses in Africa and the UK.
                            </p>
                        </div>
                    </div>

                    <div className={styles.teamPics}>
                        <div className={styles.teamDetails}>
                            
                            <a 
                                href='https://www.linkedin.com/in/poonam-vora-547b9242/?originalSubdomain=ke' 
                                target="blank"
                                rel="noreferrer"
                            >
                                <img src={poonam} alt="" width={110} />
                            </a>
                            <p className="team-title">Co-Founder, <br /> Managing Director</p>
                        </div>
                        <div className={styles.founderHolder}>
                            <p>Poonam Vora</p>
                            <p>
                                Poonam has over 20 years of experience in Corporate Finance,
                                M&A, Transaction Services, Research and Advisory services.
                                She began her career as an Actuarial Analyst with Alexander Forbes 
                                Financial Services (thereafter renamed to Zamara Financial Services) 
                                after obtaining a degree in Actuarial Science from City University (UK). 
                            </p>
                            <p>
                                She has gained significant experience in the 
                                pensions and insurance (general and healthcare) industries in Kenya. 
                                This experience was augmented in the UK as a Protection Product and Deputy Investment Manager 
                                at Bradford & Bingley's. She also has over 10 years experience in 
                                Corporate Finance, Advisory, and Research where and has been involved in some of the largest IPOs in Kenya, 
                                including KenyaRe and Safaricom, and a boutique advisory firm where she was 
                                instrumental in deal sourcing, conducting due diligence, leading research, 
                                and a key member of the deal advisory team. 
                            </p>
                            <p>
                                She is also the co-founder of Rafiki Ventures, a venture investment company. 
                                Poonam is also an active angel investor in startups in Africa. Poonam sits on the 
                                Board of Directors of Jubilee Financial Services Limited, and is a fund manager for 
                                several institutions.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className={styles.founderHolder}>
                <div>
                    <p>Neha Shah</p>
                    <p>
                        Neha has over 20 years of experience in Private Equity, Corporate Finance, M&A, 
                        Transaction Services, Research, Accounting, Tax and Advisory services. 
                        Neha has worked extensively in African private equity and investment banking for 
                        several leading global organizations. She also spent considerable time on the ground, 
                        leading the transformation of the family business in African financial services in Kenya.  
                    </p>
                    <p>
                        She began her career with KPMG in London, where she trained as a Chartered Accountant (ICAEW).
                        She then worked in investment banking for Lexicon Partners (now Evercore Partners), an award-winning 
                        UK energy and infrastructure team, as well as Dresdner Kleinwort's UK M&A team (now Commerzbank). 
                        Following that, Neha worked with Norfund, an emerging markets Development Finance Institute backed by 
                        the Norwegian Government, focusing on principal investments in Eastern Africa; as well as Actis, 
                        one of the largest emerging markets private equity funds, where she focused on Energy and 
                        Infrastructure investments, especially in Africa.
                    </p>
                    <p>
                        Neha is also a co-founder at Rafiki Ventures, 
                        a venture investment company. Neha holds a Master’s degree in Economics from the University of 
                        Cambridge and also holds an MBA from INSEAD. Neha was named one of the "Top 40 Under 40 women" by the Business Daily in Kenya. 
                        Neha was a member of Investor’s Circle’s Global Health Advisory Board, one of the largest impact 
                        investor networks, where she advised on global healthcare opportunities, including in Africa. 
                        She was also a member of the Economic Council of Oshwals’ in Kenya. She sits on the board of several 
                        privately owned businesses in Africa and the UK.
                    </p>
                </div>

                <div>
                    <p>Poonam Vora</p>
                    <p>
                        Poonam has over 20 years of experience in Corporate Finance,
                        M&A, Transaction Services, Research and Advisory services.
                        She began her career as an Actuarial Analyst with Alexander Forbes 
                        Financial Services (thereafter renamed to Zamara Financial Services) 
                        after obtaining a degree in Actuarial Science from City University (UK). 
                    </p>
                    <p>
                        She has gained significant experience in the 
                        pensions and insurance (general and healthcare) industries in Kenya. 
                        This experience was augmented in the UK as a Protection Product and Deputy Investment Manager 
                        at Bradford & Bingley's. She also has over 10 years experience in 
                        Corporate Finance, Advisory, and Research where and has been involved in some of the largest IPOs in Kenya, 
                        including KenyaRe and Safaricom, and a boutique advisory firm where she was 
                        instrumental in deal sourcing, conducting due diligence, leading research, 
                        and a key member of the deal advisory team. 
                    </p>
                    <p>
                        She is also the co-founder of Rafiki Ventures, a venture investment company. 
                        Poonam is also an active angel investor in startups in Africa. Poonam sits on the 
                        Board of Directors of Jubilee Financial Services Limited, and is a fund manager for 
                        several institutions.
                    </p>
                </div>
            </div> */}
        </div>
  );
}

export default Team