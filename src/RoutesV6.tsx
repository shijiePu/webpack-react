import { useRoutes } from "react-router-dom";
import { ROUTER_CONFIG } from "./config/router";

// 声明式
const RoutesV6 = () => {
  const appRoutesElement = useRoutes(ROUTER_CONFIG);
  return <>{appRoutesElement}</>;
};

export default RoutesV6;
