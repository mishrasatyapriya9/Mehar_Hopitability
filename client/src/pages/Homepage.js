import React from "react";
import { Element, scroller } from "react-scroll";
import Layout from "../components/Layout/Layout.js";
import Contact from "./Contact.js";
import Carusel from "./Carusel/Homecarusel.jsx";
import Contact2 from "./Contact2/Contactform.jsx";
import Header from "../components/Layout/Header.js";
import Footer from "../components/Layout/Footer.js";
import PricingTable from "./PricingTable/Pricingcard.jsx";
import Reviews from "./Tesimonials/Testimonial.jsx";
import FacilityProvide from "../pages/FacilityProvide/Facility.jsx";
import Intro from "../pages/Introduction/Intro.jsx";
import CardSliding from "../pages/HotelCardSliding/Cardsliding.jsx";
import LogoScrolling from "../pages/LogoScrollingMarqueeEffect/Logoscrolling.jsx";
import Services from "../pages/Services/Services.jsx";

const scrollToComponent = (component) => {
  scroller.scrollTo(component, {
    duration: 50,
    delay: 0,
    smooth: "easeInOutQuart",
  });
};

const Homepage = () => {
  return (
    <div>
      <Header scrollToComponent={scrollToComponent} />
      <Carusel />
      <Intro />
      <Element name="services">
        <Services />
      </Element>
      <CardSliding />
      <FacilityProvide />
      <LogoScrolling />
      <Element name="pricing">
        <PricingTable />
      </Element>
      <Reviews />
      <Element name="contact">
        <Contact2 />
      </Element>
      <Footer />
    </div>
  );
};

export default Homepage;
