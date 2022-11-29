import { RouteObject } from "react-router-dom"
import HomePage from "@/pages/home";
import ArcoDesign from "@/pages/ArcoDesign";
import AntdDesign from "@/pages/antDesign";

const ROUTER_CONFIG: RouteObject[] = [
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/ArcoDesign",
        element: <ArcoDesign />,
    },
    {
        path: "/antdDesign",
        element: <AntdDesign />,
    },
    {
        path: "*",
        element: <>404 Not Found!</>,
    },
];

export { ROUTER_CONFIG };