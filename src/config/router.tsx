import { Navigate, RouteObject } from "react-router-dom";
import Home from "@/pages/home";
import ArcoDesign from "@/pages/ArcoDesign";
import AntdDesign from "@/pages/antDesign";
import GroupsDemo from "@/pages/componentDemo/groups";
import TabsDemo from "@/pages/componentDemo/tabs";
import AntdDesignChild from "@/pages/AntdDesignChild";
import AntdDesignGrandson from "@/pages/AntdDesignGrandson";
import AntdDesignChild2 from "@/pages/AntdDesignChild2";
import NotFound from "@/pages/NotFound";
import Login from "@/pages/login";

const ROUTER_CONFIG: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to="/home" />,
    // Navigate 实现老版本重定向功能
  },
  {
    path: "/login",
    element: <Login />,
    // meta: {
    //   title: "登录",
    // },
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
        path: "ArcoDesign",
        element: <ArcoDesign />,
      },
      /**
       * 注意，使用命令式创建嵌套路由时
       * 路由父级后面必须加上 /* 用于匹配后续的任意子路由，
       * 否则按照react-router 的路由匹配方式是无法匹配上内部嵌套的子路由的
       * <Route path="/teams/*" element={<Teams />} />
      */
      {
        path: "antdDesign",
        element: <AntdDesign />,
        children: [
          {
            path: "child/:user",
            element: <AntdDesignChild />,
            children: [
              {
                /** index: true & children 不能共存？ √ */
                index: true,
                element: <AntdDesignGrandson />,
              },
            ],
          },
          {
            index: true,
            path: "child2",
            element: <AntdDesignChild2 />,
          },
        ],
      },
    ],

    // errorElement: <NotFound />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export { ROUTER_CONFIG };
