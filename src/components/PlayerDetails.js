import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function PlayerDetails() {
    const teams = useSelector(state => state.teams) ;
    const { teamId, id } = useParams();

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