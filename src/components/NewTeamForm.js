import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTeam } from "../reducers/action";
import { useNavigate } from "react-router-dom";

function NewTeamForm() {
    const [teamName, setTeamName] = useState('');
    const [teamColor, setTeamColor] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleCreateTeam = (e) => {
        e.preventDefault();
        dispatch(createTeam(teamName, teamColor));
        navigate('/teams');
    }

    return (
        <>
            <div className="container">
                <h2>Créer une nouvelle équipe</h2>
                <form onSubmit={handleCreateTeam}>
                    <label>Nom de l'équipe :</label><br />
                    <input type="text" value={teamName} onChange={(e) => setTeamName(e.target.value)}></input><br />
                    <label>Couleur du maillot :</label><br />
                    <input type="text" value={teamColor} onChange={(e) => setTeamColor(e.target.value)}></input><br />
                    <button type="submit">Créer</button>
                </form>
            </div>
        </>
    );
};






export default NewTeamForm;