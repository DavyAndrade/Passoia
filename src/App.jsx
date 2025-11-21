import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Looks from "./components/Looks/Looks";
import News from "./components/News/News";
import Launches from "./components/Launches/Launches";
import "./reset.css";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Looks />
        <Launches />
        <News />
      </main>

      <Footer />
    </>
  );
}

export default App;
