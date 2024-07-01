import React from "react";
import styled from "styled-components";
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
} from "mdb-react-ui-kit";
import { motion } from "framer-motion";

const ServicesComponent = () => {
  return (
    <ServicesContainer id="services">
      <MDBContainer className="py-5">
        <ServiceGrid>
          <ServiceCard>
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <StyledMDBCard>
                <MDBCardBody>
                  <ServiceIcon>
                    <i className="fas fa-handshake fa-3x mb-1"></i>
                  </ServiceIcon>
                  <StyledMDBCardTitle>Consulting</StyledMDBCardTitle>
                  <StyledMDBCardText>
                    Includes Partner Identification and Negotiation, Marketing
                    Plans, Sales and Marketing Audits.
                  </StyledMDBCardText>
                </MDBCardBody>
              </StyledMDBCard>
            </motion.div>
          </ServiceCard>

          <ServiceCard>
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <StyledMDBCard>
                <MDBCardBody>
                  <ServiceIcon>
                    <i className="fas fa-tasks fa-3x mb-1"></i>
                  </ServiceIcon>
                  <StyledMDBCardTitle>Outsourcing</StyledMDBCardTitle>
                  <StyledMDBCardText>
                    Includes Customer Loyalty or Frequency Programs, Marketing
                    Alliances, Data Mining, and more.
                  </StyledMDBCardText>
                </MDBCardBody>
              </StyledMDBCard>
            </motion.div>
          </ServiceCard>

          <ServiceCard>
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <StyledMDBCard>
                <MDBCardBody>
                  <ServiceIcon>
                    <i className="fas fa-users fa-3x mb-1"></i>
                  </ServiceIcon>
                  <StyledMDBCardTitle>Memberships</StyledMDBCardTitle>
                  <StyledMDBCardText>
                    Club Travel benefits are offered at over 100 hotels around
                    India. Exclusive Discounts available.
                  </StyledMDBCardText>
                </MDBCardBody>
              </StyledMDBCard>
            </motion.div>
          </ServiceCard>

          <ServiceCard>
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <StyledMDBCard>
                <MDBCardBody>
                  <ServiceIcon>
                    <i className="fas fa-utensils fa-3x mb-1"></i>
                  </ServiceIcon>
                  <StyledMDBCardTitle>Concierge Services</StyledMDBCardTitle>
                  <StyledMDBCardText>
                    Personalized services to enhance guest comfort and
                    satisfaction.
                  </StyledMDBCardText>
                </MDBCardBody>
              </StyledMDBCard>
            </motion.div>
          </ServiceCard>
        </ServiceGrid>
      </MDBContainer>
    </ServicesContainer>
  );
};

export default ServicesComponent;

// Styled Components

const ServicesContainer = styled.div`
  background: linear-gradient(
    135deg,
    #f8f9fa,
    #e0e0e0
  ); /* Gradient background */
  padding: 60px 0;
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
`;

const ServiceCard = styled.div`
  margin-bottom: 30px;
`;

const StyledMDBCard = styled(MDBCard)`
  background: linear-gradient(
    135deg,
    #800020,
    #800020
  ); /* Gradient background for cards */
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  height: 100%; /* Ensures all cards have the same height */

  &:hover {
    transform: translateY(-10px);
  }
`;

const ServiceIcon = styled.div`
  color: #ffffff;
  background: linear-gradient(
    135deg,
    #800020,
    #800020
  ); /* Gradient for icon background */
  border-radius: 50%;
  padding: 20px;
  display: inline-block;
  margin-bottom: 20px;
`;

const StyledMDBCardTitle = styled(MDBCardTitle)`
  font-size: 1.5rem;
  color: #ffffff;
`;

const StyledMDBCardText = styled(MDBCardText)`
  color: #ffffff;
  flex-grow: 1;
`;
