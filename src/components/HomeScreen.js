import React from "react";
import welcome from "../images/welcome.png";
import "./HomeScreen.scss";

function HomeScreen() {
  return (
    <div>
      <section className="welcome-section">
        <h1 className="welcome-section-title">SO FRESH AND SO CLEAN CLEAN!</h1>
        <div className="welcome-section-img-container">
          <img src={welcome} className="welcome-section-img" />
        </div>
      </section>
    </div>
  );
}

export default HomeScreen;
