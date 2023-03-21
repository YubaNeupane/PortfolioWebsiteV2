import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import Footer from "./components/Footer";
import ParticleBackground from "react-particle-backgrounds";

const App = () => {
  const settings = {
    canvas: {
      canvasFillSpace: true,
      width: window.innerWidth,
      height: window.innerHeight,
      useBouncyWalls: true,
    },
    particle: {
      particleCount: 100,
      color: "#94ecbe",
      minSize: 2,
      maxSize: 5,
    },
    velocity: {
      directionAngle: 0,
      directionAngleVariance: 360,
      minSpeed: 0.1,
      maxSpeed: 1,
    },
    opacity: {
      minOpacity: 0,
      maxOpacity: 0.5,
      opacityTransitionTime: 3000,
    },
  };
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary scroll-smooth scrollbar-hide">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <div className="absolute">
            <ParticleBackground settings={settings} />
          </div>
          <Navbar />
          <Hero />
        </div>

        <About />
        <Experience />
        <Tech />
        <Works />
        {/* <Feedbacks /> */}

        <div className="relative z-0">
          <Contact />
          <Footer />

          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
