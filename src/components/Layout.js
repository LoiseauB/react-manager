import { useEffect } from "react";
import { useSelector } from 'react-redux';
import Navbar from "./Navbar";
import Header from "./Header";

function Layout({children}) {
    const teams = useSelector(state => state.teams);
    
    useEffect(() => {
        localStorage.setItem("teams", JSON.stringify(teams));
    }, [teams])

    return (
        <>
            <Header />
            <Navbar />
            {children}
        </>
    )
}


export default Layout;