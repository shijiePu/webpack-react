import { Outlet, Navigate } from "react-router-dom";
import NarBar from "@/pages/components/silder";
import PageHeader from "@/pages/components/header";
import RouterNormal from "@/RouterNormal";
import { Layout } from "antd";
const { Header, Footer, Content } = Layout;

// 路由鉴权组件
const Appraisal = ({ children }: any) => {
  const hasUserInfo = sessionStorage.getItem("user");
  return hasUserInfo ? children : <Navigate to="/login" />;
};

const Home = () => {
  return (
    <>
      <Appraisal>
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
              {/* 我是首页 */}
              <Outlet />
            </Content>
            <Footer className="app-footer">
              {/* <RouterNormal /> */}
            </Footer>
          </Layout>
        </Layout>
      </Appraisal>
    </>
  );
};

export default Home;
