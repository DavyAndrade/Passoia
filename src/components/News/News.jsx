import NewsImage from "../../assets/images/news/news.png";
import "./news.scss";

export default function News() {
  return (
    <section className="news scroll-container" id="news">
      <h2 className="news__title">Novidades para você</h2>

      <img src={NewsImage} alt="" className="news__image" />
    </section>
  );
}
