import "./services.css";
import { FaTaxi, FaPlaneDeparture, FaRoute, FaPlaceOfWorship } from "react-icons/fa";

const Services = () => {
  return (
    <div className="services-section">
      <div className="services-header" data-aos="fade-up">
        <h2>Our Services</h2>
        <p>
          Reliable outstation and one-way taxi services from Madurai,
          designed for comfort, safety, and fair pricing.
        </p>
      </div>

      <div className="services-grid">
        <div className="service-card" data-aos="fade-up" data-aos-delay="100">
          <FaTaxi className="service-icon" />
          <h3>One-Way Outstation Taxi</h3>
          <p>
            Travel from Madurai to any destination with one-way fare.
            No return charges, no hidden costs.
          </p>
        </div>

        <div className="service-card" data-aos="fade-up" data-aos-delay="200">
          <FaPlaneDeparture className="service-icon" />
          <h3>Airport Drop (Outstation)</h3>
          <p>
            Hassle-free airport drops to Trichy, Coimbatore, and other
            major airports with punctual service.
          </p>
        </div>

        <div className="service-card" data-aos="fade-up" data-aos-delay="300">
          <FaRoute className="service-icon" />
          <h3>Inter-District Travel</h3>
          <p>
            Comfortable taxi services from Madurai to nearby districts
            for work, family, or medical travel.
          </p>
        </div>

        <div className="service-card" data-aos="fade-up" data-aos-delay="400">
          <FaPlaceOfWorship className="service-icon" />
          <h3>Pilgrimage Trips</h3>
          <p>
            Special outstation trips to temples like Rameswaram,
            Palani, Tiruchendur, and more.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
