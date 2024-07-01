import "./Card.css";
import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import h1 from "../../assets/HotelPics/H1.jpg";
import h2 from "../../assets/HotelPics/H3.jpeg";
import h3 from "../../assets/HotelPics/H4.jpeg";
import h4 from "../../assets/HotelPics/H7.jpeg";
import h5 from "../../assets/HotelPics/H8.jpeg";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
} from "mdb-react-ui-kit";

const hotels = [
  {
    id: 1,
    image: h1,
    title: "The Leela Palace New Delhi",
    description: " World-class Dining, Spa",
  },
  {
    id: 2,
    image: h2,
    title: "Taj Mahal Hotel",
    description: "Heritage Charm, Fine Dining",
  },
  {
    id: 3,
    image: h3,
    title: "The Oberoi, New Delhi",
    description: "Golf Views, Wellness",
  },
  {
    id: 4,
    image: h4,
    title: "ITC Maurya",
    description: "Culinary Excellence, Luxury Stay",
  },
  {
    id: 5,
    image: h5,
    title: "Shangri-La's Eros Hotel",
    description: "City Views, Modern Comfort",
  },
  {
    id: 6,
    image: h1,
    title: "The Leela Palace New Delhi",
    description: " World-class Dining, Spa",
  },
  {
    id: 7,
    image: h2,
    title: "Taj Mahal Hotel",
    description: "Heritage Charm, Fine Dining",
  },
  {
    id: 8,
    image: h3,
    title: "The Oberoi, New Delhi",
    description: "Golf Views, Wellness",
  },
  {
    id: 9,
    image: h4,
    title: "ITC Maurya",
    description: "Culinary Excellence, Luxury Stay",
  },
  {
    id: 10,
    image: h5,
    title: "Shangri-La's Eros Hotel",
    description: "City Views, Modern Comfort",
  },
  // Add more hotel objects as needed
];
const duplicatedHotels = [...hotels, ...hotels];

const Container = styled.div`
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
`;

const Card = styled(motion.div)`
  display: inline-block;
  margin: 0 10px;
  width: 300px;
  height: 100%;
  flex-shrink: 0;
`;

const ScrollContainer = styled(motion.div)`
  display: flex;
  width: fit-content;
`;

const cardVariants = {
  animate: {
    x: [0, -300 * hotels.length], // Adjust the scroll distance based on the number of cards
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: hotels.length * 5, // Adjust speed as needed
        ease: "linear",
      },
    },
  },
};

const HotelCarousel = () => {
  return (
    <Container>
      <ScrollContainer variants={cardVariants} animate="animate">
        {duplicatedHotels.map((hotel, index) => (
          <Card key={index}>
            <MDBCard className="h-100">
              <MDBCardImage
                src={hotel.image}
                position="top"
                alt={hotel.title}
                style={{ width: "100%", height: "200px", objectFit: "cover" }} // Adjust image size here
              />
              <MDBCardBody>
                <MDBCardTitle>{hotel.title}</MDBCardTitle>
                <MDBCardText>{hotel.description}</MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </Card>
        ))}
      </ScrollContainer>
    </Container>
  );
};

export default HotelCarousel;
