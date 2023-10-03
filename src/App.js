import React, { useState } from "react";
import "./App.scss";
import Header from "./components/Header";
import NewTeamForm from "./components/NewTeamForm";
import Teams from "./components/Teams";
import TeamsContext from "./context/teamsContext";
import NewPlayersForm from "./components/NewPlayersForm";
import Players from "./components/Players";

function App() {
  const [currentPage, setCurrentPage] = useState("teams");
  const [teams, setTeams] = useState(
    JSON.parse(localStorage.getItem("teams")) || []
  );

  const changePage = (page) => {
    setCurrentPage(page);
  };

  return (
    <TeamsContext.Provider value={{ teams, setTeams }}>
      <Header />
      <div className="navbar">
        <button onClick={() => changePage("teams")}>Teams</button>
        <button onClick={() => changePage("new-team")}>New Team</button>
        {teams[0] && (
          <button onClick={() => changePage("new-player")}>New Player</button>
        )}
        <button onClick={() => changePage("players")}>Players</button>
      </div>
      <div className="content">
        {currentPage === "teams" && <Teams teams={teams} />}
        {currentPage === "new-team" && <NewTeamForm />}
        {currentPage === "new-player" && teams[0] && <NewPlayersForm />}
        {currentPage === "players" &&
          teams.map((team, id) => <Players key={id} id={id} />)}
      </div>
    </TeamsContext.Provider>
  );
}

export default App;
