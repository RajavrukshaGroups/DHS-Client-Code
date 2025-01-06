import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import HR4 from '../images/HR-4.jpg';
import HR2 from '../images/HR-2.jpg';
import HR9 from '../images/HR-9.jpeg';
import HR10 from '../images/HR-10.jpeg';
import HR11 from '../images/HR-11.jpeg';
import HR12 from '../images/HR-12.jpeg';
import house from '../images/house (4).png';
import houseinhand from '../images/hand (1).png';
import 'animate.css/animate.min.css';
import aboutVideo from '../videos/Defence Habitat.mp4';
import './styles/AboutUs.css';

const AboutUs = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const slides = [
    { image: HR4, title: "ABOUT US" },
    { image: HR2, title: "ABOUT US" },
    { image: HR9, title: "ABOUT US" },
    { image: HR10, title: "ABOUT US" },
    { image: HR11, title: "ABOUT US" },
    { image: HR12, title: "ABOUT US" }
  ];

  return (
    <>
      {/* Banner Section */}
      {/* <section className="banner-style-two centred" style={{padding:'0rem'}}>
        <Carousel className="banners-carousel" interval={3000} fade>
          {slides.map((slide, index) => (
            <Carousel.Item key={index}>
              <div className="image-layer" style={{ backgroundImage: `url(${slide.image})` }}></div>
              <Carousel.Caption className="content-box animate__animated animate__fadeInDown">
                <h2 className='title'>{slide.title}</h2>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </section> */}
      <div className="banner-about">
        <div className="banner-content-about">
          <h1 style={{ color: 'white', fontWeight: '900' }}>ABOUT US</h1>
        </div>
      </div>


      {/* about us video */}
      {/* <section className="about-section about-page " style={{marginTop:'2rem' , padding:'60px 0'}}>
        <div className="auto-container">
          <div className="inner-container">
            <div className="row align-items-center clearfix">
              <div className="col-lg-5 col-md-10 col-sm-12 image-column">
                <video  controls type="video/mp4" src={aboutVideo}  alt="about video"
                  className="aboutvideo"
                  
                />
              </div>
              <div className="col-lg-7 col-md-12 col-sm-12 content-column" style={{ paddingTop: '0px' }}>
                <div className="content_block_2">
                  <div className="content-box">
                    <div className="sec-title">
                      <h2 className="defenceha">Defence Habitat Housing Co-Operative Society Ltd.</h2>
                    </div>
                    <div className="texts" >
                      <p style={{marginLeft:'-50px', marginTop:'15px'}}>
                      Welcome to Defence Habitat, where your real estate dreams become reality.
                      The society is registered under Karnataka Co-Operative Society Act 1960.
                      With years of experience in the market, we pride ourselves on offering 
                      top-tier services tailored to meet our member's unique needs.

                      </p>
                      <p style={{marginLeft:'-50px',marginTop:'15px'}}>
                      At Defence Habitat, we believe in building lasting relationships based on trust, transparency, and integrity. Our comprehensive approach ensures our members receive the best guidance throughout their real estate journey.
                      Our services encompass residential, commercial, and investment properties, offering a diverse portfolio to meet their unique needs. From the first consultation to the final closing, we are with our members every step of the way, ensuring a seamless and rewarding experience.

                      </p>
                      <p style={{marginLeft:'-50px',marginTop:'15px',textAlign:'center'}}>
                      "Join us at Defence Habitat, where your vision for the perfect property is our mission. Let us help you navigate the real estate market with confidence and ease."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}


      <section className="about-section about-page  res-about" style={{ marginTop: '2rem' }}>
        <div className="auto-container">
          <div className="inner-container">
            <div className="row align-items-center clearfix">
              {/* <div className="col-lg-5 col-md-10 col-sm-12 image-column">
                <video  controls type="video/mp4" src={aboutVideo}  alt="about video"
                  className="aboutvideo"
                  
                />
              </div> */}
              <div className="col-lg-7 col-md-12 col-sm-12 content-column" style={{ paddingTop: '0px' }}>
                <div className="content_block_2">
                  <div className="content-box">
                    <div className="sec-title">
                      <h2 className="defenceha">Defence Habitat Housing Co-Operative Society Ltd.</h2>
                    </div>
                    <div className="texts" >
                      <p style={{ marginLeft: '-50px', marginTop: '15px' }}>
                        Welcome to Defence Habitat, where your real estate dreams become reality.
                        The society is registered under Karnataka Co-Operative Society Act 1960.
                        With years of experience in the market, we pride ourselves on offering
                        top-tier services tailored to meet our member's unique needs.

                      </p>
                      <p style={{ marginLeft: '-50px', marginTop: '15px' }}>
                        At Defence Habitat, we believe in building lasting relationships based on trust, transparency, and integrity. Our comprehensive approach ensures our members receive the best guidance throughout their real estate journey.
                        Our services encompass residential, commercial, and investment properties, offering a diverse portfolio to meet their unique needs. From the first consultation to the final closing, we are with our members every step of the way, ensuring a seamless and rewarding experience.

                      </p>
                      <p style={{ marginLeft: '-50px', marginTop: '15px', textAlign: 'left', fontWeight: 'bold' }}>
                        "Join us at Defence Habitat, where your vision for the perfect property is our mission. Let us help you navigate the real estate market with confidence and ease."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* add here */}

              <div className="col-lg-5 col-md-10 col-sm-12 image-column">
                <video controls type="video/mp4" src={aboutVideo} alt="about video"
                  className="aboutvideo"

                />
              </div>



            </div>
          </div>
        </div>
      </section>

      {/* mission and vision */}
      <section className="feature-style-three centred pb-110" style={{ paddingTop: '0px', marginTop: '-7rem' }}>
        <div className="auto-container">
          <div className="sec-titles">
            <h5>Get to Know</h5>
            <h2>Who we are & What we do</h2>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div>
                  <div className="inner-box1 vission" >
                    <div className="icon-box">
                      <img src={house} alt="house" />
                    </div>
                    <h1 style={{ color: '#24457b' }}><b>VISION</b></h1>
                    <p style={{ textAlign: 'justify' }}>
                      To develop an Exclusive Enclave for Defense Personnel that matches the dignity and living standards of Military Life.<br />
                      &nbsp;&nbsp;&nbsp;<br />
                      &nbsp;&nbsp;&nbsp;<br />
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div>
                  <div className="inner-box1 vission">
                    <div className="icon-box">
                      <img src={houseinhand} alt="house in hand" />
                    </div>
                    <h1 style={{ color: '#24457b' }}><b>MISSION</b></h1>
                    <p style={{ textAlign: 'justify' }}>
                      To provide an opportunity to our defense personnel through our State Government approved Society,
                      a reliable place to build their dream house within their budget in an aesthetic environment of Campus infrastructure.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
