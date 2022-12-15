import React, { useContext } from 'react';
import { Outlet } from "react-router-dom"

// react-router中使用<Outlet />或useOutlet渲染子路由，
// 而它们内部实际就是渲染RouteContext中的outlet属性。
// <Outlet />和useOutlet中可以传入上下文信息，在子路由中使用useOutletContext获取。
// 传入该参数会覆盖掉父路由的上下文信息，如果不传，则会由内向外获取上下文信息。

// todo psj 完成一个较为美观的导航栏
const Antd: React.FC = () => (
  // const appContext = useContext()
  <>
    <h1> i am antd</h1>
    {/* 此处的outlet代表 element + 子路由的outlet */}
    <Outlet />
  </>
);

// const OutletContext = React.createContext<unknown>(null);

// export function useOutlet(context?: unknown): React.ReactElement | null {
//   let outlet = useContext(RouteContext).outlet;
//   // 可以看到，当 context 有值时才使用 OutletContext.Provider，如果没有值会继续沿用父路由的 OutletContext.Provider 中的值
//   if (outlet) {
//     return (
//       <OutletContext.Provider value={context}>{outlet}</OutletContext.Provider>
//     );
//   }
//   return outlet;
// }

export default Antd;