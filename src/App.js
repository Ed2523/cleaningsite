import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomeScreen from "./components/HomeScreen";
import Services from "./components/Services";
import GetQuote from "./components/GetQuote"
import Admin from "./components/Admin"
import Contact from "./components/Contact"
import AboutUs from "./components/AboutUs"

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main-section">
          <Routes>
            <Route path="/" element={<HomeScreen/>} exact />
            <Route path="/services" element={<Services/>} />
            <Route path="/getquote" element={<GetQuote/>} />
            <Route path="/aboutus" element={<AboutUs/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/admin" element={<Admin/>} />
          </Routes>
        </main>
        
      </div>
    </Router>
  );
}

export default App;
