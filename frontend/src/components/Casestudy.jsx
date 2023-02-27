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
import document_1 from '../assets/documents/Africa\'s Talking - A Case Study for Understanding Kenyan Startup Ecosystem.pdf'
import document_0 from '../assets/documents/Aquarech - A Case Study for Understanding Kenyan Startup Ecosystem (2).pdf'
import document_2 from '../assets/documents/Flexpay - A Case Study for Understanding Kenyan Startup Ecosystem.pdf'
import document_3 from '../assets/documents/Gearbox - A Case Study for Understanding Kenyan Startup Ecosystem (2).pdf'
import document_4 from '../assets/documents/Konza Technopolis - A Case Study for Understanding Kenyan Startup Ecosystem.pdf'
import document_5 from '../assets/documents/Laikipia County and the Startup Ecosystem - A Case Study for Understanding Kenyan Startup Ecosystem (3).pdf'
import document_6 from '../assets/documents/SOMO - A Case Study for Understanding Kenyan Startup Ecosystem (1).pdf'


const Casestudy = () => {

    const imageDivsOne = [
        {
            source:image_0,
            heading:"Aquarech - A Case Study for Understanding Kenyan Startup Ecosystem",
            link:document_0,
            ytLink:"https://www.youtube.com/watch?v=7GpYyXiyX1A"
        },
        {
            source:image_1,
            heading:"Africa's Talking - A Case Study for Understanding Kenyan Startup Ecosystem",
            link:document_1,
            ytLink:"https://youtu.be/SNpGMsPiZZE"
        },
        {
            source:image_2,
            heading:"Flexpay - A Case Study for Understanding Kenyan Startup Ecosystem",
            link:document_2,
            ytLink:""
        },
    ]

    const imageDivsTwo = [
        {
            source:image_3,
            heading:"Gearbox - A Case Study for Understanding Kenyan Startup Ecosystem",
            link:document_3,
            ytLink:"https://youtu.be/BlaE5UzHbk4"
        },
        {
            source:image_4,
            heading:"Konza Technopolis - A Case Study for Understanding Kenyan Startup Ecosystem",
            link:document_4
        },
        {
            source:image_5,
            heading:"Laikipia County and the Startup Ecosystem - A Case Study for Understanding Kenyan Startup Ecosystem",
            link:document_5
        }
    ]

    const imageDivsThree = [
        {
            source:image_6,
            heading:"SOMO - A Case Study for Understanding Kenyan Startup Ecosystem",
            link:document_6,
            ytLink:"https://youtu.be/QHClCPXHywY"
        }
    ]

    const text = "Diversified Knowledge"
    return (
        <div className="knowledgeContainer">
            <Banner backgroundImg={banner_10} extraImg={banner_9}  shortText={text} />
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
                        imageDivsTwo.map((img, index) => (
                            <BuildCaseStudyDiv caseDetails={img} styles={styles.infoHolder} key={index} />
                        ))
                   }
                </div>
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-4" style={{visibility:"hidden"}}></div>
                   {
                        imageDivsThree.map((img, index) => (
                            <BuildCaseStudyDiv caseDetails={img} styles={styles.infoHolder} key={index} />
                        ))
                   }
                   <div className="col-12 col-md-6 col-lg-4" style={{visibility:"hidden"}}></div>
                </div>
            </div>
        </div>
    )
}

export default Casestudy