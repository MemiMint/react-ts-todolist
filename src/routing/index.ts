import { RouteObject, createBrowserRouter } from "react-router-dom";
import {
    Dashboard,
    Login,
    Project,
    Register
} from "../pages";


const routes: RouteObject[] = [
    {
        path: "/",
        Component: Login
    },
    {
        path: "/dashboard",
        Component: Dashboard
    },
    {
        path: "/project/:id",
        Component: Project
    },
    {
        path: "/register",
        Component: Register
    }
];

export const router = createBrowserRouter(routes);