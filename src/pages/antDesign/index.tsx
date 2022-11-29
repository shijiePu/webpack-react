import React from 'react';
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

// todo psj 完成一个较为美观的导航栏
const App: React.FC = () => (
  <>
    <Layout>
      <Header>Header</Header>
      <Layout>
        <Content>Content</Content>
        <Sider>Sider</Sider>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>

  </>
);

export default App;