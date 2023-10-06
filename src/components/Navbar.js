import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../reducers/action";

function Navbar () {
  const teams = useSelector(state => state.teams);
  const isLogin = useSelector(state => state.login);
  const dispatch = useDispatch();

  return (
    <>
      <div className="navbar">
          <Link to="/teams">Teams</Link>
          {isLogin && <Link to ="/new-team">New Team</Link>}
          {teams[0] &&  isLogin && (
            <Link to="/new-player">New Player</Link>
          )}
          <Link to="/players">Players</Link>
          <Link to="/standings">Standings</Link>
          {isLogin ? (
          <button onClick={() => dispatch(login())}>Deconnexion</button>
          ):(<Link to="/">Connexion</Link>)}
        </div>
    </>
  )
}

export default Navbar;
