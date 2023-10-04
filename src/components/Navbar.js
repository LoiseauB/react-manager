import { useContext } from "react"
import PageContext from "../context/pageContext"
import TeamsContext from "../context/teamsContext";
import LoginContext from "../context/LoginContext";

function Navbar () {
  const {setCurrentPage} = useContext(PageContext);
  const {teams} = useContext(TeamsContext);
  const {LogOn, setLogOn} = useContext(LoginContext);
  return (
    <>
      <div className="navbar">
          <button onClick={() => setCurrentPage("teams")}>Teams</button>
          {LogOn && <button onClick={() => setCurrentPage("new-team")}>New Team</button>}
          {teams[0] &&  LogOn && (
            <button onClick={() => setCurrentPage("new-player")}>New Player</button>
          )}
          <button onClick={() => setCurrentPage("players")}>Players</button>
          <button onClick={() => setCurrentPage("standings")}>Standings</button>
          {LogOn ? (
          <button onClick={() => setLogOn(false)}>Deconnexion</button>
          ):(<button onClick={() => setCurrentPage("login")}>Connexion</button>)}
        </div>
    </>
  )
}

export default Navbar;
