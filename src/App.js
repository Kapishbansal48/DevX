import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Founder from "./components/Founder/Founder";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      {/* Components */}
      <Navbar />
      <Home />
      <About />
      <Services />
      <Founder />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
