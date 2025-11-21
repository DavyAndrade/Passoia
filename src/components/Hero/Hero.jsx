import HeroImage from "../../assets/images/banner.png";
import "./hero.css";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <img src={HeroImage} alt="Banner" className="hero__image" />
    </section>
  );
}
