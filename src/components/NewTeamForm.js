import { useContext, useState } from "react";
import TeamsContext from "../context/teamsContext";

function NewTeamForm() {
    const [teamName, setTeamName] = useState('');
    const [TeamColor, setTeamColor] = useState('');

    const { teams, setTeams } = useContext(TeamsContext);

    const handleCreateTeam = (e) => {
        e.preventDefault();
        const newTeam = {
            name: teamName,
            color: TeamColor
        };
        setTeams([...teams, newTeam]);
        setTeamName('');
        setTeamColor('');

        console.log(newTeam);
    }

    return (
        <>
            <div className="container">
                <h2>Créer une nouelle équipe</h2>
                <form onSubmit={handleCreateTeam}>
                    <label>Nom de l'équipe :</label><br />
                    <input type="text" value={teamName} onChange={(e) => setTeamName(e.target.value)}></input><br />
                    <label>Couleur du maillot :</label><br />
                    <input type="text" value={TeamColor} onChange={(e) => setTeamColor(e.target.value)}></input><br />
                    <button type="submit">Créer</button>

                </form>
            </div>
        </>
    );
};






export default NewTeamForm;