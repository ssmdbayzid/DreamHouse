import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../Layout/MainLayout";
import Home from "../page/Home/Home";
import AgentContact from "../page/AgentContact";
import PropertyDetails from "../page/PropertyDetails/PropertyDetails";
import Properties from "../page/Properties/Properties";
import LogIn from "../page/Auth/LogIn";
import SignUp from "../page/Auth/SignUp";
import About from "../page/About";
import Dashboard from "../page/Dashboard/Dashboard";
import DashBoardIndex from "../page/Dashboard/DashboardIndex";
import AddListing from "../page/Dashboard/AddListing";
import Profile from "../page/Dashboard/Profile";
import MyListing from "../page/Dashboard/MyListing";
import FavoriteItem from "../page/Dashboard/FavoriteItem";
import LoginFailed from "../page/Auth/LoginFailed";
import LoginSuccess from "../page/Auth/LoginSuccess";
import MyProperties from "../page/Dashboard/MyProperties";
import BookedProperty from "../page/Dashboard/BookedProperty";




const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/home",
                element: <Home />
            },         
            {
                path: "/about",
                element: <About />
            },         
            {
                path: "/properties",
                element: <Properties />
            },         
            {
                path: "/property/:id",
                element: <PropertyDetails />
            },   
            {
                path: "/dashboard",
                element: <Dashboard />,
               
                children: [
                   {
                    index:true,
                    element: <FavoriteItem />
                   },
                    {
                        path: "favorite-item",
                        element: <FavoriteItem />
                    },
                    {
                        path: "my-properties",
                        element: <MyProperties />
                    },
                    {
                        path: "booked-properties",
                        element: <BookedProperty />
                    },
                    {
                        path: "add-listing",
                        element: <AddListing />
                    },
                    {
                        path: "profile",
                        element: <Profile />
                    },
                    {
                        path: "my-listing",
                        element: <MyListing />
                    },
                ]
            },          
            {
                path: "/log-in",
                element: <LogIn />
            },         
            {
                path: "/login/failed",
                element: <LoginFailed />
            },         
            {
                path: "/login/success",
                element: <LoginSuccess />
            },         
            {
                path: "/sign-up",
                element: <SignUp />
            },         
            {
                path: "/contact",
                element: <AgentContact />
            },         
        ]
    }
    
])

export default router