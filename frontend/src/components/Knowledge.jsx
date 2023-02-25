import { BuildCard } from "./Services";
import styles from "./styles/Knowledge.module.css"

//BANNER
import Banner from "./Banner";
import banner_9 from "../assets/banners/banner_9.jpg"
import banner_10 from "../assets/banners/banner_10.jpg"
//IMAGES
import image_one from "../assets/screens/startups.png"
import image_two from "../assets/screens/covid.png"
import image_three from "../assets/screens/covid_kenya_markets.png"
import image_four from "../assets/screens/women.png"
import image_five from "../assets/screens/covid_east_africa.png"
import image_six from "../assets/screens/retail_sector_kenya.png"
import image_seven from "../assets/screens/labor_markets_kenya.png"
import image_eight from "../assets/screens/ecommerce_landscape.png"
import image_nine from "../assets/screens/investors.png"

// import knowledgeImg from "../assets/images/knowledge_banner.png"

const Knowledge = () => {
    const imagesOne = [
        {
            source:image_one,
            date:"MARCH 2023",
            heading:"Understanding The Kenyan Startup Ecosystem",
            smallText:"A look at the evolution of the Kenyan Startup Ecosystem"
        },
        {
            source:image_two,
            date:"FEBRUARY 2021",
            heading:"State of COVID-19 Vaccination and Africa",
            smallText:"A look at the evolution of the Kenyan Startup Ecosystem"
        },
        {
            source:image_five,
            date:"MARCH 2020",
            heading:"Status and Safety Measures of COVID-19 in East Africa",
            smallText:"A look at the evolution of the Kenyan Startup Ecosystem"
        },
    ]

    const imagesTwo = [
        {
            source:image_eight,
            date:"MARCH 2020",
            heading:"Kenyan B2C E-commerce Landscape",
            smallText:"A look at the evolution of the Kenyan Startup Ecosystem"
        },
        {
            source:image_nine,
            date:"MARCH 2020",
            heading:"Why investors Choose East Africa",
            smallText:"A look at the evolution of the Kenyan Startup Ecosystem"
        },
        {
            source:image_seven,
            date:"MAY 2020",
            heading:"The Kenyan Labor Market Dynamics",
            smallText:"A look at the evolution of the Kenyan Startup Ecosystem"
        }
    ]

    const imagesThree = [
        {
            source:image_three,
            date:"MAY 2020",
            heading:" COVID-19 & The Kenyan Financial Markets",
            smallText:"A look at the evolution of the Kenyan Startup Ecosystem"
        },
        {
            source:image_six,
            date:"SEPTEMBER 2020",
            heading:" The $7.3B Kenyan Retail Market",
            smallText:"A look at the evolution of the Kenyan Startup Ecosystem"
        },
        {
            source:image_four,
            date:"DECEMBER 2020",
            heading:"50 Women worldwide who inspired us in 2020",
            smallText:"A look at the evolution of the Kenyan Startup Ecosystem"
        }
    ]

    const text = "Diversified Knowledge"
    return (
        <div className="knowledgeContainer">
            <Banner backgroundImg={banner_10} extraImg={banner_9}  shortText={text} />
            <div className={styles.knowledgeTop}>
                <p>
                    Knowledge
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Accusamus placeat vitae cupiditate ratione mollitia id aliquid ad, 
                    distinctio animi recusandae quo nisi doloribus magni nihil at nostrum voluptatibus nulla voluptas.
                </p>
            </div>
            <div className="knowledgeWords">
                <div className={styles.wordsCont}>
                    <h3>Our Previous Work</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, 
                        adipisicing elit. Neque necessitatibus eius eveniet 
                        nobis illum eum ipsum beatae adipisci sequi aspernatur 
                        obcaecati eos placeat esse provident optio quasi, possimus 
                        incidunt repellat.
                    </p>
                </div>
            </div>
            <div className={styles.knowledgeMain}>
                <div className={styles.dividerDiv}></div>
                <div className="row">
                    {
                        imagesOne.map((image, index) => (
                            <BuildCard img_details={ image } styles={styles.infoHolder} key={index} />
                        ))
                    }
                </div>
                <div className="row">
                    {
                        imagesTwo.map((image, index) => (
                            <BuildCard img_details={ image } styles={styles.infoHolder} key={index} />
                        ))
                    }
                </div>
                <div className="row">
                    {
                        imagesThree.map((image, index) => (
                            <BuildCard img_details={ image } styles={styles.infoHolder} key={index} />
                        ))
                    }
                </div> 
            </div>
        </div>
  );
}

export default Knowledge