import styles from './styles/Banner.module.css'

const Banner = ({backgroundImg, extraImg, shortText}) => {
    return (
        <section className={styles.bannerContainer}>
            <div className={styles.bannerImgDiv} style={{backgroundImage:`url(${backgroundImg})`}}>
                <div>
                    <p className={styles.paragraphOne}>
                        {shortText}
                    </p>
                    <p className={styles.paragraphTwo}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Non libero rem facilis perferendis nihil ad, eaque delectus dicta doloribus,
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