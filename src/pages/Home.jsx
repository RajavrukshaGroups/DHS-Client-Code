import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css/animate.min.css";
import HR4 from "../images/HR-4.webp";
import HR2 from "../images/HR-2.webp";
import HR9 from "../images/HR-9.webp";
import HR10 from "../images/HR-10.webp";
import HR11 from "../images/HR-11.webp";
import HR12 from "../images/HR-12.webp";
import HR13 from "../images/HR-8.jpg";
import Marasandra_seal from "../images/Marasandra_seal.png";
import Tapasihalli_seal from "../images/Tapasihalli_seal.png";
import Seal from "../images/Seal.png";
import Seal1 from "../images/msTAMP.png";
import Logo from "../images/logo.png";
import Video from "../videos/most.mp4";
import Marquee from "react-fast-marquee";

import "./styles/Home.css";

const Home = () => {
  const slides = [
    {
      image: HR4,
      title: "ಡಿಫೆನ್ಸ್ ಹ್ಯಾಬಿಟಾಟ್ ಹೌಸಿಂಗ್\nಕೋ-ಆಪರೇಟಿವ್ ಸೊಸೈಟಿ ಲಿ.",
      regNo: "Reg. No.:- HSG-3/64/HHS/53744",
    },
    {
      image: HR2,
      title: "DEFENCE HABITAT HOUSING CO-OPERATIVE SOCIETY LTD.",
      regNo: "Reg. No.:- HSG-3/64/HHS/53744",
    },
    {
      image: HR9,
      title: "ಡಿಫೆನ್ಸ್ ಹ್ಯಾಬಿಟಾಟ್ ಹೌಸಿಂಗ್\nಕೋ-ಆಪರೇಟಿವ್ ಸೊಸೈಟಿ ಲಿ.",
      regNo: "Reg. No.:- HSG-3/64/HHS/53744",
    },
    {
      image: HR10,
      title: "DEFENCE HABITAT HOUSING CO-OPERATIVE SOCIETY LTD.",
      regNo: "Reg. No.:- HSG-3/64/HHS/53744",
    },
    {
      image: HR11,
      title: "ಡಿಫೆನ್ಸ್ ಹ್ಯಾಬಿಟಾಟ್ ಹೌಸಿಂಗ್\nಕೋ-ಆಪರೇಟಿವ್ ಸೊಸೈಟಿ ಲಿ.",
      regNo: "Reg. No.:- HSG-3/64/HHS/53744",
    },
    {
      image: HR12,
      title: "DEFENCE HABITAT HOUSING CO-OPERATIVE SOCIETY LTD.",
      regNo: "Reg. No.:- HSG-3/64/HHS/53744",
    },
  ];

  return (
    <>
      {/* Banner Section */}
      <section className="banner-style-two centred banner-section">
        <Carousel
          className="banner-carousel"
          interval={4000}
          fade
          style={{ overflow: "inherit" }}
        >
          {slides.map((slide, index) => (
            <Carousel.Item key={index}>
              <div
                className="image-layer"
                style={{ backgroundImage: `url(${slide.image})` }}
              ></div>
              <Carousel.Caption
                className="content-box animate_animated animate_fadeInDown"
                style={{ marginBottom: "7rem" }}
              >
                <h2
                  className="title animate_animated animate_fadeInDown"
                  style={{
                    fontFamily: "Emoji",
                    animationDuration: "2s",
                    animationDelay: "1s",
                    animationTimingFunction: "ease-in-out",
                  }}
                >
                  {slide.title}
                </h2>
                <p
                  className="regNo animate_animated animate_fadeInDown"
                  style={{
                    animationDuration: "2s",
                    animationDelay: "1s",
                    animationTimingFunction: "ease-in-out",
                  }}
                >
                  {" "}
                  {slide.regNo}
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </section>

      {/* About Us  */}
      <section className="features-style-two sec-pad header-about">
        <Marquee
          className="marquee"
          direction="left"
          speed={50}
          style={{
            backgroundColor: "#24457b",
            marginBottom: "2rem",
            top: "25%",
            marginTop: "-2rem",
          }}
        >
          <h5>
            "Bookings now open at Defence Habitat Marasandra Phase-2, Hurry up
            book your plot now!"
          </h5>
        </Marquee>
        <div className="auto-container">
          {/* <div className="row">
                        <div className="col-md-6">
                        <h2 style={{color:'#24457b'}}>DEFENCE HABITAT HOUSING CO-OPERATIVE SOCIETY LTD.</h2>

                        </div>
                        <div className="col-md-6">
                            <p style={{textAlign:'justify'}}>
                            Defence Habitat is a social service organization, functioning with an objective of promoting and facilitating to
                            Serving and Retired Armed / Defence Forces as well as Para Military personnel. 
                    
                            </p>
                            <div className="btn-box">
                        <a href="/about-us" className="theme-btn btn-one btn">Read More</a>
                    </div>
                        </div>
                    </div> */}

          <div className="sec-title centred">
            <h4
              style={{
                textAlign: "center",
                fontWeight: "bold",
                color: "rgb(36, 69, 123)",
                lineHeight: "4rem",
              }}
            >
              ABOUT US
            </h4>
          </div>
          <div className="container">
            <div
              className="row centred welcome"
              style={{ textAlign: "justify" }}
            >
              Welcome to Defence Habitat, where your real estate dreams become
              reality. The society is registered under Karnataka Co-Operative
              Society Act 1960. With years of experience in the market, we pride
              ourselves on offering top-tier services tailored to meet our
              member's unique needs.
            </div>
          </div>
          <br />
          <div className="btn-box centred">
            <a href="/about-us" className="theme-btn btn-one btn">
              Read More
            </a>
          </div>
        </div>
      </section>

      {/* Ongoing Projects */}
      <section className="feature1-style-two sec-pad">
        <div className="auto-container">
          <div className="sec-title centred">
            {/* <h5>Features</h5> */}
            <h2 className="text-center">Our Ongoing Projects</h2>
          </div>

          {/* <div className="container mt-2 text-center">
            <div className="row justify-content-center">
              {" "}
              <div className="col-md-6">
                <div className="feature-block-one">
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image relative">
                        <img
                          src={HR13}
                          alt="Defence Habitat Tapasihalli"
                          className="project-image"
                        />
                      </figure>
                      <div className="batch">
                        <i className="icon-11"></i>
                      </div>
                    </div>
                    <div className="lower-content">
                      <div className="author-info clearfix">
                        <figure className="author-thumb"></figure>
                        <div className="mainatain">
                          <div className="author-title text-center">
                            {" "}
                            <h6 className="project-title">
                              Defence Habitat Marasandra Phase-2
                            </h6>
                            <span className="squarefit">
                              <span style={{ fontSize: "16px" }}>Rs.</span> 1399
                              <span style={{ fontSize: "16px" }}>/-sqft*</span>
                              <p className="limited-booking blinkingText text-uppercase">
                                bookings are open now
                              </p>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="btn-boxs">
                        <a
                          href="/projects/marasandra"
                          className="theme-btn btn-one btn"
                        >
                          See Details
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="container mt-2 ">
            <div className="row">
              <div className="col-md-6">
                <div className="feature-block-one">
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image relative">
                        <img
                          src={HR10}
                          alt="Defence Habitat Tapasihalli"
                          className="project-image"
                        />
                        <img src={Tapasihalli_seal} alt="Seal" className="project-seal" />
                      </figure>
                      <div className="batch">
                        <i className="icon-11"></i>
                      </div>
                    </div>
                    <div className="lower-content">
                      <div className="author-info clearfix">
                        <figure className="author-thumb">
                          {/* <img src={Logo} alt="Logo" title='Defence Habitat Tapasihalli' className="project-logo" /> */}
                        </figure>
                        <div className="author-title">
                          <h6 className="project-title">
                            Defence Habitat Tapasihalli{" "}
                            <span className="squarefit">
                              <span style={{ fontSize: "16px" }}>Rs.</span>
                              949
                              <span style={{ fontSize: "16px" }}>/-sqft*</span>
                            </span>
                            <p className="booking-text blink">
                              <strong style={{ fontSize: "larger" }}>
                                Phase-1: Booking Closed
                              </strong>
                              <br />
                              <strong
                                style={{ fontSize: "larger", color: "green" }}
                              >
                                Phase-2: Bookings Are Open Now!
                              </strong>
                            </p>
                          </h6>
                        </div>
                        {/* <div className="buy-btn">
                                                </div> */}
                      </div>
                      <div className="btn-boxs">
                        <a
                          href="/projects/tapasihalli"
                          className="theme-btn btn-one btn"
                        >
                          See Details
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="feature-block-one">
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image relative">
                        <img
                          src={HR2}
                          alt="Defence Habitat Tapasihalli"
                          className="project-image"
                        />
                        <img src={Marasandra_seal} alt="Seal" className="project-seal" />
                      </figure>
                      <div className="batch">
                        <i className="icon-11"></i>
                      </div>
                    </div>
                    <div className="lower-content">
                      <div className="author-info clearfix">
                        <figure className="author-thumb">
                          {/* <img src={Logo} alt="Logo" className="project-logo" /> */}
                        </figure>
                        <div className="mainatain">
                          <div className="author-title">
                            <h6 className="project-title">
                              {/* Defence Habitat Marasandra Phase-1{" "} */}
                              Defence Habitat Marasandra{" "}
                              <span className="squarefit">
                                <span style={{ fontSize: "16px" }}>Rs.</span>
                                1399
                                <span style={{ fontSize: "16px" }}>
                                  /-sqft*{" "}
                                </span>
                              </span>
                              <p className="booking-text blink">
                                <strong style={{ fontSize: "larger" }}>
                                  Phase-1: Booking Closed
                                </strong>
                                <br />
                                <strong
                                  style={{ fontSize: "larger", color: "green" }}
                                >
                                  Phase-2: Bookings Are Open Now!
                                </strong>
                              </p>
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="btn-boxs">
                        <a
                          href="/projects/marasandra"
                          className="theme-btn btn-one btn"
                        >
                          See Details
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <Marquee
        className="marquee"
        direction="left"
        speed={50}
        style={{ backgroundColor: "#24457b", marginBottom: "2rem" }}
      >
        <h5>
          "Bookings now open at Defence Habitat Marasandra Phase-2, Hurry up
          book your plot now!"
        </h5>
      </Marquee> */}

      {/* Video Section */}
      <section className="video-section">
        <div className="auto-container">
          <div className="row">
            <div className="col-md-6">
              <div className="sec-title">
                <h2>Most Popular Places</h2>
                <p>
                  Our project is strategically located at North Bangalore, the
                  Exclusive part of Bangalore where land value, investor
                  sentiment, business opportunities and career respects – all
                  are heading north!
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="video-box">
                <video controls className="mostvideo">
                  <source src={Video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
