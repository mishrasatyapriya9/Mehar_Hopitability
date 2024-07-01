import React from "react";
import styled, { withTheme } from "styled-components";
import "./About.css"
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import Header from "../components/Layout/Header"
import Footer from "../components/Layout/Footer"
import { motion } from "framer-motion";
import leftphoto from "../assets/aboutusph/5060585_2668382 (1).jpg"
// Styled Components
const AboutSection = styled.section`
  background-color: #2d2f33;
  color: white;
  padding: 60px 0;
`;

const Title = styled.h2`
  color: #f4a261;
  font-size: 2.8rem;
  margin-bottom: 40px;
  text-align: center;
  font-weight: bold;
`;

const SubTitle = styled.h3`
  color: #e76f51;
  font-size: 2rem;
  margin-bottom: 20px;
  font-weight: bold;
`;

const Text = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: white;
`;

const Terms = styled.div`
  background-color: #264653;
  color: #ffffff;
  padding: 30px;
  margin-top: 40px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const About = () => {
  return (
    <div>
      <Header />
      <AboutSection>
        <MDBContainer>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Title>About Us</Title>
            <MDBRow>
              <MDBCol md="6">
                <motion.img
                  src={leftphoto}
                  alt="Hospitality Service"
                  style={{
                    width: "100%",
                    borderRadius: "15px",
                    marginBottom: "20px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </MDBCol>
              <MDBCol md="6">
                <MDBCard style={{ backgroundColor: "#800020", border: "none" }}>
                  <MDBCardBody>
                    <MDBCardTitle
                      className="text-center"
                      style={{ color: "#f4a261", fontSize: "2rem" }}
                    >
                      B2B-Hospitality Services
                    </MDBCardTitle>
                    <MDBCardText style={{ color: "white", fontSize: "16px" }}>
                      An expertly operated business offering a wide scope of
                      hospitality solutions. An organization overseen by
                      specialists from the hospitality industry having long
                      stretches of involvement in the same, we now provide a
                      variety of administrations custom fitted to all your
                      needs.
                    </MDBCardText>
                    <SubTitle>Our Mission</SubTitle>
                    <Text>
                      We are poised to blend the hospitality service delivery
                      with quality and customer care. We are destined to give
                      different experience to our regular diners, lodgers, and
                      event organizers.
                    </Text>
                    <SubTitle>Our Vision</SubTitle>
                    <Text>
                      Our vision is to become a total hospitality service
                      provider with comprehensive commitment to offer an
                      innovative range of stay, dining, event hosting facilities
                      to clients.
                    </Text>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
            <Terms>
              <p className="termshead" style={{color : "#e76f51",fontSize:"20PX"}}>Terms and Conditions</p>
              <Text>
                No refund and No Cancellation policy, blackout dates are
                applicable.
              </Text>
            </Terms>
          </motion.div>
        </MDBContainer>
      </AboutSection>
      <Footer />
    </div>
  );
};

export default About;
