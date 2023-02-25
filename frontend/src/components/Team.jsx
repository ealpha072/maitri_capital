import React from 'react'
import Banner from './Banner';
import styles from './styles/Team.module.css'

import avatar from '../assets/images/avatar.jpg'
import banner_12 from "../assets/banners/banner_12.jpg"
import banner_13 from "../assets/images/img_three.jpg"

const Team = () => {
    const text = "A proffesional Team dedicated to Excellence"
  return (
    <div className="teams">
        <Banner backgroundImg={banner_12} extraImg={banner_13} shortText={text} />
        <div className="sector-brief about-top d-flex">
            <div className="sector-expl about-p">
                <p className="front-p">Team</p>
                <p className="p-about">
                    At Maitri Capital, we believe that our team is what sets us apart from our competitors. 
                    Our team of 10 proffessionals includes some of the most talented and experienced professionals 
                    in the African investment and corporate advisory space. Each team member brings a unique set of skills 
                    and experiences to the table, and together, we are able to provide our clients with an unparalleled level 
                    of expertise and support.
                </p>
                <p className="aside-sectors" style={{ paddingLeft: "25px" }}>
                    Our team is not only highly skilled, but also deeply committed 
                    to our clients and to each other. We work closely together to ensure 
                    that we are delivering the best possible outcomes for our clients, 
                    and we are always willing to go above and beyond to ensure their success.
                </p>
                <p className="aside-sectors" style={{ paddingLeft: "25px" }}>
                    It is this level of commitment and teamwork that has helped us 
                    establish ourselves as a trusted partner for investors in Africa.
                </p>
            </div>
            <div className="sector-count">
                <p className="statistic">10</p>
                <p className="core-ind">Proffesionals working to deliver results</p>
            </div>
        </div>
        <div className={styles.teamPics}>
            <div className="row">
                <div className="col">
                    <img src={avatar} alt="" />
                    <div className={styles.teamDetails}>
                        <p className="team-name">Lorem Ipsum</p>
                        <p className="team-title">Founder, CEO</p>
                    </div>
                </div>
                <div className="col">
                    <img src={avatar} alt="" />
                    <div className={styles.teamDetails}>
                        <p className="team-name">Lorem Ipsum</p>
                        <p className="team-title">Founder, CEO</p>
                    </div>
                </div>
                <div className="col">
                    <img src={avatar} alt="" />
                    <div className={styles.teamDetails}>
                        <p className="team-name">Lorem Ipsum</p>
                        <p className="team-title">Founder, CEO</p>
                    </div>
                </div>
                <div className="col">
                    <img src={avatar} alt="" />
                    <div className={styles.teamDetails}>
                        <p className="team-name">Lorem Ipsum</p>
                        <p className="team-title">Founder, CEO</p>
                    </div>
                </div>
                <div className="col">
                    <img src={avatar} alt="" />
                    <div className={styles.teamDetails}>
                        <p className="team-name">Lorem Ipsum</p>
                        <p className="team-title">Founder, CEO</p>
                    </div>
                </div>
            </div>
            <div className="row"></div>
        </div>
    </div>
  );
}

export default Team