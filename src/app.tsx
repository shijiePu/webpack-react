import { useRoutes } from "react-router-dom";
import { ROUTER_CONFIG } from "./config/router";
import "./app.scss";

function App() {
  const appRoutesElement = useRoutes(ROUTER_CONFIG);
  return <div className="App">{appRoutesElement}</div>;
}

export default App;
