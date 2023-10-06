import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteTeam } from "../reducers/action";



function Teams() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const teams = useSelector(state => state.teams);

    const handleDelete = (index) => {
        dispatch(deleteTeam(index));
      }
    return (
        <>
        <div className="container">
            <h2>Les équipes</h2>
            <ul>
            {teams.map((team, index) => (
            <li key={index}>
              <span>Nom de l'équipe:</span> {team.name} <br />
              <span>Couleur du maillot:</span> {team.color} <br />
              <button onClick={()=> navigate(`/teams/${index}`)}>Détails</button>
              <button onClick={()=>navigate(`/edit-team/${index}`)}>Modifier</button>
              <button onClick={()=>handleDelete(index)}>Supprimer</button>
            </li>
          ))}
            </ul>
            </div>
        </>
    );
};

export default Teams;