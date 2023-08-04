import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/table.scss";

function LeagueTable() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://tffapi-1-y6918016.deta.app/live"
        );
        setTableData(response.data);
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
            <th className="hidden-phone">Oynanan</th>
            <th className="hidden-phone">Galibiyet</th>
            <th className="hidden-phone">Beraberlik</th>
            <th className="hidden-phone">Mağlubiyet</th>
            <th className="hidden-phone">AG</th>
            <th className="hidden-phone">YG</th>
            <th className="hidden-phone">A</th>
            <th>Puan</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((team, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td className="team-name">{team.name}</td>
              <td className="hidden-phone">{team.played}</td>
              <td className="hidden-phone">{team.wins}</td>
              <td className="hidden-phone">{team.draws}</td>
              <td className="hidden-phone">{team.losses}</td>
              <td className="hidden-phone">{team.goals_for}</td>
              <td className="hidden-phone">{team.goals_against}</td>
              <td className="hidden-phone">{team.average}</td>
              <td>{team.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default LeagueTable;
