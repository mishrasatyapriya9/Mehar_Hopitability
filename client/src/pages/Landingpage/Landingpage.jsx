import "./Landingpage.css";
// import "./css/bootstrap.min.css";
// import "./css/owl.carousel.min.css";
// import "./css/themify-icons.css";
// import "./js/script";

import { useEffect } from "react";
import iphonex from "./images/iphonex.png";
import client_logos from "./images/client-logos.png";
import perspective_phone from "./images/perspective.png";
import appleicon from "./images/appleicon.png";
import client from "./images/client.png";
import dualphone from "./images/dualphone.png";
import graphic from "./images/graphic.png";
import logo from "./images/logo.png";
import playicon from "./images/playicon.png";
import screen1 from "./images/screen1.jpg";
import screen2 from "./images/screen2.jpg";
import screen3 from "./images/screen3.jpg";

import { Link } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";

const Landingpage = () => {
  useEffect(() => {
    // Fixed Menu - Header
    const menuscroll = () => {
      const navmenu = document.querySelector(".nav-menu");
      if (window.scrollY > 50) {
        navmenu.classList.add("is-scrolling");
      } else {
        navmenu.classList.remove("is-scrolling");
      }
    };

    menuscroll();
    window.addEventListener("scroll", menuscroll);

    // Navbar Close on Click
    const navbarLinks = document.querySelectorAll(
      ".navbar-nav > li:not(.dropdown) > a"
    );
    navbarLinks.forEach((link) => {
      link.addEventListener("click", () => {
        const navbarCollapse = document.querySelector(".navbar-collapse");
        navbarCollapse.classList.remove("show");
      });
    });

    // Navbar Toggle BG
    const siteNav = document.getElementById("navbar");
    siteNav.addEventListener("show.bs.collapse", () => {
      siteNav.closest(".nav-menu").classList.add("menu-is-open");
    });

    siteNav.addEventListener("hide.bs.collapse", () => {
      siteNav.closest(".nav-menu").classList.remove("menu-is-open");
    });

    // One Page Scrolling
    const scrollLinks = document.querySelectorAll(
      'a[href*="#"]:not([href="#"]):not([href="#0"]):not([data-toggle="tab"])'
    );
    scrollLinks.forEach((link) => {
      link.addEventListener("click", (event) => {
        if (
          window.location.pathname.replace(/^\//, "") ===
            link.pathname.replace(/^\//, "") &&
          window.location.hostname === link.hostname
        ) {
          let target = document.querySelector(link.hash);
          target = target
            ? target
            : document.querySelector(`[name=${link.hash.slice(1)}]`);
          if (target) {
            event.preventDefault();
            window.scrollTo({
              top: target.offsetTop,
              behavior: "smooth",
            });
            target.setAttribute("tabindex", "-1");
            target.focus();
          }
        }
      });
    });

    // Owl Carousel
    // Assuming you are using a carousel library that provides similar functionality to OWL Carousel
    const initCarousel = (selector, options) => {
      const elements = document.querySelectorAll(selector);
      elements.forEach((element) => {
        // Initialize the carousel here. The following is a placeholder.
        // Replace with your actual carousel initialization code.
        // For example: new Carousel(element, options);
      });
    };

    initCarousel(".testimonials", {
      items: 1,
      nav: true,
      dots: false,
      navText: [
        '<span class="ti-arrow-left"></span>',
        '<span class="ti-arrow-right"></span>',
      ],
    });

    initCarousel(".img-gallery", {
      nav: false,
      center: true,
      loop: true,
      autoplay: true,
      dots: true,
      navText: [
        '<span class="ti-arrow-left"></span>',
        '<span class="ti-arrow-right"></span>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 3,
        },
      },
    });
  }, []);
  return (
    <div>
      <div>
        {/* <header className="bg-gradient" id="home">
            <div className="container mt-5">
              <h1>Welcome to notezipper</h1>
              <p className="tagline">One safe place for all your notes. </p>
            </div>
            <Container className="buttonedit">
              <div className="center">
                <Link to="/Signin">
                  <button className="btn btn-outline-light btn1">Login</button>
                </Link>
                <Link to="/Register" className="btn">
                  <button className=" btn-primary"> Sign up</button>
                </Link>
              </div>
            </Container>

            <div className="img-holder mt-3">
              <img src={iphonex} alt="phone" className="img-fluid" />
            </div>
          </header>
          <div className="client-logos my-5">
            <div className="container text-center">
              <img
                src={client_logos}
                alt="client logos"
                className="img-fluid"
              />
            </div>
          </div> */}

        {/* Highlights */}

        <div className="section light-bg" id="features">
          <div className="container">
            <div className="section-title">
              <small>HIGHLIGHTS</small>
              <h3>Features you love</h3>
            </div>
            <div className="row">
              <div className="col-12 col-lg-4">
                <div className="card features">
                  <div className="card-body">
                    <div className="media">
                      <span className="ti-face-smile gradient-fill ti-3x mr-3" />
                      <div className="media-body">
                        <h4 className="card-title">Simple</h4>
                        <p className="card-text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Integer rutrum, urna eu pellentesque{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-4">
                <div className="card features">
                  <div className="card-body">
                    <div className="media">
                      <span className="ti-settings gradient-fill ti-3x mr-3" />
                      <div className="media-body">
                        <h4 className="card-title">Customize</h4>
                        <p className="card-text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Integer rutrum, urna eu pellentesque{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-4">
                <div className="card features">
                  <div className="card-body">
                    <div className="media">
                      <span className="ti-lock gradient-fill ti-3x mr-3" />
                      <div className="media-body">
                        <h4 className="card-title">Secure</h4>
                        <p className="card-text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Integer rutrum, urna eu pellentesque{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* // end .section */}

        {/* <div className="section">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 offset-lg-6">
                  <div className="box-icon">
                    <span className="ti-mobile gradient-fill ti-3x" />
                  </div>
                  <h2>Discover our App</h2>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Obcaecati vel exercitationem eveniet vero maxime ratione{" "}
                  </p>
                  <a href="#" className="btn btn-primary">
                    Read more
                  </a>
                </div>
              </div>
              <div className="perspective-phone">
                <img
                  src={perspective_phone}
                  alt="perspective phone"
                  className="img-fluid"
                />
              </div>
            </div>
          </div> */}

        {/* // Features .section */}

        <div className="section light-bg">
          <div className="container">
            <div className="section-title">
              <small>FEATURES</small>
              <h3>Do more with our app</h3>
            </div>
            <ul className="nav nav-tabs nav-justified" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  data-toggle="tab"
                  href="#communication"
                >
                  Communication
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#schedule">
                  Scheduling
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#messages">
                  Messages
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#livechat">
                  Live Chat
                </a>
              </li>
            </ul>
            <div className="tab-content">
              <div className="tab-pane fade show active" id="communication">
                <div className="d-flex flex-column flex-lg-row">
                  <img
                    src={graphic}
                    alt="graphic"
                    className="img-fluid rounded align-self-start mr-lg-5 mb-5 mb-lg-0"
                  />
                  <div>
                    <h2>Communicate with ease</h2>
                    <p className="lead">
                      Uniquely underwhelm premium outsourcing with proactive
                      leadership skills.{" "}
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer rutrum, urna eu pellentesque pretium, nisi nisi
                      fermentum enim, et sagittis dolor nulla vel sapien.
                      Vestibulum sit amet mattis ante. Ut placerat dui eu nulla
                      congue tincidunt ac a nibh. Mauris accumsan pulvinar lorem
                      placerat volutpat. Praesent quis facilisis elit. Sed
                      condimentum neque quis ex porttitor,
                    </p>
                    <p>
                      {" "}
                      malesuada faucibus augue aliquet. Sed elit est, eleifend
                      sed dapibus a, semper a eros. Vestibulum blandit vulputate
                      pharetra. Phasellus lobortis leo a nisl euismod, eu
                      faucibus justo sollicitudin. Mauris consectetur, tortor
                      sed tempor malesuada, sem nunc porta augue, in dictum arcu
                      tortor id turpis. Proin aliquet vulputate aliquam.
                    </p>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="schedule">
                <div className="d-flex flex-column flex-lg-row">
                  <div>
                    <h2>Scheduling when you want</h2>
                    <p className="lead">
                      Uniquely underwhelm premium outsourcing with proactive
                      leadership skills.{" "}
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer rutrum, urna eu pellentesque pretium, nisi nisi
                      fermentum enim, et sagittis dolor nulla vel sapien.
                      Vestibulum sit amet mattis ante. Ut placerat dui eu nulla
                      congue tincidunt ac a nibh. Mauris accumsan pulvinar lorem
                      placerat volutpat. Praesent quis facilisis elit. Sed
                      condimentum neque quis ex porttitor,
                    </p>
                    <p>
                      {" "}
                      malesuada faucibus augue aliquet. Sed elit est, eleifend
                      sed dapibus a, semper a eros. Vestibulum blandit vulputate
                      pharetra. Phasellus lobortis leo a nisl euismod, eu
                      faucibus justo sollicitudin. Mauris consectetur, tortor
                      sed tempor malesuada, sem nunc porta augue, in dictum arcu
                      tortor id turpis. Proin aliquet vulputate aliquam.
                    </p>
                  </div>
                  <img
                    src={graphic}
                    alt="graphic"
                    className="img-fluid rounded align-self-start mr-lg-5 mb-5 mb-lg-0"
                  />
                </div>
              </div>
              <div className="tab-pane fade" id="messages">
                <div className="d-flex flex-column flex-lg-row">
                  <img
                    src={graphic}
                    alt="graphic"
                    className="img-fluid rounded align-self-start mr-lg-5 mb-5 mb-lg-0"
                  />
                  <div>
                    <h2>Realtime Messaging service</h2>
                    <p className="lead">
                      Uniquely underwhelm premium outsourcing with proactive
                      leadership skills.{" "}
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer rutrum, urna eu pellentesque pretium, nisi nisi
                      fermentum enim, et sagittis dolor nulla vel sapien.
                      Vestibulum sit amet mattis ante. Ut placerat dui eu nulla
                      congue tincidunt ac a nibh. Mauris accumsan pulvinar lorem
                      placerat volutpat. Praesent quis facilisis elit. Sed
                      condimentum neque quis ex porttitor,
                    </p>
                    <p>
                      {" "}
                      malesuada faucibus augue aliquet. Sed elit est, eleifend
                      sed dapibus a, semper a eros. Vestibulum blandit vulputate
                      pharetra. Phasellus lobortis leo a nisl euismod, eu
                      faucibus justo sollicitudin. Mauris consectetur, tortor
                      sed tempor malesuada, sem nunc porta augue, in dictum arcu
                      tortor id turpis. Proin aliquet vulputate aliquam.
                    </p>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="livechat">
                <div className="d-flex flex-column flex-lg-row">
                  <div>
                    <h2>Live chat when you needed</h2>
                    <p className="lead">
                      Uniquely underwhelm premium outsourcing with proactive
                      leadership skills.{" "}
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer rutrum, urna eu pellentesque pretium, nisi nisi
                      fermentum enim, et sagittis dolor nulla vel sapien.
                      Vestibulum sit amet mattis ante. Ut placerat dui eu nulla
                      congue tincidunt ac a nibh. Mauris accumsan pulvinar lorem
                      placerat volutpat. Praesent quis facilisis elit. Sed
                      condimentum neque quis ex porttitor,
                    </p>
                    <p>
                      {" "}
                      malesuada faucibus augue aliquet. Sed elit est, eleifend
                      sed dapibus a, semper a eros. Vestibulum blandit vulputate
                      pharetra. Phasellus lobortis leo a nisl euismod, eu
                      faucibus justo sollicitudin. Mauris consectetur, tortor
                      sed tempor malesuada, sem nunc porta augue, in dictum arcu
                      tortor id turpis. Proin aliquet vulputate aliquam.
                    </p>
                  </div>
                  <img
                    src={graphic}
                    alt="graphic"
                    className="img-fluid rounded align-self-start mr-lg-5 mb-5 mb-lg-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* // end .section */}

        {/* <div className="section">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <img src={dualphone} alt="dual phone" className="img-fluid" />
                </div>
                <div className="col-md-6 d-flex align-items-center">
                  <div>
                    <div className="box-icon">
                      <span className="ti-rocket gradient-fill ti-3x" />
                    </div>
                    <h2>Launch your App</h2>
                    <p className="mb-4">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Obcaecati vel exercitationem eveniet vero maxime ratione{" "}
                    </p>
                    <a href="#" className="btn btn-primary">
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            </div>
              </div> */}

        {/* // Create ana account  .section */}

        <div className="section light-bg">
          <div className="container">
            <div className="row">
              <div className="col-md-8 d-flex align-items-center">
                <ul className="list-unstyled ui-steps">
                  <li className="media">
                    <div className="circle-icon mr-4">1</div>
                    <div className="media-body">
                      <h5>Create an Account</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer rutrum, urna eu pellentesque pretium obcaecati
                        vel exercitationem{" "}
                      </p>
                    </div>
                  </li>
                  <li className="media my-4">
                    <div className="circle-icon mr-4">2</div>
                    <div className="media-body">
                      <h5>Share with friends</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer rutrum, urna eu pellentesque pretium obcaecati
                        vel exercitationem eveniet
                      </p>
                    </div>
                  </li>
                  <li className="media">
                    <div className="circle-icon mr-4">3</div>
                    <div className="media-body">
                      <h5>Enjoy your life</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer rutrum, urna eu pellentesque pretium obcaecati
                        vel exercitationem{" "}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <img src={iphonex} alt="iphone" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>

        {/* // Testimonial .section */}

        <div className="section">
          <div className="container">
            <div className="section-title">
              <small>TESTIMONIALS</small>
              <h3>What our Customers Says</h3>
            </div>
            <div className="testimonials owl-carousel">
              <div className="testimonials-single">
                <img src={client} alt="client" className="client-img" />
                <blockquote className="blockquote">
                  Uniquely streamline highly efficient scenarios and 24/7
                  initiatives. Conveniently embrace multifunctional ideas
                  through proactive customer service. Distinctively
                  conceptualize 2.0 intellectual capital via user-centric
                  partnerships.
                </blockquote>
                <h5 className="mt-4 mb-2">Crystal Gordon</h5>
                <p className="text-primary">United States</p>
              </div>
              <div className="testimonials-single">
                <img src={client} alt="client" className="client-img" />
                <blockquote className="blockquote">
                  Uniquely streamline highly efficient scenarios and 24/7
                  initiatives. Conveniently embrace multifunctional ideas
                  through proactive customer service. Distinctively
                  conceptualize 2.0 intellectual capital via user-centric
                  partnerships.
                </blockquote>
                <h5 className="mt-4 mb-2">Crystal Gordon</h5>
                <p className="text-primary">United States</p>
              </div>
              <div className="testimonials-single">
                <img src={client} alt="client" className="client-img" />
                <blockquote className="blockquote">
                  Uniquely streamline highly efficient scenarios and 24/7
                  initiatives. Conveniently embrace multifunctional ideas
                  through proactive customer service. Distinctively
                  conceptualize 2.0 intellectual capital via user-centric
                  partnerships.
                </blockquote>
                <h5 className="mt-4 mb-2">Crystal Gordon</h5>
                <p className="text-primary">United States</p>
              </div>
            </div>
          </div>
        </div>

        {/* // Galary .section */}

        {/* <div className="section light-bg" id="gallery">
            <div className="container">
              <div className="section-title">
                <small>GALLERY</small>
                <h3>App Screenshots</h3>
              </div>
              <div className="img-gallery owl-carousel owl-theme">
                <img src={screen1} alt="image" />
                <img src={screen2} alt="image" />
                <img src={screen3} alt="image" />
                <img src={screen1} alt="image" />
              </div>
            </div>
          </div> */}

        {/* // PRICING CARDS  .section */}

        <div className="section" id="pricing">
          <div className="container">
            <div className="section-title">
              <small>PRICING</small>
              <h3>Upgrade to Pro</h3>
            </div>
            <div className="card-deck">
              {/* <div className="card pricing">
                  <div className="card-head">
                    <small className="text-primary">PERSONAL</small>
                    <span className="price">
                      $14<sub>/m</sub>
                    </span>
                  </div>
                  <ul className="list-group list-group-flush">
                    <div className="list-group-item">10 Projects</div>
                    <div className="list-group-item">5 GB Storage</div>
                    <div className="list-group-item">Basic Support</div>
                    <div className="list-group-item">
                      <del>Collaboration</del>
                    </div>
                    <div className="list-group-item">
                      <del>Reports and analytics</del>
                    </div>
                  </ul>
                  <div className="card-body">
                    <a href="#" className="btn btn-primary btn-lg btn-block">
                      Choose this Plan
                    </a>
                  </div>
                </div> */}
              <div className="card pricing popular">
                <div className="card-head">
                  <small className="text-primary">FOR TEAMS</small>
                  <span className="price">
                    $29<sub>/m</sub>
                  </span>
                </div>
                <ul className="list-group list-group-flush">
                  <div className="list-group-item">Unlimited Projects</div>
                  <div className="list-group-item">100 GB Storage</div>
                  <div className="list-group-item">Priority Support</div>
                  <div className="list-group-item">Collaboration</div>
                  <div className="list-group-item">Reports and analytics</div>
                </ul>
                <div className="card-body">
                  <a href="#" className="btn btn-primary btn-lg btn-block">
                    Choose this Plan
                  </a>
                </div>
              </div>
              <div className="card pricing popular">
                <div className="card-head">
                  <small className="text-primary">FOR TEAMS</small>
                  <span className="price">
                    $29<sub>/m</sub>
                  </span>
                </div>
                <ul className="list-group list-group-flush">
                  <div className="list-group-item">Unlimited Projects</div>
                  <div className="list-group-item">100 GB Storage</div>
                  <div className="list-group-item">Priority Support</div>
                  <div className="list-group-item">Collaboration</div>
                  <div className="list-group-item">Reports and analytics</div>
                </ul>
                <div className="card-body">
                  <a href="#" className="btn btn-primary btn-lg btn-block">
                    Choose this Plan
                  </a>
                </div>
              </div>
              <div className="card pricing popular">
                <div className="card-head">
                  <small className="text-primary">FOR TEAMS</small>
                  <span className="price">
                    $29<sub>/m</sub>
                  </span>
                </div>
                <ul className="list-group list-group-flush">
                  <div className="list-group-item">Unlimited Projects</div>
                  <div className="list-group-item">100 GB Storage</div>
                  <div className="list-group-item">Priority Support</div>
                  <div className="list-group-item">Collaboration</div>
                  <div className="list-group-item">Reports and analytics</div>
                </ul>
                <div className="card-body">
                  <a href="#" className="btn btn-primary btn-lg btn-block">
                    Choose this Plan
                  </a>
                </div>
              </div>
              {/* <div className="card pricing">
                  <div className="card-head">
                    <small className="text-primary">ENTERPRISE</small>
                    <span className="price">
                      $249<sub>/m</sub>
                    </span>
                  </div>
                  <ul className="list-group list-group-flush">
                    <div className="list-group-item">Unlimited Projects</div>
                    <div className="list-group-item">Unlimited Storage</div>
                    <div className="list-group-item">Collaboration</div>
                    <div className="list-group-item">Reports and analytics</div>
                    <div className="list-group-item">Web hooks</div>
                  </ul>
                  <div className="card-body">
                    <a href="#" className="btn btn-primary btn-lg btn-block">
                      Choose this Plan
                    </a>
                  </div>
                </div> */}
            </div>
            {/* // end .pricing */}
          </div>
        </div>

        {/* // Frequently asked questions .section */}
        <div className="section pt-0">
          <div className="container">
            <div className="section-title">
              <small>FAQ</small>
              <h3>Frequently Asked Questions</h3>
            </div>
            <div className="row pt-4">
              <div className="col-md-6">
                <h4 className="mb-3">Can I try before I buy?</h4>
                <p className="light-font mb-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer rutrum, urna eu pellentesque pretium, nisi nisi
                  fermentum enim, et sagittis dolor nulla vel sapien. Vestibulum
                  sit amet mattis ante.{" "}
                </p>
                <h4 className="mb-3">What payment methods do you accept?</h4>
                <p className="light-font mb-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer rutrum, urna eu pellentesque pretium, nisi nisi
                  fermentum enim, et sagittis dolor nulla vel sapien. Vestibulum
                  sit amet mattis ante.{" "}
                </p>
              </div>
              <div className="col-md-6">
                <h4 className="mb-3">Can I change my plan later?</h4>
                <p className="light-font mb-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer rutrum, urna eu pellentesque pretium, nisi nisi
                  fermentum enim, et sagittis dolor nulla vel sapien. Vestibulum
                  sit amet mattis ante.{" "}
                </p>
                <h4 className="mb-3">Do you have a contract?</h4>
                <p className="light-font mb-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer rutrum, urna eu pellentesque pretium, nisi nisi
                  fermentum enim, et sagittis dolor nulla vel sapien. Vestibulum
                  sit amet mattis ante.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* // end .section */}

        <div className="section bg-gradient">
          <div className="container">
            <div className="call-to-action">
              <div className="box-icon">
                <span className="ti-mobile gradient-fill ti-3x" />
              </div>
              <h2>Download Anywhere</h2>
              <p className="tagline">
                Available for all major mobile and desktop platforms.
                Rapidiously visualize optimal ROI rather than enterprise-wide
                methods of empowerment.{" "}
              </p>
              <div className="my-4">
                <a href="#" className="btn btn-light">
                  <img src={appleicon} alt="icon" /> App Store
                </a>
                <a href="#" className="btn btn-light">
                  <img src={playicon} alt="icon" /> Google play
                </a>
              </div>
              <p className="text-primary">
                <small>
                  <i>*Works on iOS 10.0.5+, Android Kitkat and above. </i>
                </small>
              </p>
            </div>
          </div>
        </div>

        {/* // end .section */}

        {/* <div className="light-bg py-5" id="contact">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 text-center text-lg-left">
                  <p className="mb-2">
                    {" "}
                    <span className="ti-location-pin mr-2" /> 1485 Pacific St,
                    Brooklyn, NY 11216 USA
                  </p>
                  <div className=" d-block d-sm-inline-block">
                    <p className="mb-2">
                      <span className="ti-email mr-2" />{" "}
                      <a className="mr-4" href="mailto:support@mobileapp.com">
                        support@mobileapp.com
                      </a>
                    </p>
                  </div>
                  <div className="d-block d-sm-inline-block">
                    <p className="mb-0">
                      <span className="ti-headphone-alt mr-2" />{" "}
                      <a href="tel:51836362800">518-3636-2800</a>
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="social-icons">
                    <a href="#">
                      <span className="ti-facebook" />
                    </a>
                    <a href="#">
                      <span className="ti-twitter-alt" />
                    </a>
                    <a href="#">
                      <span className="ti-instagram" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

        {/* // end .section */}
        <footer className=""></footer>
        {/* jQuery and Bootstrap */}
        {/* Plugins JS */}
        {/* Custom JS */}
        {/* <script src="js/jquery-3.2.1.min.js"></script>
          <script src="js/bootstrap.bundle.min.js"></script>

          <script src="js/owl.carousel.min.js"></script>

          <script src="js/script.js"></script> */}
      </div>
    </div>
  );
};
export default Landingpage;
