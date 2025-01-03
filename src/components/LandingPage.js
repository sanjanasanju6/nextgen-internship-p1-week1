import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="content">
        <div className="logo-container">
          <img src="https://images-platform.99static.com//bAxzB300pGAVOoAalSIE07qDIKI=/0x0:2000x2000/fit-in/500x500/projects-files/76/7697/769781/ba912989-25a6-489c-85c6-5204fec2416d.jpg" alt="FusionWork Logo" className="logo" />
        </div>
        <h1 className="title">Welcome to <span>FusionWork</span></h1>
        <p className="tagline">Create • Collaborate • Conquer</p>
        <div className="button-group">
          <Link to="/login">
            <button className="btn btn-primary">Login</button>
          </Link>
          <Link to="/register">
            <button className="btn btn-secondary">Register</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;

