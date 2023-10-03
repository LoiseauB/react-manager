import { useContext, useState } from "react";
import TeamsContext from "../context/teamsContext";
import PageContext from "../context/pageContext";

function EditTeamForm({teamId}){
    const {teams, setTeams} = useContext(TeamsContext);
    const [team, setTeam] = useState(teams[teamId]);
    const [teamName, setTeamName] = useState(team.name);
    const [TeamColor, setTeamColor] = useState(team.color);
    const {setCurrentPage} = useContext(PageContext);
    const handleCreateTeam = (e) => {
        e.preventDefault();
        const newTeam = {
            name: teamName,
            color: TeamColor,
            players: []
        };
        let addTeam = [...teams];
        addTeam[teamId]= newTeam;
        setTeams(addTeam);
        setCurrentPage('teams');
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