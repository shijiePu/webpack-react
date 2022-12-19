import React from "react"
import { useRoutes, Routes, Route, Outlet, useLocation, matchRoutes, Link, Navigate } from "react-router-dom";
import { ROUTER_CONFIG, Link_Config } from "./config/router";
import { Layout, Menu } from 'antd';
import { Teams } from "./config/router2"
import PathInfo from "@/pages/HeaderInfo";
import "./app.scss"

const { Header, Footer, Sider, Content } = Layout;

// 命令式
const RouterNormal = () => {
  return (
    <Routes>
      {/* 我们不一定要全部将路由定义在最外层.
      * 可以适当拆解出子路由，做一些比较特殊的功能，比如路由的条件渲染，鉴权等
      * 接上面关于在useRoutes中调用RouteContext的解释 
      */}
      <Route path="/" element={<>
        <h1>测试一下命名式路由的嵌套写法</h1>
        <Outlet />
      </>}>
        {/* 注意，这里父级后面必须加上 /* 用于匹配后续的任意子路由，
        否则按照react-router 的路由匹配方式是无法匹配上内部嵌套的子路由的 */}
        <Route path="/teams/*" element={<Teams />} />
        <Route index element={<h1> path="/" children : `{'Route index'}`</h1>} />
      </Route>
    </Routes>
  );
}

// 声明式
const RoutesV6 = () => {
  // 于在useRoutes中调用RouteContext的解释
  // 这个是只会调用一次useRoutes吗
  const appRoutesElement = useRoutes(ROUTER_CONFIG);
  return <>{appRoutesElement}</>
}



// Navigate  可以在子导航中 实现相对路径的跳转
// 一般在子路由中使用？  

function App() {

  // const menuItems = matchRoutes()
  // todo  通过matchRoutes实现拿到导航栏的数据？

  const getItems = Link_Config.map(item => {
    const { name, children, icon, id } = item
    const key = id;
    return {
      key,
      icon: React.createElement(icon),
      label: name,
      children: children.map((child) => {
        const { id: subKey, path, label } = child;
        const labelLink = <Link key={subKey} to={path}>{label}</Link>
        return {
          key: subKey,
          label: labelLink
        };
      })
    }
  })

  const location = useLocation()
  // 使用matchRoutes获取匹配到的路由，依次是从父到子路由
  let matches = matchRoutes(ROUTER_CONFIG, { pathname: location.pathname });
  console.log('通过matchRoutes得到matches？？？', { matches, location });

  return (
    <div className="App">
      <Layout>
        <Sider
          className="app-sider"
          theme="dark"
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={['home']}
            defaultOpenKeys={['start']}
            style={{ height: '100%', borderRight: 0 }}
            items={getItems}
          >
          </Menu>
        </Sider>
        <Layout className="app-content">
          <Header className="app-header">
            <PathInfo routerConfig={ROUTER_CONFIG} />
          </Header>
          <Content className="contene-contain">
            <RoutesV6 />
          </Content>
          <Footer className="app-footer">
            <RouterNormal />
          </Footer>
        </Layout>
      </Layout>

    </div>
  )
}

export default App