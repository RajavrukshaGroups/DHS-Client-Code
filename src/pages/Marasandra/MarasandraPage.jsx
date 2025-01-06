// src/pages/MarasandraPage/MarasandraPage.js

import React from "react";
import Marquee from "react-fast-marquee";
import { Card, Container } from "react-bootstrap";
import "../../pages/Marasandra/MarasandraPage.css";
import waterImage from "../../images/water.svg";
import urbanismImage from "../../images/urbanism.svg";
import inspectionImage from "../../images/inspection.svg";
import clubhouseImage from "../../images/clubhouse.png";
import woodsImage from "../../images/woods.svg";
import streetLightImage from "../../images/street-light.svg";
import roadImage from "../../images/road.svg";
import parkImage from "../../images/park.svg";
import ContactForm from "../ContactForm";
import seal from "../../images/msTAMP.png";
import Marasandra_seal from "../../images/Marasandra_seal.png";
import aboutVideo from "../../videos/Defence Habitat.mp4";
import BankDetails from "./BankDetails";
import BookingDetails from "./BookingDetails";
import Process from "./Process";
import TermsAndConds from "./TermsConditions";
import Amenities from "./Amenities";
import PriceChart from "./PriceChart";
import NearByPlaces from "./NearByPlaces";

const MarasandraPage = () => {
  const amenities = [
    {
      id: 1,
      name: "Water Connection",
      image: waterImage,
      backgroundColor: "#f0f0f0",
    },
    {
      id: 2,
      name: "Electricity Connection",
      image: urbanismImage,
      backgroundColor: "#f5f5f5",
    },
    {
      id: 3,
      name: "Sanitary Connection",
      image: inspectionImage,
      backgroundColor: "#f0f0f0",
    },
    {
      id: 4,
      name: "Club House",
      image: clubhouseImage,
      backgroundColor: "#f5f5f5",
    },
    {
      id: 5,
      name: "Tree Plantation",
      image: woodsImage,
      backgroundColor: "#f0f0f0",
    },
    {
      id: 6,
      name: "Street Lights",
      image: streetLightImage,
      backgroundColor: "#f5f5f5",
    },
    {
      id: 7,
      name: "Wide Black Top Roads",
      image: roadImage,
      backgroundColor: "#f0f0f0",
    },
    { id: 8, name: "Garden", image: parkImage, backgroundColor: "#f5f5f5" },
  ];

  const bankAccountDetails = [
    {
      label: "Account Name",
      value: "DEFENCE HABITAT HOUSING COOPERATIVE SOCIETY LIMITED.",
    },
    { label: "Account Number", value: "051388700000120" },
    { label: "Bank", value: "YES BANK LTD." },
    { label: "Branch", value: "SAHAKAR NAGAR" },
    { label: "IFSC Code", value: "YESB0000513" },
    { label: "Account Type", value: "Current Account" },
  ];
  const priceChartTableHeading = [
    "Dimension",
    "Rate per Sqft",
    "Total Amount",
    "Down Payment 30%",
    "First Installment 30%",
    "Second Installment 20%",
    "Third Installment 20%",
  ];

  const priceChartData = [
    {
      dimension: "30X40",
      price: "1399/-",
      total_amount: "16,78,800",
      down_payment: "5,03,640",
      first_installment: "5,03,640",
      second_installment: "3,35,760",
      third_installment: "3,35,760",
    },
    {
      dimension: "30X50",
      price: "1399/-",
      total_amount: "20,98,500",
      down_payment: "6,29,550",
      first_installment: "6,29,550",
      second_installment: "4,19,700",
      third_installment: "4,19,700",
    },
    {
      dimension: "40X60",
      price: "1399/-",
      total_amount: "33,57,600",
      down_payment: "10,07,280",
      first_installment: "10,07,280",
      second_installment: "6,71,520",
      third_installment: "6,71,520",
    },
    {
      dimension: "50X80",
      price: "1399/-",
      total_amount: "55,96,000",
      down_payment: "16,78,800",
      first_installment: "16,78,800",
      second_installment: "11,19,200",
      third_installment: "11,19,200",
    },
    {
      dimension: "100X120",
      price: "1399/-",
      total_amount: "1,67,88,000",
      down_payment: "50,36,400",
      first_installment: "50,36,400",
      second_installment: "33,57,600",
      third_installment: "33,57,600",
    },
  ];

  return (
    <Container fluid className="marasandra-page">
      <div className="banner-marasandra">
        <div className="banner-content-marasandra">
          <h1
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: "45px",
              fontFamily: "emoji",
            }}
          >
            {" "}
            DEFENCE HABITAT MARASANDRA
          </h1>
          {/* <h1 style={{color:'white'}}>MARASANDRA</h1> */}
          <h3 style={{ color: "white", fontFamily: "emoji", fontSize: "28px" }}>
            North Bangalore{" "}
          </h3>
          <h3 style={{ color: "white", fontFamily: "emoji", fontSize: "28px" }}>
            {" "}
            Yelahanka-Doddaballapura Main Road
          </h3>
        </div>
        <div className="stamps">
          <img src={Marasandra_seal} className="seals" alt="" title="" />
        </div>
      </div>
      <Marquee className="marquee" direction="left" speed={50}>
        <span>
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"Works
          Will Be Executed As Per BMRDA/DPA Norms."
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; "Change
          Of Land Use Process Is
          Completed."&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"Booking
          are open for phace-2."
        </span>
        {/* <span>Change of land and conversion in progress.</span> */}
      </Marquee>
      <div className="subintro">
        <p>
          "Introducing Defence Habitat Marasandra – your gateway to premier
          living in the burgeoning urban extension of North Bangalore. Our
          exclusive residential layout offers a perfect blend of modern
          amenities and strategic location, ensuring a lifestyle of convenience
          and luxury for homeowners and investors."
        </p>
      </div>
      <NearByPlaces />
      {/* Amenities Section */}
      <Amenities amenities={amenities} />

      {/* Price Chart Section */}
      <section
        className="price-chart-section"
        style={{
          backgroundColor: "#f8f6fe",
          marginBottom: "40px",
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        <PriceChart
          priceChartTableHeading={priceChartTableHeading}
          priceChartData={priceChartData}
        />
        {/* Terms and Conditions Section */}
        <TermsAndConds />
      </section>
      {/* Bank Details Section */}
      <section className="bank-details-section">
        <Container>
          <Card className="bank-details-card shadow-sm">
            <BookingDetails />
            <BankDetails bankAccountDetails={bankAccountDetails} />
            <Process />
          </Card>
        </Container>
      </section>
    </Container>
  );
};

export default MarasandraPage;
