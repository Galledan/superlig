import React, { useEffect, useState } from "react";
import "../../styles/main.scss";
import Carousel from "../../Components/Carousel/Carousel";
import WeeklyMatch from "../../Components/WeeklyMatch/WeeklyMatch";
import Potm from "../../Components/Potm/Potm";
import GoalWeek from "../../Components/GoalWeek/GoalWeek";
import LastWeekMatch from "../../Components/LastWeekMatch/LastWeekMatch";

function MainPage() {

  const [week, setWeek] = useState(27);


  useEffect(() => {
    const changeWeek = () => {
      const todaysDate = new Date();

      const today = todaysDate.getDay()
      if(today === 2){
        setWeek((prevWeek) => prevWeek + 1);
      }
    }

    changeWeek()
  },[]);

 
  return (
    <div className="main">
      <div className="hot-news-container">
        <Carousel />
      </div>
      <div className="matches-container">
        <LastWeekMatch week={(week - 1)} />
        <WeeklyMatch week={week}/>
      </div>
      <div className="potm-container">
        <div className="potm-banner">
          <img
            className="navbar-logo"
            src={require("../../Assets/logo.png")}
            alt="logo"
          />
          <div className="banner-text">
            <p>AYIN OYUNCUSU OYLAMASI</p>
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
