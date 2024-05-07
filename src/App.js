import "./App.css";
import Header from "./components/Navbar";
import CaresoulsComponent from "./components/Caresouls";
import Service from "./components/Service";
import RopeCaresouls from "./components/RopeCaresouls";
import IndustryFocus from "./components/IndustryFocus";
import Counter from "./components/Counter";
import ChooseUs from "./components/ChooseUs";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import { useRef } from "react";

function App() {
  const chooseUsRef = useRef(null);
  const industryFocusRef = useRef(null);
  const contactUsRef = useRef(null);
  const homeRef = useRef(null);

  return (
    <div className="App">
      <Header
        chooseUsRef={chooseUsRef}
        industryFocusRef={industryFocusRef}
        contactUsRef={contactUsRef}
        homeRef={homeRef}
      />
      <div ref={homeRef}>
        <CaresoulsComponent />
      </div>
      <div className="p-4">
        <Service />
      </div>
      <RopeCaresouls />
      <div className="p-5" ref={industryFocusRef}>
        <IndustryFocus />
      </div>
      <div className="p-5">
        <Counter />
      </div>
      <div className="p-5" ref={chooseUsRef}>
        <ChooseUs />
      </div>
      <div className="p-5" ref={contactUsRef}>
        <ContactUs />
      </div>
      <div className="pt-5">
        <Footer />
      </div>
    </div>
  );
}

export default App;
