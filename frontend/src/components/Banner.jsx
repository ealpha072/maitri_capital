import styles from './styles/Banner.module.css'

const Banner = ({backgroundImg, extraImg, mainText, shortText}) => {
    return (
        <section className={styles.bannerContainer}>
            <div className={styles.bannerImgDiv} style={{backgroundImage:`url(${backgroundImg})`}}>
                <div>
                    <p className={styles.paragraphOne}>
                        {mainText}
                    </p>
                    <p className={styles.paragraphTwo}>
                        {shortText}
                    </p>
                </div>
            </div>
            <div className={styles.bannerImgDivider}>

            </div>
            <div className={styles.bannerImgDivTwo} style={{backgroundImage:`url(${extraImg})`}}>

            </div>
        </section>
    )
}

export default Banner