import React, { useState , useEffect} from "react";
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
import EditTeamForm from "./components/EditTeamForm";
import Navbar from "./components/Navbar";
import Standings from "./components/Standings";
import Login from "./components/Login";
import LoginContext from "./context/LoginContext";

function App() {
  const [currentPage, setCurrentPage] = useState("teams");
  const [LogOn, setLogOn] = useState(false);
  const [teams, setTeams] = useState(
    JSON.parse(localStorage.getItem("teams")) || []
  );
  const [playerId, setPlayerId] = useState(null);
  const [teamId, setTeamId] = useState(null);
  useEffect(() => {
    localStorage.setItem("teams", JSON.stringify(teams));
  },[teams])
  
  return (
    <PageContext.Provider value={{ setCurrentPage }}>
      <TeamsContext.Provider value={{ teams, setTeams, setTeamId }}>
        <Header />
        <LoginContext.Provider value={{LogOn, setLogOn}}>
        <Navbar />
        <PlayerContext.Provider value={{ playerId, setPlayerId }}>
          <div className="content">
            {currentPage === "standings" && <Standings />}
            {currentPage === "teams" && <Teams teams={teams} />}
            {currentPage === "new-team" && <NewTeamForm />}
            {currentPage === "new-player" && teams[0] && <NewPlayersForm />}
            {currentPage === "players" &&
              teams.map((team, id) => <Players key={id} id={id} />
            )}
            {currentPage === 'edit-player' && <EditPlayerForm teamId={teamId}/> }
            {currentPage === 'edit-team' && <EditTeamForm teamId={teamId}/> }
            {currentPage === 'login' && <Login /> }
          </div>
        </PlayerContext.Provider>
        </LoginContext.Provider>
      </TeamsContext.Provider>
    </PageContext.Provider>
  );
}

export default App;
