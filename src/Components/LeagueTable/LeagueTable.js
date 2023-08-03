import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/table.scss"

function LeagueTable() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://tffapi-1-y6918016.deta.app/live"
        );
        setTableData(response.data)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="main-table">
      <table>
        <thead>
          <tr>
            <th>#</th>
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
          {tableData.map((team, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td className="team-name">{team.name}</td>
              <td>{team.played}</td>
              <td>{team.wins}</td>
              <td>{team.draws}</td>
              <td>{team.losses}</td>
              <td>{team.goals_for}</td>
              <td>{team.goals_against}</td>
              <td>{team.average}</td>
              <td>{team.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default LeagueTable;
