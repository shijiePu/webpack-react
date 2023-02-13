import { useRef } from "react";
import { useRoutes } from "react-router-dom";
import { ROUTER_CONFIG } from "./config/router";
import RouterNormal from "./RouterNormal";
import Login from "./pages/login";

import { Layout } from "antd";

const { Header, Footer, Content } = Layout;
// 声明式
const RoutesV6 = () => {
  const appRoutesElement = useRoutes(ROUTER_CONFIG);
  return <>{appRoutesElement}</>;
};

export default RoutesV6;
