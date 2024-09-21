import React from "react";
import Header from "../components/Header";
import Services from "../components/Services";
import Experiences from "../components/Experiences";
import MissionAndValues from "../components/MissionAndValues";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Services />
      <Experiences />
      <MissionAndValues />
    </div>
  );
};

export default HomePage;
