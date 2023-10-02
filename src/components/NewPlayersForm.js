import { useContext, useState } from "react";
import TeamsContext from "../context/teamsContext";


function NewPlayersFrom() {
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [position, setPosition] = useState('');
    const [teamId, setTeamId] = useState(0);
    const {teams, setTeams} = useContext(TeamsContext);
    console.log(teamId);
    const handleCreatePlayer = (e) => {
        e.preventDefault();
        if(age <40) {
        const player = {
            name: name,
            age: age,
            position: position
        }
        let newTeams = [...teams];
        newTeams[teamId].players.push(player);
        setTeams(newTeams);
        console.log('new player')
    }else{
        alert('Trop vieux')
    }
    }

    return (
        <>
            <div>
                <h2>Ajouter un nouveau joueur</h2>
                <form onSubmit={handleCreatePlayer}>
                    <label>Nom du joueur: </label><br/>
                    <input type="text" value={name} onChange={e => setName(e.target.value)}></input><br/>
                    <label>Age du joueur: </label><br/>
                    <input type="number" value={age} onChange={e => setAge(e.target.valueAsNumber)}></input><br/>
                    <label>Poste du joueur: </label><br/>
                    <input type="text" value={position} onChange={e => setPosition(e.target.value)}></input><br/>
                    <label>Choix de l'équipe: </label><br/>
                    <select type="select" onChange={(e)=> {setTeamId(e.target.value)}} >
                        {teams.map((team, id) => (
                            <>
                                <option value={id}>{team.name}</option>
                            </>
                        ))}
                    </select><br/>
                    <button type="submit">Ajouter</button>
                </form>
            </div>
        </>
    );
}



export default NewPlayersFrom;