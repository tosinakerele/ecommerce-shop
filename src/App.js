import "./App.css";
import { HiPlay } from "react-icons/hi2";
import NavBar from "./Components/NavBar";
import { Footer } from "./Components/Footer";
import { ContactForm } from "./Components/ContactForm";
import { Catalog } from "./Components/Catalog";
import { Logistics } from "./Components/Logistics";
import { NewCollection } from "./Components/NewCollection";

function App() {
  return (
    <main>
      <div className="container">
        <NavBar />
        <p id="contact_number">0809 984 6538</p>
        <div className="video__new-collection">
          <span>
            <HiPlay size={20} />
          </span>
          <p>
            view the new <br /> collection
          </p>
        </div>
        <h1 id="main_text">
          best <br /> inspiration
        </h1>
      </div>
      <NewCollection />
      <Logistics />
      <Catalog />
      <ContactForm />
      <Footer />
    </main>
  );
}

export default App;
