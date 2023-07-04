import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import HalamanSignin from './Page/SigninPage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Movies from './Components/Movies';
import Dashboard from './Page/Dashboard';
import Dune from './Page/Movies Detail/Dune';
import Toy from './Page/Movies Detail/Toy';
import Joker from './Page/Movies Detail/Joker';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/signin",
    element: <HalamanSignin/>,
  },
  {
    path: "/carousel",
    element: <Movies/>,
  },
  {
    path: "/dashboard",
    element: <Dashboard/>,
  },
  {
    path: "/dune",
    element: <Dune/>,
  },
  {
    path: "/toy",
    element: <Toy/>,
  },
  {
    path: "/joker",
    element: <Joker/>,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

