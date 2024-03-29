import { Navigate, RouteObject } from "react-router-dom";
import Home from "@/pages/home";
import CacheCompont from "@/pages/study/cacheCompont";
import FormDemo from "@/pages/componentDemo/from";
import TabsDemo from "@/pages/componentDemo/tabs";
import NotFound from "@/pages/NotFound";
import Login from "@/pages/login";
import TestMyBabel from "@/pages/study/testMyBabel";
import ConceptsOfSnapshots from "@/pages/study/conceptsOfSnapshots";
import StateManagement from "@/pages/stateManagement";
import RefsTest from "@/pages/study/refsTest"
import EffectTwice from "@/pages/study/effectTwice"
import Square from "@/pages/square"
import RefToPrpos from "@/pages/refToPrpos"
import ErrorBDView from "@/pages/errorBoundary";

import Graphin from "@/pages/graphin"


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
    path: "/home/*",
    index: false,
    element: <Home />,
    children: [
      {
        path: "unitDemo",
        children: [
          {
            path: "form",
            element: <FormDemo />,
          },
          {
            path: "tabs",
            element: <TabsDemo />,
          },
        ],
      },
      {
        path: "cacheCompont",
        element: <CacheCompont />,
      },
      {
        path: "testMyBabel",
        element: <TestMyBabel />,
      },
      {
        path: "conceptsOfSnapshots",
        element: <ConceptsOfSnapshots />,
      },
      {
        path: "stateManagement",
        element: <StateManagement />,
      },
      {
        path: "refsCb",
        element: <RefsTest />,
      },
      {
        path: "refToPrpos",
        element: <RefToPrpos />,
      },
      {
        path: "effect",
        element: <EffectTwice />,
      },
      {
        path: "square",
        element: <Square />,
      },
      {
        path: "errorBoundary",
        element: <ErrorBDView />,
      },
      /**
       * 注意，使用命令式创建嵌套路由时
       * 路由父级后面必须加上 /* 用于匹配后续的任意子路由，
       * 否则按照react-router 的路由匹配方式是无法匹配上内部嵌套的子路由的
       * <Route path="/teams/*" element={<Teams />} />
      */
      {
        path: "graphin",
        element: <Graphin />,
      }
    ],
    // errorElement: <NotFound />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export { ROUTER_CONFIG };
