import { useEffect } from "react";
import styles from "./styles/Credentials.module.css"

import Banner from "./Banner";
import banner_9 from "../assets/banners/banner_9.jpg"
import banner_10 from "../assets/banners/banner_10.jpg"

//pictures
import image_1 from "../assets/transactions/canon.jpg"
import image_2 from "../assets/transactions/easeed.png"
import image_3 from "../assets/transactions/saruni.png"

import image_4 from "../assets/transactions/basecamp.png"
import image_5 from "../assets/transactions/godrej.jpg"
import image_6 from "../assets/transactions/zaad.png"
import image_7 from "../assets/transactions/maitri_m.png"



const Credentials = () => {

    useEffect(()=>{
        document.title = "Maitri Capital -  Credentials"
    })

    const text = "Providing expert investment and corporate advisory services in Africa"
    return (
        <div className={styles.credentialsCont}>
            <Banner backgroundImg={banner_10} extraImg={banner_9} mainText={text} />
            <div className={styles.credsTopDiv}>
                <h3>Transaction <span>Credentials</span></h3>
                <div></div>
            </div>
            <div className={styles.credsBottomDiv}>
                <div className="row">
                    <div className="col-12 col-lg-4 col-md-4" style={{marginTop:"10px"}}>
                        <div className={styles.innerHolder}>
                            <h2>
                                Kenya, Uganda, Tanzania <br /> 
                                <span>Kenya, Uganda, Tanzania</span>
                            </h2>
                            <img src={image_1} alt="" width={148} height={70} />
                            <div className={styles.transHolder}>
                                <p>
                                    Sale of Canon Chemicals Ltd to Godrej Consumer Products Ltd <br />
                                    <span>Text holder for balance</span>
                                </p>
                            </div>
                            <img src={image_5} alt="" width={148} height={70} />
                            <p>Maitri Capital acted as sole transaction advisor to Canon Chemicals</p>
                            <div className={styles.advisor}>
                                <div></div>
                                <img src={image_7} alt="" width={148} height={70} />
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-lg-4 col-md-4" style={{marginTop:"10px"}}>
                        <div className={styles.innerHolder}>
                            <h2>Kenya, Uganda, Tanzania, Zambia, Rwanda, Mauritius</h2>
                            <img src={image_2} alt="" width={148} height={70} />
                            <div className={styles.transHolder}>
                                <p>
                                    Sale of shareholding and growth capital in East African 
                                    Seed Ltd to / from Zaad Holding Ltd
                                </p>
                            </div>
                            <img src={image_6} alt="" width={148} height={70} />
                            <p>Maitri Capital acted as sole transaction advisor to East African Seed Ltd </p>
                            <div className={styles.advisor}>
                                <div></div>
                                <img src={image_7} alt="" width={148} height={70} />
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-lg-4 col-md-4" style={{marginTop:"10px"}}>
                        <div className={styles.innerHolder}>
                            <h2>Kenya, Uganda, Tanzania, Zambia, Rwanda, Mauritius</h2>
                            <img src={image_3} alt="" width={148} height={70} />
                            <div className={styles.transHolder}>
                                <p>
                                    Sale of Saruni Lodges to Basecamp Explorer<br /> 
                                    <span>Text Holder for balance</span>
                                </p>
                            </div>
                            <img src={image_4} alt="" width={148} height={70} />
                            <p>
                                Maitri Capital acted as sole transaction advisor to Saruni Lodge  <br />
                                <span>Text holder for balance</span>
                            </p>
                            <div className={styles.advisor}>
                                <div></div>
                                <img src={image_7} alt="" width={148} height={70} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
}

export default Credentials