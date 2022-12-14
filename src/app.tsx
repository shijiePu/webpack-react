import React from "react"
import { useRoutes, Outlet, matchRoutes, Link } from "react-router-dom";
import { ROUTER_CONFIG, Link_Config } from "./config/router";
import { Layout, Menu } from 'antd';

import "./app.scss"
const { Header, Footer, Sider, Content } = Layout;


function App() {
  const appRoutesElement = useRoutes(ROUTER_CONFIG);
  console.log({ ROUTER_CONFIG });
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
          <Header className="app-header">Header</Header>
          <Content className="contene-contain">
            <h1>Welcome to React Router!</h1>
            {appRoutesElement}
          </Content>
          <Footer>
            1111<Outlet />
          </Footer>
        </Layout>
      </Layout>

    </div>
  )
}

export default App