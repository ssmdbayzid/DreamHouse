import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../Layout/MainLayout";
import Home from "../page/Home/Home";
import AgentContact from "../page/AgentContact";
import PropertyDetails from "../page/PropertyDetails/PropertyDetails";
import Properties from "../page/Properties/Properties";
import LogIn from "../page/Auth/LogIn";
import SignUp from "../page/Auth/SignUp";

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
                path: "/properties",
                element: <Properties />
            },         
            {
                path: "/property",
                element: <PropertyDetails />
            },         
            {
                path: "/log-in",
                element: <LogIn />
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