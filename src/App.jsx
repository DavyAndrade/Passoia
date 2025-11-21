import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import "./reset.css";
import "./App.css";
import Looks from "./components/Looks/Looks";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Looks />
      </main>

      <Footer />
    </>
  );
}

export default App;
