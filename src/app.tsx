import { useRef, useState } from "react";
import { Navigate } from "react-router-dom";
import { Layout } from "antd";
import RouterNormal from "./RouterNormal";
import RoutesV6 from "./RoutesV6";
import Login from "./pages/login";
import NarBar from "./pages/components/silder";

import "./app.scss";
const { Header, Footer, Content } = Layout;

// 路由鉴权组件
const Appraisal = ({ children }: any) => {
  const hasUserInfo = sessionStorage.getItem("user");
  return hasUserInfo ? children : <Navigate to="/login" />;
};

function App() {
  // const menuItems = matchRoutes()
  // todo  通过matchRoutes实现拿到导航栏的数据？
  const [login, setLogin] = useState(false);

  const hasUserInfo = useRef(sessionStorage.getItem("user"));

  console.log({ hasUserInfo }, !hasUserInfo.current ? "Login" : "Layout ");
  return (
    <div className="App">
      {!hasUserInfo.current ? (
        <Login />
      ) : (
        <>
          <Layout>
            <NarBar />
            <Layout className="app-content">
              <Header className="app-header"></Header>
              <Content className="contene-contain">
                <RoutesV6 />
              </Content>
              <Footer className="app-footer">
                <RouterNormal />
              </Footer>
            </Layout>
          </Layout>
        </>
      )}
    </div>
  );
}

export default App;
