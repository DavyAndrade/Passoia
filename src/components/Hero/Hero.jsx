import HeroImage from "../../assets/images/hero/hero.png";
import "./hero.scss";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <img src={HeroImage} alt="Banner" className="hero__image" />
    </section>
  );
}
