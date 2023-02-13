import { RouteObject } from "react-router-dom";
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

// todo
// 我们不一定要全部将路由定义在最外层.
// 可以适当拆解出子路由，做一些比较特殊的功能，比如路由的条件渲染，鉴权等

// 快速导入工具函数
// const lazyLoad = (moduleName: string) => {
//   const Module = lazy(() => import(`views/${moduleName}`));
//   return <Module />;
// };

const ROUTER_CONFIG: RouteObject[] = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/home",
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
      //  注意，使用命令式创建嵌套路由时
      // 路由父级后面必须加上 /* 用于匹配后续的任意子路由，
      // 否则按照react-router 的路由匹配方式是无法匹配上内部嵌套的子路由的
      //   <Route path="/teams/*" element={<Teams />} />
      {
        path: "antdDesign",
        element: <AntdDesign />,
        children: [
          {
            // index: true & children 不能共存？ √
            path: "child/:user",
            element: <AntdDesignChild />,
            children: [
              {
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
