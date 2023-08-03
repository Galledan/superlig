import React from "react";
import "../../styles/stattable.scss";

function StatTable(props) {
  const teams = [
    {
      name: "Fenerbahçe",
      goals: 62,
      possesion: 54,
      red_cards: 3,
      backgroundColor: "#002749",
      color: "#ffef00",
      image: require("../../Assets/Clubs/fb.png")
    },
    {
      name: "Beşiktaş",
      goals: 58,
      possesion: 52,
      red_cards: 5,
      backgroundColor: "#000000",
      color: "#ffffff",
      image: require("../../Assets/Clubs/bjk.png"),
    },
    {
      name: "Galatasaray",
      goals: 60,
      possesion: 60,
      red_cards: 4,
      backgroundColor: "#fdb912",
      color: "#a90432",
      image: require("../../Assets/Clubs/gs.png"),
    },
    {
      name: "Trabzonspor",
      goals: 50,
      possesion: 50,
      red_cards: 4,
      backgroundColor: "#a41d34",
      color: "#14c0f1",
      image: require("../../Assets/Clubs/ts.png"),
    },
    {
      name: "Başakşehir",
      goals: 48,
      possesion: 63,
      red_cards: 0,
      backgroundColor: "#1e3a58",
      color: "#ed5e27",
      image: require("../../Assets/Clubs/bşk.png"),
    },
    {
      name: "Adana Demirspor",
      goals: 47,
      possesion: 49,
      red_cards: 4,
      backgroundColor: "#001299",
      color: "#ffffff",
      image: require("../../Assets/Clubs/ads.png"),
    },
    {
      name: "Antalyaspor",
      goals: 43,
      possesion: 50,
      red_cards: 3,
      backgroundColor: "#FF0000",
      color: "#ffffff",
      image: require("../../Assets/Clubs/ant.png"),
    },
    {
      name: "Kayserispor",
      goals: 35,
      possesion: 51,
      red_cards: 2,
      backgroundColor: "#cc0001",
      color: "#ffcc00",
      image: require("../../Assets/Clubs/kay.png"),
    },
    {
      name: "Alanyaspor",
      goals: 40,
      possesion: 46,
      red_cards: 2,
      backgroundColor: "#42a13f",
      color: "#f58220",
      image: require("../../Assets/Clubs/ala.png"),
    },
    {
      name: "Hatayspor",
      goals: 30,
      possesion: 40,
      red_cards: 1,
      backgroundColor: "#800000",
      color: "#ffffff",
      image: require("../../Assets/Clubs/hty.png"),
    },
  ];
  const goalsData = teams.map((team) => ({
    name: team.name,
    value: team.goals,
    backgroundColor: team.backgroundColor,
    color: team.color,
    image: team.image
  }));
  const possesionData = teams.map((team) => ({
    name: team.name,
    value: team.possesion,
    backgroundColor: team.backgroundColor,
    color: team.color,
    image: team.image
  }));
  const redCardsData = teams.map((team) => ({
    name: team.name,
    value: team.red_cards,
    backgroundColor: team.backgroundColor,
    color: team.color,
    image: team.image
  }));

  let dataToDisplay;
  if (props.type === "Goller") {
    dataToDisplay = goalsData;
  } else if (props.type === "Topla Oynama") {
    dataToDisplay = possesionData;
  } else if (props.type === "Kırmızı Kartlar") {
    dataToDisplay = redCardsData;
  } else {
    return <div>Unknown stat type: {props.type}</div>;
  }
  if (dataToDisplay) {
    dataToDisplay.sort((a, b) => b.value - a.value);
  }

  return (
    <div className="stat-table-wrapper">
      <h2>{props.type}</h2>
      <div className="stat-table">
        {dataToDisplay !== undefined && (
          <div
            key={dataToDisplay[0].name}
            className="table-hero"
            style={{
              backgroundColor: dataToDisplay[0].backgroundColor,
              color: dataToDisplay[0].color,
            }}
          >
            <img height={90} src={dataToDisplay[0].image} alt="logo" />
            <div className="table-hero-text">
            <h2>1.</h2>
            <h2>{dataToDisplay[0].name}</h2>
            <h2>{dataToDisplay[0].value}</h2>
            </div>
           
          </div>
        )}
        <div className="table-others">
          {dataToDisplay.slice(1).map((item, i) => (
            <div key={item.name} className="table-normal">
              <p>{i + 2}.</p>
              <p>{item.name}</p>
              <p>{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StatTable;
