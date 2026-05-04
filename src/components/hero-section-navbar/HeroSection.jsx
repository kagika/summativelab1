import Navbar from "./navbar";
import "./HeroSection.css";
function HeroSection() {
  return (
    <>
      <section className="hero-section">
        <div className="overlay">
          {/* Navigation bar  */}
          <div className="hero-section-layedover">
            <Navbar />
            <section className="hero-content">
                <h1>We Build Things That Matter,</h1>
                <h3>We're a full-service creative agency turning ambitious ideas into stunning digital realities — from brand identities to immersive web experiences.</h3>
                <button>Start a Project</button>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
