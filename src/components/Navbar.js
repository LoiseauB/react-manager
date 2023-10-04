import { useContext } from "react"
import { Link } from "react-router-dom";
import TeamsContext from "../context/teamsContext";
import LoginContext from "../context/LoginContext";

function Navbar () {
  const {teams} = useContext(TeamsContext);
  const {LogOn, setLogOn} = useContext(LoginContext);
  return (
    <>
      <div className="navbar">
          <Link to="/teams">Teams</Link>
          {LogOn && <Link to ="/new-team">New Team</Link>}
          {teams[0] &&  LogOn && (
            <Link to="/new-player">New Player</Link>
          )}
          <Link to="/players">Players</Link>
          <Link to="/standings">Standings</Link>
          {LogOn ? (
          <button onClick={() => setLogOn(false)}>Deconnexion</button>
          ):(<Link to="/">Connexion</Link>)}
        </div>
    </>
  )
}

export default Navbar;
