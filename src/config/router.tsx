import { Navigate, RouteObject } from "react-router-dom";
import Home from "@/pages/home";
import Manage from "@/pages/manage";
import NotFound from "@/pages/NotFound";
import Login from "@/pages/login";
import ErrorBDView from "@/pages/errorBoundary";
import Welcome from '@/pages/home/welcome'


const ROUTER_CONFIG: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Welcome />,
  },
  {
    path: "/home/*",
    index: false,
    element: <Home />,
    children: [
      {
        path: '',
        element: <Welcome />
      },
      {
        path: "manage",
        element: <Manage />,
      },
      {
        path: "errorBoundary",
        element: <ErrorBDView />,
      },
      // plop占位
      /**
       * plop占位
       * {
       * path: "errorBoundary",
       * element: <ErrorBDView />,
       * },
       */
      /**
       * 注意，使用命令式创建嵌套路由时
       * 路由父级后面必须加上 /* 用于匹配后续的任意子路由，
       * 否则按照react-router 的路由匹配方式是无法匹配上内部嵌套的子路由的
       * <Route path="/teams/*" element={<Teams />} />
      */
    ],
    // errorElement: <NotFound />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export { ROUTER_CONFIG };
