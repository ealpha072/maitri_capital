import styles from './styles/Services.module.css'

const Research = () => {

    return (
        <div className={styles.researchServices}>
            <div className={styles.researchDetails}>
                <h3>Our Research Insights</h3>
                <p>
                    We are committed to providing clients with the insights they need 
                    to make informed decisions and achieve their goals.
                </p>
            </div>
            <div className={styles.researchHolder}>
                <div className="">
                    <div className="research-col">
                        <div className={styles.singleResearch}>
                            <h6>Maitri - Capital</h6>
                            <a href="/#">
                                <h5>Understanding the Kenyan Stratup Ecosystem Evolution</h5>
                            </a>
                            <p>
                                <span>February 3, 2023 - </span>A look at the evolution of the 
                                Kenyan Startup ecosystem for the past decade. 
                            </p>
                            <a href="/#" target="_blank" rel='noreferrer'>
                                <i className='fa fa-download'></i> Download...
                            </a>
                        </div>
                    </div>
                    <div className="research-col">
                        <div className={styles.singleResearch}>
                            <h6>Maitri - Capital</h6>
                            <h5>The Kenya Healthcare Market Insight</h5>
                            <p>
                                <span>February 3, 2023 - </span>A look at the evolution of the 
                                Kenyan Startup ecosystem for the past decade. 
                            </p>
                            <a href="/#" target="_blank" rel='noreferrer' >
                                <i className='fa fa-download'></i> Download...
                            </a>
                        </div>
                    </div>
                    <div className="research-col">
                        <div className={styles.singleResearch}>
                            <h6>Maitri - Capital</h6>
                            <h5>AMEF - Understanding Health Equipment Landscape in Kenya</h5>
                            <p>
                                <span>February 3, 2023 - </span>A deep dive into the Healthcare Device Market
                               in Kenya
                            </p>
                            <a href="/#" target="_blank" rel='noreferrer' >
                                <i className='fa fa-download'></i> Download...
                            </a>
                        </div>
                    </div>
                    <div className="research-col">
                        <div className={styles.singleResearch}>
                            <h6>Maitri - Capital</h6>
                            <h5>Understanding the Kenyan Stratup Ecosystem Evolution</h5>
                            <p>
                                <span>February 3, 2023 - </span>A look at the evolution of the 
                                Kenyan Startup ecosystem for the past decade
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Research