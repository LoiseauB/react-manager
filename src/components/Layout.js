import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import TeamsContext from "../context/teamsContext";
import LoginContext from "../context/LoginContext";
import PlayerContext from "../context/playerContext";
import PageContext from "../context/pageContext";
import Navbar from "./Navbar";
import Header from "./Header";

function Layout(){

    const [currentPage, setCurrentPage] = useState("teams");
    const [LogOn, setLogOn] = useState(false);
    const [teams, setTeams] = useState(
    JSON.parse(localStorage.getItem("teams")) || []
    );
    const [playerId, setPlayerId] = useState(null);
    const [teamId, setTeamId] = useState(null);
    useEffect(() => {
        localStorage.setItem("teams", JSON.stringify(teams));
    },[teams])
return(
    <PageContext.Provider value={{ setCurrentPage }}>
        <TeamsContext.Provider value={{ teams, setTeams, setTeamId }}>
            <Header />
    <LoginContext.Provider value={{LogOn, setLogOn}}>
                    <Navbar />
    <PlayerContext.Provider value={{ playerId, setPlayerId }}>
                            <Outlet/>
                        </PlayerContext.Provider>
            </LoginContext.Provider>
        </TeamsContext.Provider>
    </PageContext.Provider>
)
}


export default Layout;