import React from "react";
import Marquee from "react-fast-marquee";
import { Card, Container } from "react-bootstrap";
import "../../pages/Tapasihalli/TapasihalliPage.css";
import waterImage from "../../images/water.svg";
import urbanismImage from "../../images/urbanism.svg";
import inspectionImage from "../../images/inspection.svg";
import clubhouseImage from "../../images/clubhouse.png";
import woodsImage from "../../images/woods.svg";
import streetLightImage from "../../images/street-light.svg";
import roadImage from "../../images/road.svg";
import parkImage from "../../images/park.svg";
import seal from "../../images/Seal.png";
import Tapasihalli_seal from "../../images/Tapasihalli_seal.png";
import BankDetails from "./BankDetails";
import PriceChart from "./PriceChart";
import BookingDetails from "./BookingDetails";
import Process from "./Process";
import TermsCond from "./TermsCondtions";
import Amenities from "./Amenities";
import NearByPlaces from "./NearByPlaces";

const TapasihalliPage = () => {
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

  const priceChartTableHeading = [
    "Dimension",
    "Rate per Sqft",
    "Total Amount",
    "Down Payment 30%",
    "First Installment 30%",
    "Second Installment 20%",
    "Third Installment 20%",
  ];

  const oldPriceChartData = [
    {
      dimension: "30X40",
      price: "949/-",
      total_amount: "11,38,800",
      down_payment: "3,41,640",
      first_installment: "3,41,640",
      second_installment: "2,27,760",
      third_installment: "2,27,760",
    },
    {
      dimension: "30X50",
      price: "949/-",
      total_amount: "14,23,500",
      down_payment: "4,27,050",
      first_installment: "4,27,050",
      second_installment: "2,84,700",
      third_installment: "2,84,700",
    },
    {
      dimension: "40X60",
      price: "949/-",
      total_amount: "22,77,600",
      down_payment: "6,83,280",
      first_installment: "6,83,280",
      second_installment: "4,55,520",
      third_installment: "4,55,520",
    },
  ];

  const newPriceChartData = [
    {
      dimension: "30X40",
      price: "1099/-",
      total_amount: "13,18,800",
      down_payment: "3,95,640",
      first_installment: "3,95,640",
      second_installment: "2,63,760",
      third_installment: "2,63,760",
    },
    {
      dimension: "30X50",
      price: "1099/-",
      total_amount: "16,48,500",
      down_payment: "4,94,550",
      first_installment: "4,94,550",
      second_installment: "3,29,700",
      third_installment: "3,29,700",
    },
    {
      dimension: "40X60",
      price: "1099/-",
      total_amount: "26,37,600",
      down_payment: "7,91,280",
      first_installment: "7,91,280",
      second_installment: "5,27,520",
      third_installment: "5,27,520",
    },
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

  return (
    <Container fluid className="tapasihalli-page">
      <div className="banner-tapasihalli">
        <div className="banner-content-tapasihalli">
          <h1
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: "45px",
              fontFamily: "emoji",
            }}
          >
            DEFENCE HABITAT - TAPASIHALLI
          </h1>
          {/* <h1 style={{color:'white'}}>TAPASIHALLI</h1> */}
          <h3 style={{ color: "white", fontFamily: "emoji", fontSize: "28px" }}>
            North Bangalore , Doddaballapura .
          </h3>
        </div>
        <div className="stamps">
          <img
            src={Tapasihalli_seal}
            className="seals"
            alt=""
            title=""
            style={{ zIndex: "-1" }}
          />
        </div>
      </div>
      <Marquee className="marquee" direction="left" speed={50}>
        <span className="text-capitalize">
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"Work Will
          Be Executed As Per DPA Norms."
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; "Change
          Of Land Use Process is Completed."
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; "Booking
          are open for phase-2."
        </span>
        {/* <span>Change of land and conversion in progress.</span> */}
      </Marquee>

      <div className="subintro">
        <p>
          "Introducing Defence Habitat Tapasihalli, an exceptional residential
          layout project located in the rapidly developing area of North
          Bangalore. Designed to meet the needs of modern living, our project
          offers an ideal blend of tranquility and connectivity, making it the
          perfect choice for discerning homebuyers and investors alike."
        </p>
      </div>

      <NearByPlaces />

      {/* Amenities Section */}
      <Amenities amenities={amenities} />

      {/* Price Chart Section */}
      <section
        style={{
          backgroundColor: "#f8f6fe",
          marginBottom: "40px",
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        <PriceChart
          priceChartTableHeading={priceChartTableHeading}
          oldPriceChartData={oldPriceChartData}
          newPriceChartData={newPriceChartData}
        />

        {/* Terms and Conditions Section */}
        <TermsCond />
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

export default TapasihalliPage;
