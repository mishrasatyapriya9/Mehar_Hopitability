import React from 'react';
import "./Footer.css";
import logo from "../../assets/icon Mehar HSMK (1).svg"
import { FaShoppingCart } from "react-icons/fa";
//<FaShoppingCart />
import { NavLink,Link } from 'react-router-dom'
///Navlink is used insted of a tag
// const Header = () => {
//   return (
//     <>
// <nav className="navbar navbar-expand-lg navbar-light bg-light">
//   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
//     <span className="navbar-toggler-icon" />
//   </button>
//   <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
//     <Link to='/' className="navbar-brand" href="#"><FaShoppingCart /> Satya Ecommerece</Link>
//     <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
//       <li className="nav-item active">
//         <NavLink to='/' className="nav-link" href="#"> Home <span className="sr-only">(current)</span></NavLink>
//       </li>
      
//      <li className="nav-item dropdown">
//               <NavLink className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//               Category
//               </NavLink>
//               <div className="dropdown-menu" aria-labelledby="navbarDropdown">
//                 <NavLink className="dropdown-item" href="#">Action</NavLink>
//                 <NavLink className="dropdown-item" href="#">Another action</NavLink>
//               </div>
//       </li>
//       <li className="nav-item">
//         <NavLink to='/Register' className="nav-link" href="#">Register</NavLink>
//       </li>
//       <li className="nav-item">
//         <NavLink to='/Signin' className="nav-link" href="#">Signin</NavLink>
//       </li>
//       <li className="nav-item">
//         <NavLink to='/cart' className="nav-link" href="#">Cart(0)</NavLink>
//       </li>
//     </ul>
//     {/* <form className="form-inline my-2 my-lg-0">
//       <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
//       <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//     </form> */}
//   </div>
// </nav>

//     </>
//   )
// }
// export default Header
// import logo from "../../assets/bubble-gum-five-star-hotel-and-passport-with-travel-tickets.png"
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import icon from "../../assets/navbaricon/notebook.gif";
import "./Header.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from '@mui/material';


function Header({ scrollToComponent }) {
  const [isSticky, setIsSticky] = useState(false);
  const navigate = useNavigate();
  const handleContact = () => {
    // Logic to scroll to ComponentB
    const element = document.getElementById("contactus");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleService = () => {
    // Logic to scroll to ComponentB
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handlePrice = () => {
    // Logic to scroll to ComponentB
    const element = document.getElementById("priceing");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) {
        // Adjust the value as needed
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={isSticky ? "sticky" : ""}>
      <Navbar
        expand="lg"
        className="bg-body-tertiary background navbar"
        bg="primary"
        varient="dark"
      >
        <Container fluid>
          <img src={logo} alt="" className="icon" />
          <Navbar.Brand>
            <Link to="/">
              {" "}
              <h5 style={{ color: "black" }} className="textmehar">
                Mehar Hospitality Services
              </h5>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <div className="d-flex justify-content-between w-100">
              <div>
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: "100px" }}
                  navbarScroll
                >
                  <Nav.Link>
                    <Link to="/" >
                      {" "}
                      <h6 style={{ color: "black" }}>Home</h6>
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="/" onClick={() => scrollToComponent("services")}>
                      {" "}
                      <h6 style={{ color: "black" }}>Services</h6>
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="/">
                      {" "}
                      <h6
                        style={{ color: "black" }}
                        onClick={() => scrollToComponent("pricing")}
                      >
                        Pricing
                      </h6>
                    </Link>
                  </Nav.Link>
                  <Nav.Link to="/aboutus">
                    {" "}
                    <Link to="/aboutus">
                      <h6 style={{ color: "black" }}>AboutUs</h6>
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="/">
                      {" "}
                      <h6
                        style={{ color: "black" }}
                        onClick={() => scrollToComponent("contact")}
                      >
                        Contact us
                      </h6>
                    </Link>
                  </Nav.Link>
                  {/* <NavDropdown title="Checkout" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">
                      My Profile
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      onClick={() => {
                        localStorage.clear("userinfo");
                        navigate("/");
                      }}
                    >
                      Logout
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Contact me
                    </NavDropdown.Item>
                  </NavDropdown> */}
                  {/* <Nav.Link href="#" disabled>
                  Link
                </Nav.Link> */}
                </Nav>
              </div>
              <div>
                {/* <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="danger">Search</Button>
                </Form> */}
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;

