import { useEffect } from "react";

import styles from "./styles/Knowledge.module.css"
import styles_awi from "./styles/Awi.module.css"

//BANNER
import Banner from "./Banner";
import banner_9 from "../assets/banners/banner_9.jpg"
import banner_10 from "../assets/banners/banner_10.jpg"

import full_report_link from "../assets/knowledge/Unlocking_Capital_for_IVMs_in_Africa_Research_Report.pdf"
import case_study_link from "../assets/knowledge/Unlocking_Capital_for_IVMs_in_Africa_Research_Case_Studies.pdf"
import exec_summary from "../assets/knowledge/Unlocking_Capital_for_IVMs_in_Africa_Executive_Summary.pdf"

const AwiComponent = () => {

  useEffect(()=>{
    document.title = "Maitri Capital - Case Studies"
  })

  const text = "Diversified Knowledge"
  return (
    <div className="awi_holder">
      <Banner backgroundImg={banner_10} extraImg={banner_9}  mainText={text} />
      <div className={styles_awi.awiHead}>
        <h3>Unlocking Capital for Emerging Female Investment Vehicle Managers in Africa</h3>

        <p className={styles_awi.p1}>
          The investment landscape in Africa is skewed, with female IVMs making up only 7.6% of investors.
        </p>
        <p>
          Our recent survey revealed that <strong>72% of female investment vehicle managers (IVMs)</strong> in Africa struggle to secure initial funding.
          Despite the growing need for their presence, they face significant hurdles in accessing capital to establish a track record.
        </p>
        <p>
          This imbalance also presents an opportunity. Women bring fresh perspectives, identify unique opportunities, 
          and drive innovation. They are also more likely to invest in female-led businesses, boosting ROI by 20%.
        </p>
        <p>
          The takeaway is clear: <strong>diversity is crucial for unlocking Africa’s economic growth and fostering inclusion</strong>.
        </p>
        <p>
          The report,<strong> “Unlocking Capital for Emerging Female Investment Vehicle Managers,”</strong> 
          funded by GIZ through the Make IT in Africa program and co-created by AWI and Maitri Capital, 
          addresses these challenges and provides an in-depth analysis of the hurdles faced by female IVMs.
        </p>

        <p>
          Read the full report <a href={full_report_link} target="_blank"> <i className="fa fa-download"></i> here</a>
        </p>
        <p>
          Read the executive summary <a href={exec_summary} target="_blank"> <i className="fa fa-download"></i> here </a>
        </p>
        <p>
          Read the case studies <a href={case_study_link} target="_blank"><i className="fa fa-download"></i> here</a>
        </p>
      </div>
    </div>
  )
}

export default AwiComponent