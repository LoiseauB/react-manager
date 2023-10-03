import { useContext } from "react"
import PageContext from "../context/pageContext"
import TeamsContext from "../context/teamsContext";

function Navbar () {
  const {setCurrentPage} = useContext(PageContext);
  const {teams} = useContext(TeamsContext);
  return (
    <>
      <div className="navbar">
          <button onClick={() => setCurrentPage("teams")}>Teams</button>
          <button onClick={() => setCurrentPage("new-team")}>New Team</button>
          {teams[0] && (
            <button onClick={() => setCurrentPage("new-player")}>New Player</button>
          )}
          <button onClick={() => setCurrentPage("players")}>Players</button>
          <button onClick={() => setCurrentPage("standings")}>Standings</button>
        </div>
    </>
  )
}

export default Navbar;
