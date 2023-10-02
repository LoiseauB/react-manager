import { useState } from "react";
import "./App.scss";
import Header from "./components/Header";
import NewTeamForm from "./components/NewTeamForm";
import Teams from "./components/Teams";
import TeamsContext from "./context/teamsContext";
import NewPlayersFrom from "./components/NewPlayersForm";

function App() {

  const [teams, setTeams] = useState([]);
  console.log(teams);


  return (

    <TeamsContext.Provider value={{ teams, setTeams }}>
      <Header />
      <NewTeamForm />
      <Teams teams={teams} />
      {teams[0]&&(
        <>
          <NewPlayersFrom />
        </>
      )}
    </TeamsContext.Provider>

  );
}

export default App;
