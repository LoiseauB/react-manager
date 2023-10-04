import { useContext } from "react";
import { useParams } from "react-router-dom";
import TeamsContext from "../context/teamsContext";

function PlayerDetails() {
    const { teams } = useContext(TeamsContext);
    const { teamId, id } = useParams();
    console.log(teams[teamId].players[id].name);
    return (
        <div className="container">
            <h2>Détail :</h2>
            <ul>
                <li>
                    <span>Équipe:</span>{teams[teamId].name} <br />
                    <span>Maillot:</span>{teams[teamId].color} <br />
                    <span>Nom:</span> {teams[teamId].players[id].name} <br />
                    <span>Age:</span> {teams[teamId].players[id].age} <br />
                    <span>Poste:</span> {teams[teamId].players[id].position} <br />
                </li>
            </ul>
        </div>
    )
}
export default PlayerDetails;