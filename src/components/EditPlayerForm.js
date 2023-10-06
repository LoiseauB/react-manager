import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editPlayer, editPlayerID } from "../reducers/action";


function EditPlayerForm () {
  const teams = useSelector(state => state.teams);
  const teamId = useSelector(state => state.teamId);
  const playerId = useSelector(state => state.playerId);

  let player = teams[teamId].players[playerId];

  const [name, setName] = useState(player.name);
  const [age, setAge] = useState(player.age);
  const [position, setPosition] = useState(player.position);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(age <40) {
      dispatch(editPlayer(teamId, playerId, name, age, position));
      dispatch(editPlayerID(null));
      navigate('/players');
    }else{
      alert('Trop vieux')
    }
  };

  return (
    <>
        <div className="container">
            <h2>Modifier un joueur</h2>
            <form onSubmit={handleSubmit}>
                <label>Nom du joueur: </label><br/>
                <input type="text" value={name} onChange={e => setName(e.target.value)}></input><br/>
                <label>Age du joueur: </label><br/>
                <input type="number" value={age} onChange={e => setAge(e.target.valueAsNumber)}></input><br/>
                <label>Poste du joueur: </label><br/>
                <input type="text" value={position} onChange={e => setPosition(e.target.value)}></input><br/>
                <button type="submit">Modifier</button>
            </form>
        </div>
    </>
);

}

export default EditPlayerForm;
