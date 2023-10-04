import { useContext } from "react";
import TeamsContext from "../context/teamsContext";
import PlayerContext from "../context/playerContext";
import { useNavigate } from "react-router-dom";

function Players() {
  const { teams, setTeamId, setTeams } = useContext(TeamsContext);
  const { setPlayerId } = useContext(PlayerContext);
  const navigate = useNavigate();

  const handleClick = (index, teamId) => {
    setPlayerId(index);
    setTeamId(teamId);
    navigate('/edit-player')
  }
  const handleDelete = (index, teamId) => {
    let newTeams = [...teams];
    newTeams[teamId].players.splice(index, 1);
    setTeams(newTeams);
  }

  return (
    <div className="container">
      {teams.map((team, id) => (
        <>
          <h2>Joueurs de l'équipe {team.name}</h2>
          <ul>
            {team.players.map((player, index) => (
              <li key={index}>
                <span>Nom:</span> {player.name} <br />
                <button onClick={() => navigate(`/players/${id}/${index}`)}>Détails</button>
                <button onClick={() => handleClick(index, id)}>Modifier</button>
                <button onClick={() => handleDelete(index, id)}>Supprimer</button>
              </li>
            ))}
          </ul>
        </>
      ))}
    </div>
  );
}





export default Players;