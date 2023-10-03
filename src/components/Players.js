import { useContext } from "react";
import TeamsContext from "../context/teamsContext";
import PlayerContext from "../context/playerContext";
import PageContext from "../context/pageContext";

function Players({id}) {
    const{teams, setTeamId , setTeams} = useContext(TeamsContext);
    const {setPlayerId} = useContext(PlayerContext);
    const {setCurrentPage} = useContext(PageContext);

    const handleClick = (index) => {
        setPlayerId(index);
        setTeamId(id);
        setCurrentPage('edit-player')
    }
    const handleDelete = (index) => {
      let newTeams = [...teams];
      newTeams[id].players.splice(index, 1);
      setTeams(newTeams);
    }

    return (
        <div className="container">
        <h2>Joueurs de l'équipe {teams[id].name}</h2>
        <ul>
          {teams[id].players.map((player, index) => (
            <li key={player.id}>
              <span>Nom:</span> {player.name} <br />
              <span>Age:</span> {player.age} <br />
              <span>Poste:</span> {player.position} <br />
              <button onClick={()=>handleClick(index)}>Modifier</button>
              <button onClick={()=>handleDelete(index)}>Supprimer</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }





export default Players;