import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import TeamsContext from "../context/teamsContext";
import LoginContext from "../context/LoginContext";
import PlayerContext from "../context/playerContext";
import Navbar from "./Navbar";
import Header from "./Header";

function Layout() {
    const [LogOn, setLogOn] = useState(false);
    const [teams, setTeams] = useState(
        JSON.parse(localStorage.getItem("teams")) || []
    );
    const [playerId, setPlayerId] = useState(null);
    const [teamId, setTeamId] = useState(null);
    
    useEffect(() => {
        localStorage.setItem("teams", JSON.stringify(teams));
    }, [teams])
    return (
        <TeamsContext.Provider value={{ teams, setTeams, setTeamId, teamId }}>
            <Header />
            <LoginContext.Provider value={{ LogOn, setLogOn }}>
                <Navbar />
                <PlayerContext.Provider value={{ playerId, setPlayerId }}>
                    <Outlet />
                </PlayerContext.Provider>
            </LoginContext.Provider>
        </TeamsContext.Provider>
    )
}


export default Layout;