import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deletePlayer, editPlayerID, editTeamId } from "../reducers/action";

function Players() {
  const teams = useSelector(state => state.teams);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (index, teamId) => {
    dispatch(editPlayerID(index));
    dispatch(editTeamId(teamId));
    navigate('/edit-player')
  }
  const handleDelete = (index, teamId) => {
    dispatch(deletePlayer(teamId, index));
  }

  return (
    <div className="container">
      {teams.map((team, teamId) => (
        <>
          <h2>Joueurs de l'équipe {team.name}</h2>
          <ul>
            {team.players.map((player, index) => (
              <li key={index}>
                <span>Nom:</span> {player.name} <br />
                <button onClick={() => navigate(`/players/${teamId}/${index}`)}>Détails</button>
                <button onClick={() => handleClick(index, teamId)}>Modifier</button>
                <button onClick={() => handleDelete(index, teamId)}>Supprimer</button>
              </li>
            ))}
          </ul>
        </>
      ))}
    </div>
  );
}





export default Players;