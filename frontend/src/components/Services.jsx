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

export const BuildCard = ({img_details, styles}) => {
  return(
    <div className="col-12 col-md-6 col-lg-4">
      <a href="/#"><img src={img_details.source} height="456" width="980" alt="" /></a>
      <div className={styles}>
          <p>
            <i className="fa fa-clock-o"></i> 
            <span>{img_details.date}</span>
          </p>
          <Link to={img_details.link} target="_blank"><h3>{img_details.heading}</h3></Link>
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


// We are an independent entity and can provide unbiased and objective strategic advice that reflects and responds to clients’ circumstances, requirements, goals, and aspirations
// We are not incentivised to sell other products
// Adhere to the highest professional standards
// Non-hierarchical and inclusive

