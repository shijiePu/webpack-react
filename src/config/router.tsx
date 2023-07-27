import { Navigate, RouteObject } from "react-router-dom";
import Home from "@/pages/home";
import CacheCompont from "@/pages/cacheCompont";
import GroupsDemo from "@/pages/componentDemo/groups";
import TabsDemo from "@/pages/componentDemo/tabs";
import NotFound from "@/pages/NotFound";
import Login from "@/pages/login";
import TestMyBabel from "@/pages/testMyBabel";
import ConceptsOfSnapshots from "@/pages/conceptsOfSnapshots";
import StateManagement from "@/pages/stateManagement";
import RefsTest from "@/pages/refsTest"
import EffectTwice from "@/pages/effectTwice"


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
            path: "Group",
            element: <GroupsDemo />,
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
        path: "effect",
        element: <EffectTwice />,
      },
      
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
