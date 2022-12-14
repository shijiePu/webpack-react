import React from 'react';
import { Layout } from 'antd';
import { Outlet } from "react-router-dom"


// todo psj 完成一个较为美观的导航栏
const App: React.FC = () => (
  <>
    <h1> i am antd</h1>
    <Outlet />
  </>
);

export default App;