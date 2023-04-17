import React, { useState } from "react";
import {
  useRoutes,
  useLocation,
  matchRoutes,
  Link,
  Navigate,
} from "react-router-dom";
import { ROUTER_CONFIG } from "./config/router";
import { Link_Config } from "./config/navConfig";
import { Layout, Menu } from "antd";
import RouterNormal from "./RouterNormal";
import PathInfo from "@/pages/HeaderInfo";
import Login from "./pages/login";
import "./app.scss";
const { Header, Footer, Sider, Content } = Layout;

// 声明式
const RoutesV6 = () => {
  // 于在useRoutes中调用RouteContext的解释
  // 这个是只会调用一次useRoutes吗
  const appRoutesElement = useRoutes(ROUTER_CONFIG);
  return <>{appRoutesElement}</>;
};

function App() {
  // const menuItems = matchRoutes()
  // todo  通过matchRoutes实现拿到导航栏的数据？
  const [login, setLogin] = useState(false);

  const getItems = Link_Config.map((item) => {
    const { name, children, icon, id } = item;
    const key = id;
    return {
      key,
      icon: React.createElement(icon),
      label: name,
      children: children?.map((child) => {
        const { id: subKey, path, label } = child;
        const labelLink = (
          <Link key={subKey} to={path}>
            {label}
          </Link>
        );
        return {
          key: subKey,
          label: labelLink,
        };
      }),
    };
  });

  const location = useLocation();
  // 使用matchRoutes获取匹配到的路由，依次是从父到子路由
  let matches = matchRoutes(ROUTER_CONFIG, { pathname: location.pathname });
  console.log("通过matchRoutes得到matches？？？", { matches, location });

  return (
    <div className="App">
      {login ? (
        <Login />
      ) : (
        <>
          <Layout>
            <Sider className="app-sider" theme="dark">
              <Menu
                mode="inline"
                defaultSelectedKeys={["home"]}
                defaultOpenKeys={["start"]}
                style={{ height: "100%", borderRight: 0 }}
                items={getItems}
              ></Menu>
            </Sider>
            <Layout className="app-content">
              <Header className="app-header">
                <PathInfo />
                {/*  routerConfig={ROUTER_CONFIG} */}
              </Header>
              <Content className="contene-contain">
                <RoutesV6 />
              </Content>
              <Footer className="app-footer">
                <RouterNormal />
              </Footer>
            </Layout>
          </Layout>
          {/* // Navigate 可以在子导航中 实现相对路径的跳转 // 一般在子路由中使用？ */}
        </>
      )}
    </div>
  );
}

export default App;
