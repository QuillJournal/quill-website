import Hero from "./components/Hero";
import Features from "./components/Features";
import Timeline from "./components/Timeline";
import AppPreview from "./components/AppPreview";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="p-10">
      <Hero />
      <Features />
      <Timeline />
      <AppPreview />
      <Footer/>
    </div>
  );
}

export default App;
