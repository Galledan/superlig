import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../styles/weeklymatch.scss";
function LastWeekMatch({week}) {
  const [matches, setMatches] = useState([]);

  const options = {
    method: "GET",
    url: "https://api-football-beta.p.rapidapi.com/fixtures",
    params: {
      season: "2023",
      round: `Regular Season - ${week}`,
      league: "203",
    },
    headers: {
      "X-RapidAPI-Key": "68244ba06cmsh6bb6ed9472833aap140085jsnaf0a73634369",
      "X-RapidAPI-Host": "api-football-beta.p.rapidapi.com",
    },
  };

  useEffect(() => {
    const getLeague = async () => {
      try {
        const response = await axios.request(options);
        setMatches(response.data.response);
      } catch (error) {
        console.error(error);
      }
    };
    
    getLeague()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [] );

  return (
    <div className="last-week-container">
        <h1>Geçen Haftanın Maçları</h1>
   
    <div className="matches">
        {matches.map((match) => (
            <div className="match">
            <div className="match-top"></div>
            <div className="match-mid">
              <div className="home"><img  src={match.teams.home.name === 'Fenerbahce' ? require('../../Assets/Clubs/fb.png') : match.teams.home.logo} alt="home"/></div>
              <p>{match.goals.home}</p>
              <p>-</p>
              <p>{match.goals.away}</p>
              <div className="away"><img  src={match.teams.away.name === 'Fenerbahce' ? require('../../Assets/Clubs/fb.png') : match.teams.away.logo} alt="away"/></div>
            </div>
            <div className="match-bottom">{match.fixture.status.short}</div>
          </div>
        ))}
      
    </div>
    </div>
  );
}

export default LastWeekMatch;
