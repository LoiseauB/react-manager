import { useContext, useState } from "react";
import TeamsContext from "../context/teamsContext";
import PlayerContext from "../context/playerContext";
import { useNavigate } from "react-router-dom";


function EditPlayerForm () {
  const {teams, setTeams, teamId} = useContext(TeamsContext);
  const {playerId, setPlayerId} = useContext(PlayerContext);
  let player = teams[teamId].players[playerId];
  const [name, setName] = useState(player.name);
  const [age, setAge] = useState(player.age);
  const [position, setPosition] = useState(player.position);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if(age <40) {
      player = {
          name: name,
          age: age,
          position: position
      }
      let newTeams = [...teams];
      newTeams[teamId].players[playerId]= player;
      setTeams(newTeams);
      setPlayerId(null);
      navigate('/players');
    }else{
      alert('Trop vieux')
    }
  };

  return (
    <>
        <div className="container">
            <h2>Modifier un joueur</h2>
            <form onSubmit={handleSubmit}>
                <label>Nom du joueur: </label><br/>
                <input type="text" value={name} onChange={e => setName(e.target.value)}></input><br/>
                <label>Age du joueur: </label><br/>
                <input type="number" value={age} onChange={e => setAge(e.target.valueAsNumber)}></input><br/>
                <label>Poste du joueur: </label><br/>
                <input type="text" value={position} onChange={e => setPosition(e.target.value)}></input><br/>
                <button type="submit">Modifier</button>
            </form>
        </div>
    </>
);

}

export default EditPlayerForm;
