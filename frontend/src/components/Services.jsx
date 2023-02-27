import { Link } from "react-router-dom";

export const Services = ({service_array}) => {
  //write a function that generates a random alphanumeric string
  const randomString = () => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for ( let i = 0; i < 5; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  	return (
		<ul>
		{service_array.map((item) => (
			<li key={randomString()}>{item}</li>
		))}
		</ul>
  	);
}

export const BuildCard = ({ img_details, styles }) => {
  	return (
		<div className="col-12 col-md-6 col-lg-4">
			<Link to={img_details.link} target="_blank">
				<img src={img_details.source} height="456" width="980" alt="" />
				<div className={styles}>
					<p>
						<i className="fa fa-clock-o"></i>
						<span>{img_details.date}</span>
					</p>
					<Link to={img_details.link} target="_blank">
						<h3>{img_details.heading}</h3>
					</Link>
					<Link to={img_details.moreMaterials}>View More Materials</Link>
				</div>
			</Link>
		</div>
  	);
};

export const BuildCaseStudyDiv = ({ caseDetails, styles}) => {
  	const link = caseDetails.ytLink ?  
		<Link to={caseDetails.ytLink} target="_blank"> <h4>Click here for the Youtube Link</h4> </Link> : 
	null

  	return(
		<div className="col-12 col-md-6 col-lg-4">
			<Link to={caseDetails.link}>
				<img src={caseDetails.source} height="256" width="880" alt="" />
			</Link >
			<div className={styles}>
				<Link to={caseDetails.link} target="_blank">
					<h3>
						{caseDetails.heading}
					</h3>
				</Link>
				{link}
			</div>
		</div>
  	)
}

export const BuildDiffDiv = ({ diffDetails, styles }) => {
  	return (
		<div className={styles[0]}>
			<div className={styles[1]}>
				<i className={diffDetails.iconClass}></i>
			</div>
			<div className={styles[2]}>
				<h3>{diffDetails.head}</h3>
				<ul>
					{
						diffDetails.items.map( (item, index) => (
							<li key={index}>{item}</li>
						))
					}
				</ul>
			</div>
		</div>
  );
};




