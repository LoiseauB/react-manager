import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import "./App.scss";
import Teams from './components/Teams';
import Layout from './components/Layout';
import Login from './components/Login';
import NewTeamForm from './components/NewTeamForm';
import NewPlayersFrom from './components/NewPlayersForm';
import Players from './components/Players';
import Standings from './components/Standings';
import EditPlayerForm from './components/EditPlayerForm'
import EditTeamForm from './components/EditTeamForm'
import TeamDetails from './components/TeamDetails';
import PlayerDetails from './components/PlayerDetails';
const router = createBrowserRouter([
  {
    path: "/",
    element : <Layout/>,
    children : [
      {
        path: "/",
        element: <Login/>
      },
      {
        path: "/teams",
        element: <Teams/>
      },
      {
        path: "/new-team",
        element: <NewTeamForm/>
      },
      {
        path: "/new-player",
        element: <NewPlayersFrom/>
      },
      {
        path: "/players",
        element: <Players/>
      },
      {
        path: "/standings",
        element: <Standings/>
      },
      {
        path: "/edit-player",
        element: <EditPlayerForm/>
      },
      {
        path: "/edit-team",
        element: <EditTeamForm/>
      },
      {
        path: "/teams/:id",
        element: <TeamDetails />
      },
      {
        path: "/players/:teamId/:id",
        element: <PlayerDetails />
      }
     
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


