import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { Provider } from 'react-redux';
import Navbar from "./Navbar";
import Header from "./Header";
import store from "../reducers/store";

function Layout() {
    //     JSON.parse(localStorage.getItem("teams")) || [])
    
    // useEffect(() => {
    //     localStorage.setItem("teams", JSON.stringify(teams));
    // }, [teams])
    return (
        <Provider store={store}>
            <Header />
            <Navbar />
            <Outlet />
        </Provider>
    )
}


export default Layout;