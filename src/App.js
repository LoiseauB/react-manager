import React, { useState } from "react";
import "./App.scss";
import Header from "./components/Header";
import NewTeamForm from "./components/NewTeamForm";
import Teams from "./components/Teams";
import TeamsContext from "./context/teamsContext";
import NewPlayersForm from "./components/NewPlayersForm";
import Players from "./components/Players";
import PlayerContext from "./context/playerContext";
import EditPlayerForm from "./components/EditPlayerForm";
import PageContext from "./context/pageContext";

function App() {
  const [currentPage, setCurrentPage] = useState("teams");
  const [teams, setTeams] = useState(
    JSON.parse(localStorage.getItem("teams")) || []
  );
  const [playerId, setPlayerId] = useState(null);
  const [teamId, setTeamId] = useState(null);

  return (
    <PageContext.Provider value={{ setCurrentPage }}>
      <TeamsContext.Provider value={{ teams, setTeams, setTeamId }}>
        <Header />
        <div className="navbar">
          <button onClick={() => setCurrentPage("teams")}>Teams</button>
          <button onClick={() => setCurrentPage("new-team")}>New Team</button>
          {teams[0] && (
            <button onClick={() => setCurrentPage("new-player")}>New Player</button>
          )}
          <button onClick={() => setCurrentPage("players")}>Players</button>
        </div>
        <PlayerContext.Provider value={{ playerId, setPlayerId }}>
          <div className="content">
            {currentPage === "teams" && <Teams teams={teams} />}
            {currentPage === "new-team" && <NewTeamForm />}
            {currentPage === "new-player" && teams[0] && <NewPlayersForm />}
            {currentPage === "players" &&
              teams.map((team, id) => <Players key={id} id={id} />
            )}
            {currentPage === 'edit-player' && <EditPlayerForm teamId={teamId}/> }
          </div>
        </PlayerContext.Provider>
      </TeamsContext.Provider>
    </PageContext.Provider>
  );
}

export default App;
