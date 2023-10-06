import { useEffect } from "react";
import { useSelector } from 'react-redux';
import Navbar from "./Navbar";
import Header from "./Header";

function Layout({children}) {
    const state = useSelector(state => state);
    
    useEffect(() => {
        localStorage.setItem("teams", JSON.stringify(state.teams));
    }, [state])

    return (
        <>
            <Header />
            <Navbar />
            {children}
        </>
    )
}


export default Layout;