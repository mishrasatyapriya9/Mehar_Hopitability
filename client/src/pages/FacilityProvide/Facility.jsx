import "./Facility.css";
import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
} from "mdb-react-ui-kit";

const Facility = () => {
  const facilityData = [
    {
      icon: "wifi",
      title: "Free Wi-Fi",
      description: "High-speed internet access in all areas.",
    },
    {
      icon: "swimmer",
      title: "Swimming Pool",
      description: "Indoor and outdoor pools available.",
    },
    {
      icon: "concierge-bell",
      title: "24/7 Concierge",
      description: "Personalized assistance at any time.",
    },
    {
      icon: "utensils",
      title: "Restaurant",
      description: "Delicious meals served all day.",
    },
    {
      icon: "spa",
      title: "Spa Services",
      description: "Relax and rejuvenate with our spa treatments.",
    },
    {
      icon: "parking",
      title: "Free Parking",
      description: "Ample parking space for all guests.",
    },
  ];

  return (
    <MDBContainer className="py-5">
      <h2 className="text-center mb-5">Our Facilities</h2>
      <MDBRow>
        {facilityData.map((facility, index) => (
          <MDBCol md="4" className="mb-4" key={index}>
            <MDBCard className="h-100 text-center">
              <MDBCardBody className="d-flex flex-column justify-content-center align-items-center">
                <MDBIcon
                  fas
                  icon={facility.icon}
                  size="3x"
                  className="mb-3 text-primary"
                />
                <h5 className="card-title mb-3">{facility.title}</h5>
                <p className="card-text">{facility.description}</p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        ))}
      </MDBRow>
    </MDBContainer>
  );
};

export default Facility;
