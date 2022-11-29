import { useRoutes } from "react-router-dom";
import { ROUTER_CONFIG } from "./config/router";
import "./app.scss"

const App = () => {
  const appRoutesElement = useRoutes(ROUTER_CONFIG);
  return appRoutesElement;
};

export default App;