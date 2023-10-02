import { useContext } from "react";
import TeamsContext from "../context/teamsContext";

function Players({id}) {
 const{teams} = useContext(TeamsContext);
    return (
        <>
            <div>
                <h2>Joueurs de l'équipe {teams[id].name}</h2>

                <ul>
                    {teams[id].players.map(player => (
                        <li>
                            - {player.name} 
                            - {player.age}
                            - {player.position}
                        </li>

                    ))}
                </ul>
            </div>
        </>
    );
}





export default Players;