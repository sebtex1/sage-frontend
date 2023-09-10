import * as React from "react";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Default from "./layouts/Default";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Settings from "./pages/Settings";
import GestionCommerciale from "./pages/GestionCommerciale";
import Documents from "./pages/Documents";
import Produits from "./pages/Produits";
import Detail from "./pages/Detail";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Default><Home /></Default>,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/settings",
        element: <Default><Settings /></Default>,
    },
    {
        path: "/gestionCommerciale",
        element: <Default><GestionCommerciale /></Default>,
    },
    {
        path: "/documents",
        element: <Default><Documents /></Default>,
    },
    {
        path: "/produits",
        element: <Default><Produits /></Default>,
    },
    {
        path: "/detail",
        element: <Default><Detail /></Default>,
    },
    {
        path: "*",
        element: <Default><NotFound /></Default>,
    }
]);

const App = () => {
    return (
        <RouterProvider router={router} />
    );
}

export default App;
