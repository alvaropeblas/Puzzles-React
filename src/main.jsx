import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";

import { Provider } from 'react-redux'
import store from './store.js';

import './index.css'
import Home from './pages/Home/Home.jsx'
import AppNavbar from './components/AppNavbar.jsx'
import AppFooter from "./components/AppFooter.jsx";
import Menu from './pages/Menu/Menu.jsx';
import Booking from './pages/Bookings/Booking.jsx';
import Login from './pages/Login/Login.jsx';
import SignIn from './pages/Sign/SignIn.jsx';
import MyBookings from './pages/MyBookings/MyBookings.jsx';


//en outlet se redenrizan los diferentes componentes (páginas)

// https://stackoverflow.com/questions/75785717/i-am-using-createbrowserrouter-what-is-the-proper-way-to-have-header-and-footer
function AppLayout() {
  return <>
    <AppNavbar />
    <Outlet />
    <AppFooter />
  </>
}


const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [{
      path: "/",
      element: <Home />,
    },
    {
      path: "/menu",
      element: <Menu />,
    },
    {
      path: "/booking",
      element: <Booking />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/sign",
      element: <SignIn />,
    },
    {
      path: "/reservas",
      element: <MyBookings />,
    },
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
