import styles from "./styles/Credentials.module.css"

import Banner from "./Banner";
import banner_9 from "../assets/banners/banner_9.jpg"
import banner_10 from "../assets/banners/banner_10.jpg"

//pictures
import image_1 from "../assets/transactions/canon.jpg"
import image_2 from "../assets/transactions/easeed.png"
import image_3 from "../assets/transactions/saruni.png"

const Credentials = () => {
   const text = "Providing expert investment and corporate advisory services in Africa"
    return (
        <div className={styles.credentialsCont}>
            <Banner backgroundImg={banner_10} extraImg={banner_9} shortText={text} />
            <div className={styles.credsTopDiv}>
                <h3>Transaction <span>Credentials</span></h3>
                <div></div>
            </div>
            <div className={styles.credsBottomDiv}>
                <div className="row">
                    <div className="col">
                        <div className={styles.innerHolder}>
                            <img src={image_1} alt="" width={148} height={70} />
                            <div className={styles.transHolder}>
                                <h3>Cannon <br /> Chemicals</h3>
                                <p>Sale of Cannon Chemicals</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className={styles.innerHolder}>
                            <img src={image_2} alt="" width={148} height={70} />
                            <div className={styles.transHolder}>
                                <h3>East African Seed Company</h3>
                                <p>Sale of EASEED</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className={styles.innerHolder}>
                            <img src={image_3} alt="" width={148} height={70} />
                            <div className={styles.transHolder}>
                                <h3>Saruni <br /> Lodges</h3>
                                <p>Sale of Saruni Lodge</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
}

export default Credentials