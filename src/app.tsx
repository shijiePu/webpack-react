import { useRoutes } from "react-router-dom";
import { ROUTER_CONFIG } from "./config/router";
import { AppProvider } from "@/modals/appContext";
import "./app.scss";

function App() {
  const appRoutesElement = useRoutes(ROUTER_CONFIG);
  return (
    <AppProvider>
      <div className="App">{appRoutesElement}</div>
    </AppProvider>
  );
}

export default App;
