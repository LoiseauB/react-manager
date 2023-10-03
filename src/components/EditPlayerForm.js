import { useContext, useState } from "react";
import TeamsContext from "../context/teamsContext";
import PlayerContext from "../context/playerContext";
import PageContext from "../context/pageContext";

function EditPlayerForm ({teamId}) {
  const {teams, setTeams} = useContext(TeamsContext);
  const {playerId, setPlayerId} = useContext(PlayerContext);
  let player = teams[teamId].players[playerId];
  const [name, setName] = useState(player.name);
  const [age, setAge] = useState(player.age);
  const [position, setPosition] = useState(player.position);
  const [newTeamId, setNewTeamId] = useState(teamId);
  const {setCurrentPage} = useContext(PageContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(age <40) {
      player = {
          name: name,
          age: age,
          position: position
      }
      let newTeams = [...teams];
      newTeams[teamId].players.splice(playerId, 1); // on supprime les anciennes info du joueur
      newTeams[newTeamId].players.push(player); // on insert les nouvelles info
      setTeams(newTeams);
      setPlayerId(null);
      setCurrentPage('players');
    }else{
      alert('Trop vieux')
    }
  };

  return (
    <>
        <div>
            <h2>Modifier un joueur</h2>
            <form onSubmit={handleSubmit}>
                <label>Nom du joueur: </label><br/>
                <input type="text" value={name} onChange={e => setName(e.target.value)}></input><br/>
                <label>Age du joueur: </label><br/>
                <input type="number" value={age} onChange={e => setAge(e.target.valueAsNumber)}></input><br/>
                <label>Poste du joueur: </label><br/>
                <input type="text" value={position} onChange={e => setPosition(e.target.value)}></input><br/>
                <label>Choix de l'équipe: </label><br/>
                <select type="select" onChange={(e)=> {setNewTeamId(e.target.value)}} >
                    {teams.map((team, id) => (
                        <>
                            <option value={id}>{team.name}</option>
                        </>
                    ))}
                </select><br/>
                <button type="submit">Modifier</button>
            </form>
        </div>
    </>
);

}

export default EditPlayerForm;
