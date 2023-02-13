import { Outlet, useLocation } from "react-router-dom";
import NarBar from "@/pages/components/silder";
import PageHeader from "@/pages/components/header";
import RouterNormal from "@/RouterNormal";

import { Layout } from "antd";

const { Header, Footer, Content } = Layout;

const Home = () => {
  const location = useLocation();
  // const matches = useMatch()
  console.log("homePage render~~", location);
  // console.log('homePage render~~', location)
  return (
    <>
      <Layout>
        <NarBar />
        <Layout className="app-content">
          <Header className="app-header">
            <PageHeader />
          </Header>
          <Content className="contene-contain">
            {/* outlet可以将所有匹配到的子路由展示出来 */}
            {/* 没有outlet的话默认只会匹配到优先级最高的路由 */}
            {/* 而当前匹配到所有子路由会在routeContext 的value中储存 */}
            {/* Outlet 就存在里面 */}
            {/* 这个逻辑是支持嵌套的 */}
            <Outlet />
          </Content>
          <Footer className="app-footer">
            <RouterNormal />
          </Footer>
        </Layout>
      </Layout>
    </>
  );
};

export default Home;
