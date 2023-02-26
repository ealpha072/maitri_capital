import styles from "./styles/About.module.css"
import { BuildDiffDiv } from "./Services";

import Banner from "./Banner";
import banner_9 from "../assets/banners/banner_9.jpg"
import banner_10 from "../assets/banners/banner_10.jpg"

// We exercise the utmost discretion and integrity at all times
// We address clients’ corporate finance, capital markets and strategic advisory needs, while keeping the company affairs strictly confidential
// Our corporate culture is built on integrity, professional principles and respect


const About = () => {
   	const text = `Independent, Client-Focused Impact, Investment, 
	and Corporate Advisory and Research for Africa`

	const shortText = `Providing our clients with unrivaled market knowledge, experience, 
   		global execution capabilities and industry-leading network access in order to 
		deliver in-depth insight, high-quality advice, and close deals
	`

	const diffDivs = [
		{
			
			iconClass:"fa fa-briefcase",
			head:`Relationship Driven`,
			items:[
				`Our senior directors are personally involved with every 
				client discussion and project
				We fully grasp and internalise clients’ goals
				Promote understanding and purpose in all endeavours
				We manage client and firm resources cost-effectively`
			]
		},
		{
			iconClass:"fa fa-clock-o",
			head:`Independence, Objectivity & Timely Delivery`,
			items:[
				`We are an independent entity and can provide unbiased and
				objective strategic advice that reflects and responds to clients’
				circumstances, requirements, goals, and aspirations.
				We are not incentivised to sell other products.
				Adhere to the highest professional standards Non-hierarchical and inclusive`
			]
	
		},
		{
			iconClass:"fa fa-lightbulb-o",
			head:`Knowledge & Expertise`,
			items:[
				`We are built on substantial experience and knowledge in investment banking and financial advisory
				We capitalize on and leverage our long-standing transactional 
				and structuring expertise to craft tailor-made solutions
				Bring innovations in solutions to our clients
				Build capability and client capacity to ensure sustainability`
			]
		},
		{
			iconClass:"fa fa-handshake-o",
			head:`Discretion`,
			items:[
				`We exercise the utmost discretion and integrity at all times.
				We address clients’ corporate finance, capital markets and strategic advisory needs 
				while keeping the company affairs strictly confidential.
				Our corporate culture is built on integrity, professional principles and respect`
			]
		}
	]

    return (
		<div className="about-container">
			<Banner
				backgroundImg={banner_10}
				extraImg={banner_9}
				mainText={text}
				shortText={shortText}
			/>
			
			<div className={styles.aboutTop}>
				<div className={styles.missionDiv}>
					<p className="front-p">Our Mission</p>
					<p className="">
						"Our mission is to help build a world in which Africans and
						African Businesses can compete on a global scale, while remaining
						inclusive and sustainable, and contributing to the economic
						development and prosperity of their respective countries, Africa
						and the world."
					</p>
				</div>
			</div>

			<div className={styles.divider}></div>

			<div className={styles.aboutTop}>
				<div className={styles.missionDiv}>
					<p className="front-p">Our Values</p>
					<p className="">
						"Our values define us as individuals and as a company. <br /> We uphold
						them in every conversation, meeting, and transaction."
					</p>
				</div>

				<div className={styles.valuesDiv}>
					<div className="row">
					<div className={`col ${styles.individualHolder}`}>
						<i className="fa fa-handshake-o"></i>
						<h3>Honesty & Integrity</h3>
						<ul>
						<li>We strive to do the right thing.</li>
						<li>
							We earn trust by doing excellent work and keeping our
							promises to our clients. This includes dealing honestly and
							ethically both internally and with our clients. Our word is
							our bond.
						</li>
						</ul>
					</div>

					<div className={`col ${styles.individualHolder}`}>
						<i className="fa fa-certificate"></i>
						<h3>Excellence</h3>
						<ul>
						<li>We deliver uncompromising quality.</li>
						<li>
							We set the bar high for the standards we expect our people
							to meet.
						</li>
						<li>
							And we take every opportunity to consistently deliver
							unmatched value for our clients.
						</li>
						</ul>
					</div>

					<div className={`col ${styles.individualHolder}`}>
						<i className="fa fa-handshake-o"></i>
						<h3>Commitment</h3>
						<ul>
						<li>We go the extra mile.</li>
						<li>
							Our markets are challenging, but we remain tenacious and
							steadfast.{" "}
						</li>
						<li>
							Our team is committed to providing the best possible service
							to our clients, recognizing that each client is unique and
							the reason for our existence.
						</li>
						</ul>
					</div>

					<div className={`col ${styles.individualHolder}`}>
						<i className="fa fa-thumbs-up"></i>
						<h3>Courage</h3>
						<ul>
						<li>We are bold.</li>
						<li>
							We work in some of the world’s most difficult environments
							and on complex problems{" "}
						</li>
						<li>
							We challenge conventional thinking, go beyond typical
							approaches and embrace innovative ideas to advise on our
							clients’ most complex problems.
						</li>
						</ul>
					</div>

					<div className={`col ${styles.individualHolder}`}>
						<i className="fa fa-users"></i>
						<h3>Inclusivity</h3>
						<ul>
						<li>We have a duty to our people, communities and planet.</li>
						<li>
							Our people are our assets. We understand that leveraging the
							strengths of people from diverse backgrounds and experiences
							is critical to our ability to serve our clients while also
							building a firm where our employees can grow and thrive.
						</li>
						<li>
							We strive to have an impact that extends beyond the scope of
							our client relationships. We want to make a difference in
							the communities where we live and work. We care about the
							environment and work hard to reduce our carbon footprint
							both professionally and personally.
						</li>
						<li>We pledge to do no harm.</li>
						</ul>
					</div>
					</div>
				</div>
			</div>

			<div className={styles.aboutBottom}>
				<div className={styles.aboutLeft}>
					<h3>What Differentiates Us ?</h3>
					<p>
						We are your long-term trusted advisor and partner. 
						Each advisory assignment is undertaken with utmost care, 
						diligence and dedication no matter the size. Being independent, 
						we are free from conflicts and can give impartial advice. 
						We are top heavy and hands-on with senior involvement end to end.
					</p>
				</div>
				
				<div className={styles.different}>
					<div className={styles.diffHolder}>
						<div className={styles.iconHolder}>
							<i className="fa fa-clock-o"></i>
						</div>
						<div className={styles.diffMainHolder}>
							<h3>Relationship Driven</h3>
							<ul>
								<li>
									Our senior directors are personally involved with every 
									client discussion and project
									We fully grasp and internalise clients’ goals
									Promote understanding and purpose in all endeavours
									We manage client and firm resources cost-effectively</li>
							</ul>
						</div>
					</div>
					{
						diffDivs.map((item, index) => (

							<BuildDiffDiv 
								diffDetails={item} 
								styles={[styles.diffHolder, styles.iconHolder, styles.diffMainHolder]} 
								key={index}
							/>
						))
					}

				</div>
			</div>

			<div className={styles.storyLine}>
				<div>
					
				</div>
			</div>
		</div>
    );
}

export default About