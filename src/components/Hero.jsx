import HeroImage from "../assets/hero.png";
import { LinkedIn, YouTube, Reddit, Instagram } from "@mui/icons-material";

export default function Hero() {
  return (
    <section className="hero-wrap">
      <img src={HeroImage} alt="Silo GameJam hero" className="hero-image" />
      <div className="hero-overlay" aria-hidden="true" />

      <div className="hero-description-bar">
        <h2 className="section-heading hero-section-heading">
          GameJam Description
        </h2>

        <div className="social-row" aria-label="Social links">
          <a href="#" aria-label="LinkedIn">
            <LinkedIn fontSize="medium" />
          </a>
          <span className="social-divider" aria-hidden="true" />
          <a href="#" aria-label="YouTube">
            <YouTube fontSize="medium" />
          </a>
          <span className="social-divider" aria-hidden="true" />
          <a href="#" aria-label="Reddit">
            <Reddit fontSize="medium" />
          </a>
          <span className="social-divider" aria-hidden="true" />
          <a href="#" aria-label="Instagram">
            <Instagram fontSize="medium" />
          </a>
        </div>
      </div>
    </section>
  );
}
