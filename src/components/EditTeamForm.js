import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editTeam } from "../reducers/action";

function EditTeamForm(){
    const teams = useSelector(state => state.teams);
    const teamId = useSelector(state => state.teamId);
    const [teamName, setTeamName] = useState(teams[teamId].name);
    const [TeamColor, setTeamColor] = useState(teams[teamId].color);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleCreateTeam = (e) => {
        e.preventDefault();
        dispatch(editTeam(teamId, teamName, TeamColor))
        navigate('/teams');
    }

    return(
        <>
        <div className="container">
                <h2>Créer une nouelle équipe</h2>
                <form onSubmit={handleCreateTeam}>
                    <label>Nom de l'équipe :</label><br />
                    <input type="text" value={teamName} onChange={(e) => setTeamName(e.target.value)}></input><br />
                    <label>Couleur du maillot :</label><br />
                    <input type="text" value={TeamColor} onChange={(e) => setTeamColor(e.target.value)}></input><br />
                    <button type="submit">Modifier</button>

                </form>
            </div>
        </>
    )
}


export default EditTeamForm;