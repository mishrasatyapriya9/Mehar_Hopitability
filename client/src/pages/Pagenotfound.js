import React from 'react'
import Layout from '../components/Layout/Layout.js'
import { Link } from 'react-router-dom'
const Pagenotfound = () => {
  return (
    <div title={"Pagenot found "}>
      <div className="pnf text-center pagenotfound">
        <h1 className="pnf-title ">404</h1>
        <h2 className="pnf-heading">Page not found</h2>
        <Link
          className="text-center pnf-btn"
          to="/"
          style={{ fontSize: "35px", fontWeight: "600" }}
        >
          Go back to home
        </Link>
        <p style={{ fontSize: "20px", color: "black" }}>
          Any Technical Issue Contact <i className="icon_heart" />{" "}
          <a
            href="https://www.linkedin.com/in/satyapriya-mishra-3a95a4223/"
            target="_blank"
          >
            <h6 style={{ fontSize: "15px", color: "red" }}>
              SATYAPRIYA MISHRA
            </h6>
          </a>
        </p>
       
        <br />
        <p style={{ fontSize: "20px", color: "black" }}>
          Developed by<i className="icon_heart" />{" "}
          <a
            href="https://www.linkedin.com/in/satyapriya-mishra-3a95a4223/"
            target="_blank"
          >
            <h6 style={{ fontSize: "15px" }}>SATYAPRIYA MISHRA</h6>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Pagenotfound