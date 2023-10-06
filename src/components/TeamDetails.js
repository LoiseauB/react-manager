import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function TeamDetails () {
  const teams = useSelector(state => state.teams);
  const {id} = useParams();
  return (
    <div className="container">
      <h2>Équipe {teams[id].name}</h2>
      <p>Maillot: {teams[id].color}</p>
      <ul> Liste des joueurs :
        {teams[id].players.map((player) => (
            <li>{player.name}, poste: {player.position} </li>
        ))}
      </ul>
    </div>
  )
}

export default TeamDetails;