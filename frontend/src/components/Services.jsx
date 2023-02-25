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
          <a href="/#"><h3>{img_details.heading}</h3></a>
      </div>
    </div>
  )
}
