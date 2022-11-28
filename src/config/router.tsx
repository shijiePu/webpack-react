import { RouteObject } from "react-router-dom"
import HomePage from "@/pages/home";

const ROUTER_CONFIG: RouteObject[] = [
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "*",
        element: <>404 Not Found!</>,
    },
];

export { ROUTER_CONFIG };