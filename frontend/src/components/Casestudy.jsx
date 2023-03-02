import { useEffect } from "react";

import { BuildCaseStudyDiv } from "./Services";
import styles from "./styles/Knowledge.module.css"

//BANNER
import Banner from "./Banner";
import banner_9 from "../assets/banners/banner_9.jpg"
import banner_10 from "../assets/banners/banner_10.jpg"
//IMAGES
import image_0 from "../assets/cases/aq.png"
import image_1 from "../assets/cases/at.png"
import image_2 from "../assets/cases/fp.png"
import image_3 from "../assets/cases/gb.png"
import image_4 from "../assets/cases/konza.png"
import image_5 from "../assets/cases/laik.jpg"
import image_6 from "../assets/cases/somo.jpg"
//DOCUMENTS
import document_1 from '../assets/documents/Africa\'s Talking - A_Case_Study_for_Understanding_Kenyan_Startup_Ecosystem.pdf'
import document_0 from '../assets/documents/Aquarech - A_Case_Study_for_Understanding_Kenyan_Startup_Ecosystem.pdf'
import document_2 from '../assets/documents/Flexpay - A_Case_Study_for_Understanding_Kenyan_Startup_Ecosystem.pdf'
import document_3 from '../assets/documents/Gearbox - A_Case_Study_for_Understanding_Kenyan_Startup_Ecosystem.pdf'
import document_4 from '../assets/documents/Konza Technopolis - A_Case_Study_for_Understanding_Kenyan_Startup_Ecosystem.pdf'
import document_5 from '../assets/documents/Laikipia County - A_Case_Study_for_Understanding_Kenyan_Startup_Ecosystem.pdf'
import document_6 from '../assets/documents/SOMO - A_Case_Study_for_Understanding_Kenyan_Startup_Ecosystem.pdf'

const Casestudy = () => {
    useEffect(()=>{
        document.title = "Maitri Capital -  Case Studies"
    })

    const imageDivsOne = [
        {
            source:image_0,
            heading:"Aquarech - A Case Study for Understanding Kenyan Startup Ecosystem",
            link:document_0,
            ytLink:"https://www.youtube.com/embed/7GpYyXiyX1A?"
        },
        {
            source:image_1,
            heading:"Africa's Talking - A Case Study for Understanding Kenyan Startup Ecosystem",
            link:document_1,
            ytLink:"https://youtube.com/embed/SNpGMsPiZZE/"
        },
        {
            source:image_3,
            heading:"Gearbox - A Case Study for Understanding Kenyan Startup Ecosystem",
            link:document_3,
            ytLink:"https://youtube.com/embed/BlaE5UzHbk4"
        },
    ]

    const imageDivsTwo = [
        {
            source:image_2,
            heading:"Flexpay - A Case Study for Understanding Kenyan Startup Ecosystem",
            link:document_2,
        },
        {
            source:image_4,
            heading:"Konza Technopolis - A Case Study for Understanding Kenyan Startup Ecosystem",
            link:document_4
        },
        {
            source:image_5,
            heading:"Laikipia County - A Case Study for Understanding Kenyan Startup Ecosystem",
            link:document_5
        }
    ]

    const imageDivsThree = [
        {
            source:image_6,
            heading:"SOMO - A Case Study for Understanding Kenyan Startup Ecosystem",
            link:document_6,
            ytLink:"https://youtube.com/embed/QHClCPXHywY"
        },
        {
            source:image_6,
            heading:"Antler - A Case Study for Understanding Kenyan Startup Ecosystem",
            ytLink:"https://youtube.com/embed/6aS38yZ-yAw"
        },
        {
            source:image_6,
            heading:"NSE - A Case Study for Understanding Kenyan Startup Ecosystem",
            ytLink:"https://youtube.com/embed/8MrYNl8OxwY"
        },

    ]

    const imageDivsFour = [
        {
            source:image_6,
            heading:"Jessica Colaco - Co-founder iHub and Brave",
            ytLink:"https://youtube.com/embed/GgGgR4Lr5HU"
        }
    ]

    const text = "Diversified Knowledge"
    return (
        <div className="knowledgeContainer">
            <Banner backgroundImg={banner_10} extraImg={banner_9}  mainText={text} />
            <div className={styles.knowledgeHead}>
                <h3>Case Studies </h3>
            </div>
            <div className={styles.knowledgeMain}>
                <div className={styles.dividerDiv}></div>
                <div className="row">
                   {
                        imageDivsOne.map((img, index) => (
                            <BuildCaseStudyDiv caseDetails={img} styles={styles.infoHolder} key={index} />
                        ))
                   }
                </div>
                <div className="row">
                   
                   {
                        imageDivsThree.map((img, index) => (
                            <BuildCaseStudyDiv caseDetails={img} styles={styles.infoHolder} key={index} />
                        ))
                   }
                  
                </div>
                <div className="row">
                   {
                        imageDivsTwo.map((img, index) => (
                            <BuildCaseStudyDiv caseDetails={img} styles={styles.infoHolder} key={index} />
                        ))
                   }
                </div>
                <div className="row">
                   {
                        imageDivsFour.map((img, index) => (
                            <BuildCaseStudyDiv caseDetails={img} styles={styles.infoHolder} key={index} />
                        ))
                   }
                </div>
            </div>
        </div>
    )
}

export default Casestudy