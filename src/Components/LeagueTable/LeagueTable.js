import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/table.scss";

function LeagueTable() {
  const [standingsData, setStandingsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api-football-beta.p.rapidapi.com/standings",
          {
            params: {
              season: "2023",
              league: "203",
            },
            headers: {
              "X-RapidAPI-Key":
                "68244ba06cmsh6bb6ed9472833aap140085jsnaf0a73634369",
              "X-RapidAPI-Host": "api-football-beta.p.rapidapi.com",
            },
          }
        );

        // Assuming the response has a 'league' property with a 'standings' property
        const standings = response.data.response[0].league.standings || [];
        setStandingsData(standings[0]);
        console.log(standings);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="main-table">
      {standingsData.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th></th>
              <th>Takım</th>
              <th>Oynanan</th>
              <th>Galibiyet</th>
              <th>Beraberlik</th>
              <th>Mağlubiyet</th>
              <th>AG</th>
              <th>YG</th>
              <th>A</th>
              <th>Puan</th>
            </tr>
          </thead>
          <tbody>
            {standingsData.map((teamData, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <img src={teamData.team?.logo} height={50} alt="logo" />
                </td>
                <td className="team-name"> {teamData.team?.name || "N/A"}</td>
                <td>{teamData.all?.played || "N/A"}</td>
                <td>{teamData.all?.win || "N/A"}</td>
                <td>{teamData.all?.draw || "N/A"}</td>
                <td>{teamData.all?.lose || "N/A"}</td>
                <td>{teamData.all?.goals?.for || "N/A"}</td>
                <td>{teamData.all?.goals?.against || "N/A"}</td>
                <td>{teamData.goalsDiff}</td>
                <td>{teamData.points || "N/A"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default LeagueTable;
