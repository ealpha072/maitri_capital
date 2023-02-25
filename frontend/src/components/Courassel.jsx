import React from 'react'

//import coraousel styles here
import banner_1 from '../assets/banners/banner_1.jpg'
import banner_2 from '../assets/banners/banner_2.png'
import banner_3 from '../assets/banners/banner_3.jpg'
import banner_4 from '../assets/banners/banner_4.png'
import banner_5 from '../assets/banners/banner_5.jpg'
import banner_6 from '../assets/banners/banner_6.jpg'
import banner_7 from '../assets/banners/banner_7.jpg'
import banner_8 from '../assets/banners/banner_8.jpg'


const Courassel = () => {
  return (
    <section className='carousel-sect'>
        <div id="carouselExampleIndicators" className="carousel slide back" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active slide-item">
                    <img className="d-block w-100" src={banner_1} alt="First slide" />
                </div>
                <div className="carousel-item slide-item">
                    <img className="d-block w-100" src={banner_2} alt="Second slide" />
                </div>

                <div className="carousel-item slide-item">
                    <img className="d-block w-100" src={banner_3} alt="Third slide" />
                </div>
                <div className="carousel-item slide-item">
                    <img className="d-block w-100" src={banner_4} alt="Third slide" />
                </div>
                <div className="carousel-item slide-item">
                    <img className="d-block w-100" src={banner_5} alt="Third slide" />
                </div>
                <div className="carousel-item slide-item">
                    <img className="d-block w-100" src={banner_6} alt="Third slide" />
                </div>
                <div className="carousel-item slide-item">
                    <img className="d-block w-100" src={banner_7} alt="Third slide" />
                </div>
                <div className="carousel-item slide-item">
                    <img className="d-block w-100" src={banner_8} alt="Third slide" /> 
                </div>
                
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
        <div className="front">
            <p className='front-p'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit!
            </p>
            <p className='front-p2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Non libero rem facilis perferendis nihil ad, eaque delectus dicta doloribus,
            </p>
            <i className='fa fa-arrow-right'></i>
        </div>
    </section>
  )
}

export default Courassel