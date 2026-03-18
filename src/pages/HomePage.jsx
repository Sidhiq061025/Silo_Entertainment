import React from "react";
import Hero from "../components/Hero";
import Description from "../components/Description";
import Card from "../components/Card";
import Faq from "../components/Faq";
import Rules from "../components/Rules";

const HomePage = () => {
  return (
    <div className="page-root">
      <main className="page-shell">
        <Hero />
        <Description />
        <p className="themes-intro">
          Participants will develop a game based on one of the following themes:
        </p>
        <Card />
        <Faq />
        <Rules />
      </main>
    </div>
  );
};

export default HomePage;
