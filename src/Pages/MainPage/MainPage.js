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
    const intervalId = setInterval(() => {
      // Get today's date
      const today = new Date();

      // Check if today is Tuesday
      if (today.getDay() === 2) {  // 0 is Sunday, 1 is Monday, ..., 6 is Saturday
        // Increase the counter
        setWeek((prevWeek) => prevWeek + 1);
      }
    }, 24 * 60 * 60 * 1000);  // Check every 24 hours

    // Clean up the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []); 

 
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
