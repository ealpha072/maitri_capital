import { useEffect } from "react";

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

//DOCUMENTS
import document_two from "../assets/knowledge/COVID-19 Vaccination Status in Africa_Maitri Capital_Feb 2021_Final.pdf"
import document_six from "../assets/knowledge/Maitri Capital_Kenya_Retail Sector_Final_2020.jpg"
import document_three from "../assets/knowledge/IMPACT OF COVID-19 ON KENYA'S FINANCIAL MARKETS BY MAITRI CAPITAL.pdf"
import document_eight from "../assets/knowledge/Maitri Capital_Kenyan E-commerce Startups final_2020.jpg"
import document_four from "../assets/knowledge/Maitri Capital's 50 Global Inspirational Women of 2020.pdf"
import document_nine from "../assets/knowledge/Maitri Capital_Why Investors Choose East Africa_Final.png"
import document_five from "../assets/knowledge/Maitri Capital_COVID in EA Overview_Final.pdf"
import document_one from "../assets/knowledge/Understanding the Kenyan Startup Ecosystem Report Final.pdf"
import document_seven from "../assets/knowledge/Maitri Capital_Kenya Labor Force Infographic_Final.png"

const Knowledge = () => {
    useEffect(()=>{
        document.title = "Maitri Capital -  Knowledge"
    })

    const imagesOne = [
        {
            source:image_one,
            date:"MARCH 2023",
            heading:"Understanding The Kenyan Startup Ecosystem",
            smallText:"A look at the evolution of the Kenyan Startup Ecosystem",
            link:document_one,
            moreMaterials:"case_studies"
        },
        {
            source:image_two,
            date:"FEBRUARY 2021",
            heading:"State of COVID-19 Vaccination and Africa",
            smallText:"A look at the evolution of the Kenyan Startup Ecosystem",
            link:document_two
        },
        {
            source:image_five,
            date:"MARCH 2020",
            heading:"Status and Safety Measures of COVID-19 in East Africa",
            smallText:"A look at the evolution of the Kenyan Startup Ecosystem",
            link:document_five
        },
    ]

    const imagesTwo = [
        {
            source:image_eight,
            date:"MARCH 2020",
            heading:"Kenyan B2C E-commerce Landscape",
            smallText:"A look at the evolution of the Kenyan Startup Ecosystem",
            link:document_eight
        },
        {
            source:image_nine,
            date:"MARCH 2020",
            heading:"Why investors Choose East Africa",
            smallText:"A look at the evolution of the Kenyan Startup Ecosystem",
            link:document_nine
        },
        {
            source:image_seven,
            date:"MAY 2020",
            heading:"The Kenyan Labor Market Dynamics",
            smallText:"A look at the evolution of the Kenyan Startup Ecosystem",
            link:document_seven
        }
    ]

    const imagesThree = [
        {
            source:image_three,
            date:"MAY 2020",
            heading:" COVID-19 & The Kenyan Financial Markets",
            smallText:"A look at the evolution of the Kenyan Startup Ecosystem",
            link:document_three
        },
        {
            source:image_six,
            date:"SEPTEMBER 2020",
            heading:" The $7.3B Kenyan Retail Market",
            smallText:"A look at the evolution of the Kenyan Startup Ecosystem",
            link:document_six
        },
        {
            source:image_four,
            date:"DECEMBER 2020",
            heading:"50 Women worldwide who inspired us in 2020",
            smallText:"A look at the evolution of the Kenyan Startup Ecosystem",
            link:document_four
        }
    ]

    const text = "Diversified Knowledge"
    return (
        <div className="knowledgeContainer">
            <Banner backgroundImg={banner_10} extraImg={banner_9}  mainText={text} />
            <div className={styles.knowledgeHead}>
                <h3>Knowledge </h3>
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
                            <BuildCard 
                                img_details={ image } 
                                styles= {styles.infoHolder} 
                                key={index} 
                            />
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