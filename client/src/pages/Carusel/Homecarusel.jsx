import { useEffect } from "react";
import "./Carusel.css";
// import img1 from "../../assets/caruselimages/img1.jpg";
// import img2 from "../../assets/caruselimages/img2.jpg";
// import img3 from "../../assets/caruselimages/img3.jpg";
// import img4 from "../../assets/caruselimages/img4.jpg";
import h1 from "../../assets/HotelPics/H1.jpg";
import h2 from "../../assets/HotelPics/H2.jpg";
import h3 from "../../assets/HotelPics/H22.jpeg"; ///
import h4 from "../../assets/HotelPics/H23.jpeg";
import h5 from "../../assets/HotelPics/H25.jpeg";
const Homecarusel = () => {
  useEffect(() => {
    //step 1: get DOM
    let nextDom = document.getElementById("next");
    let prevDom = document.getElementById("prev");

    let carouselDom = document.querySelector(".carousel");
    let SliderDom = carouselDom.querySelector(".carousel .list");
    let thumbnailBorderDom = document.querySelector(".carousel .thumbnail");
    let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll(".item");
    let timeDom = document.querySelector(".carousel .time");

    thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
    let timeRunning = 3000;
    let timeAutoNext = 4000;

    nextDom.onclick = function () {
      showSlider("next");
    };

    prevDom.onclick = function () {
      showSlider("prev");
    };
    let runTimeOut;
    let runNextAuto = setTimeout(() => {
      nextDom.click();
    }, timeAutoNext);
    function showSlider(type) {
      let SliderItemsDom = SliderDom.querySelectorAll(".carousel .list .item");
      let thumbnailItemsDom = document.querySelectorAll(
        ".carousel .thumbnail .item"
      );

      if (type === "next") {
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add("next");
      } else {
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(
          thumbnailItemsDom[thumbnailItemsDom.length - 1]
        );
        carouselDom.classList.add("prev");
      }
      clearTimeout(runTimeOut);
      runTimeOut = setTimeout(() => {
        carouselDom.classList.remove("next");
        carouselDom.classList.remove("prev");
      }, timeRunning);

      clearTimeout(runNextAuto);
      runNextAuto = setTimeout(() => {
        nextDom.click();
      }, timeAutoNext);
    }
  }, []);
  return (
    <div className="caruselhead">
      <div>
        <header style={{ textAlign: "center" }} className="header">
          {/* <nav className="navbarin">
            <a href>Home</a>
            <a href>Contacts</a>
            <a href>Info</a>
          </nav> */}
          <p
            className="pp"
            style={{
              marginLeft: "5%",
              fontSize: "30px",
              color: "white",
              fontFamily: "cinzel",
              marginTop: "30px",
              paddingTop: "20px",
            }}
          >
            Book Anytime, Anyhwere In India
          </p>
        </header>
        {/* carousel */}
        <div className="carousel">
          {/* list item */}
          <div className="list">
            <div className="item">
              <img src={h1} />
              <div className="content">
                <div className="author"></div>
                <div className="title" style={{ fontFamily: "Inter" }}>
                  Radisson Blu Plaza
                </div>
                <div className="topic" style={{ fontFamily: "Inter" }}>
                  Spa Treatments, Gourmet Dining
                </div>
                <div className="des">
                  {/* lorem 50 */}
                  Nestled in the heart of the city, Radisson Blu Plaza offers a
                  blend of modern luxury and traditional charm. Guests can enjoy
                  breathtaking views, gourmet dining, and top-notch amenities.
                </div>
                <div className="buttons">
                  <button>SEE MORE</button>
                  <button>JOIN CLUB FUSION</button>
                </div>
              </div>
            </div>
            <div className="item">
              <img src={h2} />
              <div className="content">
                <div className="author"></div>
                <div className="title" style={{ fontFamily: "Inter" }}>
                  The Oberoi Udaivilas
                </div>
                <div className="topic" style={{ fontFamily: "Inter" }}>
                  Lake Views, Royal Experience
                </div>
                <div className="des">
                  Overlooking the serene Lake Pichola, The Oberoi Udaivilas is a
                  palatial resort that provides an oasis of tranquility and
                  opulence. The hotel's architecture and hospitality are
                  inspired by the royal heritage of Rajasthan.
                </div>
                <div className="buttons">
                  <button>SEE MORE</button>
                  <button>JOIN CLUB FUSION</button>
                </div>
              </div>
            </div>
            <div className="item">
              <img src={h3} />
              <div className="content">
                <div className="author"></div>
                <div className="title" style={{ fontFamily: "Inter" }}>
                  Taj Mahal Palace
                </div>
                <div className="topic" style={{ fontFamily: "Inter" }}>
                  Heritage Luxury, Iconic Views
                </div>
                <div className="des">
                  Located in Mumbai, the Taj Mahal Palace is an icon of Indian
                  hospitality and elegance. This heritage hotel offers a
                  luxurious stay with its exquisite interiors, exceptional
                  service, and rich history.
                </div>
                <div className="buttons">
                  <button>SEE MORE</button>
                  <button>JOIN CLUB FUSION</button>
                </div>
              </div>
            </div>
            <div className="item">
              <img src={h4} />
              <div className="content">
                <div className="author"></div>
                <div className="title" style={{ fontFamily: "Inter" }}>
                  JW Marriott Jaipur Resort & Spa
                </div>
                <div className="topic" style={{ fontFamily: "Inter" }}>
                  Cultural Heritage, Spa Services
                </div>
                <div className="des">
                  Set amidst the lush landscapes of Jaipur, JW Marriott offers a
                  blend of modern luxury and cultural heritage. The resort
                  features spacious rooms, world-class dining, and rejuvenating
                  spa services.
                </div>
                <div className="buttons">
                  <button>SEE MORE</button>
                  <button>JOIN CLUB FUSION</button>
                </div>
              </div>
            </div>
            <div className="item">
              <img src={h5} />
              <div className="content">
                <div className="author"></div>
                <div className="title" style={{ fontFamily: "Inter" }}>
                  ITC Grand Chola
                </div>
                <div className="topic" style={{ fontFamily: "Inter" }}>
                  Wellness Spa, Gourmet Cuisine
                </div>
                <div className="des">
                  Located in Chennai, ITC Grand Chola is a majestic hotel that
                  offers unparalleled luxury and sophistication. The hotel's
                  architecture is inspired by the Chola dynasty, and it provides
                  exceptional dining and wellness experiences.
                </div>
                <div className="buttons">
                  <button>SEE MORE</button>
                  <button>JOIN CLUB FUSION</button>
                </div>
              </div>
            </div>
          </div>
          {/* list thumnail */}
          <div className="thumbnail">
            <div className="item">
              <img src={h2} />
              <div className="content">
                <div className="title">Radisson Blu Plaza</div>
                <div className="description"></div>
              </div>
            </div>
            <div className="item">
              <img src={h3} />
              <div className="content">
                <div className="title">The Oberoi Udaivilas</div>
                <div className="description"></div>
              </div>
            </div>
            <div className="item">
              <img src={h4} />
              <div className="content">
                <div className="title">Taj Mahal Palace</div>
                <div className="description"></div>
              </div>
            </div>
            <div className="item">
              <img src={h5} />
              <div className="content">
                <div className="title">JW Marriott Jaipur Resort & Spa</div>
                <div className="description"></div>
              </div>
            </div>
            <div className="item">
              <img src={h1} />
              <div className="content">
                <div className="title">ITC Grand Chola</div>
                <div className="description"></div>
              </div>
            </div>
          </div>
          {/* next prev */}
          <div className="arrows">
            <button id="prev">&lt;</button>
            <button id="next">&gt;</button>
          </div>
          {/* time running */}
          <div className="time" />
        </div>
      </div>
    </div>
  );
};

export default Homecarusel;
