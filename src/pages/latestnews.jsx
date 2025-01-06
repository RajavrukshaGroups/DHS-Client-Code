// src/pages/MarasandraPage/MarasandraPage.js

import React from "react";
import Marquee from "react-fast-marquee";
import { Card, Container, Row, Col, Table } from "react-bootstrap";
import "./styles/latestnews.css";

const LatestNews = () => {
  return (
    <Container fluid className="marasandra-page">
      <div className="banner-latest">
        <div className="banner-content3">
          <h1 style={{ color: "white", fontWeight: "bold" }}>Latest News</h1>
        </div>
      </div>
      <Marquee className="marquee" direction="left" speed={50}>
        <span className="text-capitalize">
          {/* "Stay Tuned For The New Price Of Phase-2 Project" */}
          "DHS-Marasandra: Change of land use process is completed."
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
          "DHS-Tapasihalli: DC conversion received."
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; "Bookings
          are now open for phase-2."
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
        </span>
        {/* <span>Change of land and conversion in progress.</span> */}
      </Marquee>
      <Card className="property-card-latest shadow-sm">
        <Card.Body>
          <h2 className="ct">Latest News</h2>
          <div className="title-divider"></div>
          <div className="title-divider"></div>
          <h5
            className="custom-bullet"
            style={{ marginTop: "15px", fontSize: "1rem" }}
          >
            {" "}
            Defence Habitat Marasandra - Rs.1,399/- sqft (Booking Closed)
          </h5>
          <h5
            className="custom-bullet"
            style={{ marginTop: "15px", fontSize: "1rem" }}
          >
            {" "}
            Defence Habitat Tapasihalli - Rs.949/- sqft (Booking Closed)
          </h5>
          {/* <h5
            className="custom-bullet"
            style={{ marginTop: "15px", fontSize: "1rem" }}
          >
            {" "}
            We are thrilled to announce the launch of Phase 2 of our project,
            bringing more opportunities and amenities to our valued Members!
            With the launch of Phase 2, we are adding even more to our
            project—greater opportunities and new amenities await our cherished
            members!
          </h5> */}
          <h5
            className="custom-bullet"
            style={{ marginTop: "15px", fontSize: "1rem" }}
          >
            {" "}
            Defence Habitat Marasandra Phase-2 has launched - Rs.1,399/- sqft
            (Booking Opened)<span className="latest-badge">New</span>
          </h5>
          <h5
            className="custom-bullet"
            style={{ marginTop: "15px", fontSize: "1rem" }}
          >
            {" "}
            Defence Habitat Tapasihalli Phase-2 has launched - Rs.1099/- sqft
            (Booking Opened)<span className="latest-badge">New</span>
          </h5>
          <h5
            className="custom-bullet"
            style={{ marginTop: "15px", fontSize: "1rem" }}
          >
            {" "}
            DHS-Tapasihalli: DPA/BMRDA approval in process
          </h5>
          <h5
            className="custom-bullet"
            style={{ marginTop: "15px", fontSize: "1rem" }}
          >
            {" "}
            {/* We are thrilled to announce the launch of Phase 2 of our project,
            bringing more opportunities and amenities to our valued Members! */}
            With the launch of Phase 2, we are adding even more to our project
            and new amenities await our cherished members!
          </h5>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default LatestNews;
