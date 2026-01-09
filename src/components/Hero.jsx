import "./Hero.css";
import { useEffect, useState } from "react";

const Hero = () => {
  return (
    <section className="hero-section" id="home">
      <div className="hero-overlay"></div>

      <div className="container hero-content">
        <div className="row align-items-center min-vh-100">
          <div
            className="col-lg-6 text-white"
            data-aos="fade-up"
          >
            <h1 className="hero-title">
              Madurai’s Trusted <br />
              <span>Solo Drop Taxi Service</span>
            </h1>

            <p className="hero-subtitle">
              One-way taxi rides from Madurai to anywhere in India.
              Clean cars, professional drivers, transparent pricing.
            </p>

            <div className="hero-features">
              <span>✔ 24/7 Service</span>
              <span>✔ No Return Fare</span>
              <span>✔ On-Time Pickup</span>
            </div>

            <div className="hero-buttons mt-4">
              <a href="#book" className="btn btn-warning btn-lg me-3">
                Book Now
              </a>
              <a href="#contact" className="btn btn-outline-light btn-lg">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
