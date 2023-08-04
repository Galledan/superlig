import React from "react";
import "../../styles/main.scss";
import Carousel from "../../Components/Carousel/Carousel";
import WeeklyMatch from "../../Components/WeeklyMatch/WeeklyMatch";
import Potm from "../../Components/Potm/Potm";
import GoalWeek from "../../Components/GoalWeek/GoalWeek";

function MainPage() {
  return (
    <div className="main">
      <div className="hot-news-container">
        <Carousel />
      </div>
      <div className="matches-container">
        <h1>Haftanın Maçları</h1>
        <WeeklyMatch />
      </div>
      <div className="potm-container">
        <div className="potm-banner">
          <img
            className="navbar-logo"
            src={require("../../Assets/logo.png")}
            alt="logo"
          />
          <div className="banner-text">
            <p>AYIN OYUNCUSU</p>
          </div>
        </div>
        <div className="potms">
          <Potm />
        </div>
      </div>
      <div className="gotw-container">
        <h1>Haftanın Golleri</h1>
          <GoalWeek />
        </div>
    </div>
  );
}

export default MainPage;
