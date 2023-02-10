import { Routes, Route, Outlet } from "react-router-dom";
import { Teams } from "./config/router2";

// 命令式
const RouterNormal = () => {
  return (
    <Routes>
      {/* 我们不一定要全部将路由定义在最外层.
       * 可以适当拆解出子路由，做一些比较特殊的功能，比如路由的条件渲染，鉴权等
       * 接上面关于在useRoutes中调用RouteContext的解释
       */}
      <Route
        path="/"
        element={
          <>
            <h1>测试一下命名式路由的嵌套写法</h1>
            <Outlet />
          </>
        }
      >
        {/* 注意，这里父级后面必须加上 /* 用于匹配后续的任意子路由，
          否则按照react-router 的路由匹配方式是无法匹配上内部嵌套的子路由的 */}
        <Route path="/teams/*" element={<Teams />} />
        <Route
          index
          element={<h1> path="/" children : `{"Route index"}`</h1>}
        />
      </Route>
    </Routes>
  );
};

export default RouterNormal;
