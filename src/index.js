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


