import React, { useState } from "react";
import "../../styles/gotw.scss";

function GoalWeek() {
  const goals = [
    {
      link: "https://switch.dt.ercdn.com/api/er/Get?ai=636&ar=ligtvcomtr_tauri_tsl_20222023_35_gs2siv0lig&ak=null&switch=castup&customerid=1&format=4&action=redirect&secure=1",
      name: "Mauro Icardi",
      img: "https://iasbh.tmgrup.com.tr/456f16/0/0/0/0/0/0?u=https://isbh.tmgrup.com.tr/sb/album/2023/07/28/1690542967435.jpg&mw=600"
    },
    {
      link: "https://switch.dt.ercdn.com/api/er/Get?ai=636&ar=ligtvcomtr_tauri_tsl_20222023_36_fb1ant0lig&ak=null&switch=castup&customerid=1&format=4&action=redirect&secure=1",
      name: "Enner Valencia",
      img:"https://cdn.ntvspor.net/0088c068ac004c4e81823436fce7f98a.jpg?mode=crop&w=940&h=626"
    },
    {
      link: "https://switch.dt.ercdn.com/api/er/Get?ai=636&ar=ligtvcomtr_tauri_tsl_20222023_38_bjk2kon0lig&ak=null&switch=castup&customerid=1&format=4&action=redirect&secure=1",
      name: "Jackson Muleka",
      img:"https://img3.aksam.com.tr/imgsdisk/2023/05/04/t25_jackson-mulekaya-talip-va-391.jpg"
    },
  ];

  const [selectedVideo, setSelectedVideo] = useState(goals[0].link);
  const [goalName, setGoalName] = useState(goals[0].name);

  const handleVideoChange = (videoId, newGoal) => {
    setSelectedVideo(videoId);
    setGoalName(newGoal);
  };

  return (
    <div className="gotw">
      <div className="goal-video">
        <iframe
          id="video-iframe"
          src={selectedVideo}
          frameborder="0"
          allowfullscreen
          title="goal"
        ></iframe>
        <p>{goalName}</p>
      </div>
      <div className="video-selector">
        {goals.map((goal, i) => (
          <div
            className="video-option"
            onClick={() => handleVideoChange(goal.link, goal.name)}
          >
            <img src={goal.img} alt={goal.name}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GoalWeek;
