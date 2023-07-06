import * as React from "react";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Default from "./layouts/Default";
import Home from "./pages/Home";
import Login from "./pages/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Default><Home /></Default>,
    },
    {
        path: "/login",
        element: <Login />,
    },
]);

const App = () => {
    return (
        <RouterProvider router={router} />
    );
}

export default App;
