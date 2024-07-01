import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import l1 from "../../assets/Logos/1280px-Radisson_Blu_logo.svg-removebg-preview-1.png";
import l2 from "../../assets/Logos/Double_tree_logo.png";
import l3 from "../../assets/Logos/kisspng-logo-golden-tulip-tjaarda-oranjewoud-golden-tulip-hotel-logo-5b567add0fa8e2.0062912015323942050642-removebg-preview.webp";
import l4 from "../../assets/Logos/Le_Meridien_logo.png";
import l5 from "../../assets/Logos/Novotel_logo.png";
import l6 from "../../assets/Logos/sheraton.jpeg";
import l7 from "../../assets/Logos/sunnylogo.jpeg";
import l8 from "../../assets/Logos/Taj_Hotel_logo.png";
import l9 from "../../assets/Logos/The_Lalit_Logo.png";

// Define your logo images
const logos = [l1, l2, l3, l4, l5, l6, l7, l8, l9];

// Styled components
const Section = styled.section`
  padding: 40px 20px;
  text-align: center;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #343a40;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const MarqueeContainer = styled.div`
  width: 100%;
  overflow: hidden;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }

  @media (max-width: 480px) {
    padding: 5px;
  }
`;

const LogosWrapper = styled(motion.div)`
  display: flex;
  position: relative;
  width: fit-content;
  white-space: nowrap;
  animation: scroll 30s linear infinite;

  @keyframes scroll {
    from {
      transform: translateX(0%);
    }
    to {
      transform: translateX(-100%);
    }
  }
`;

const Logo = styled.img`
  width: 180px; /* Adjust size as needed */
  height: auto; /* Maintain aspect ratio */
  margin-right: 40px; /* Spacing between logos */
  transition: transform 0.3s ease-in-out, filter 0.3s ease-in-out;
  border-radius: 10px;
  padding: 10px;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: scale(1.1);
    filter: brightness(1.2);
    background-color: #f0f8ff;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    width: 120px;
    margin-right: 20px;
    padding: 5px;
  }

  @media (max-width: 480px) {
    width: 100px;
    margin-right: 10px;
    padding: 3px;
  }
`;

const MarqueeLogo = () => {
  return (
    <Section>
      <Heading>Our Partners</Heading>
      <MarqueeContainer>
        <LogosWrapper>
          {logos.map((logo, index) => (
            <Logo key={index} src={logo} alt={`Logo ${index}`} />
          ))}
          {logos.map((logo, index) => (
            <Logo key={`second-${index}`} src={logo} alt={`Logo ${index}`} />
          ))}
        </LogosWrapper>
      </MarqueeContainer>
    </Section>
  );
};

export default MarqueeLogo;
