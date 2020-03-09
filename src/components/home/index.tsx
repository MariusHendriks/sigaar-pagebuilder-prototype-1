import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

const Home: React.FC = () => {
  return (
    <div className="index__container">
      <div className="index__container__content">
        <h1>Welkom</h1>
        <h2>Maak hier je eigen professionele webpagina voor jou bedrijf.</h2>
        <Link to="/add">
          <button>Start</button>
        </Link>
      </div>
    </div>
  );
};
export default Home;
