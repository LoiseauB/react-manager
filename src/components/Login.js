import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../reducers/action";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const isLogin = useSelector(state => state.login);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "admin") {
      setError(""); 
      dispatch(login());
    } else {
      setError("Nom d'utilisateur ou mot de passe incorrect");
    }
  };
  if(isLogin){
    return navigate("/teams")
  };
  return (
    <div className="container">
      <h2>Connexion</h2>
        <form onSubmit={handleLogin}>
          <div>
            <label>Nom d'utilisateur</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Mot de passe</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="error">{error}</p>}
          <button className="button"type="submit">Se connecter</button>
        </form>
      
    </div>
  );
}

export default Login;
