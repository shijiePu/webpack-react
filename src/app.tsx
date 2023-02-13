import { useRef, useState } from "react";
import { Navigate } from "react-router-dom";
import { Layout } from "antd";

import RoutesV6 from "./RoutesV6";

import "./app.scss";
const { Header, Footer, Content } = Layout;

// 路由鉴权组件
const Appraisal = ({ children }: any) => {
  const hasUserInfo = sessionStorage.getItem("user");
  return hasUserInfo ? children : <Navigate to="/login" />;
};

function App() {
  const hasUserInfo = useRef(sessionStorage.getItem("user"));

  console.log(
    "*************************",
    { hasUserInfo },
    !hasUserInfo.current ? "Login" : "Layout "
  );

  return (
    <div className="App">
      <RoutesV6 />
    </div>
  );
}

export default App;
