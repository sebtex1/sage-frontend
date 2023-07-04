import * as React from "react";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/login",
        element: <div>Login</div>,
    },
]);

const App = () => {
    return (
        <RouterProvider router={router} />
    );
}

export default App;
