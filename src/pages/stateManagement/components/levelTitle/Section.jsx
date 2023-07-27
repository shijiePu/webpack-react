import { useContext } from "react";
import { LevelContext } from "./LevelContext.js";

export default function Section({ children }) {
  const level = useContext(LevelContext);
  // console.log("当前useContext：level", level);
  return (
    <section className="section">
      <LevelContext.Provider value={level + 1}>
        {children}
      </LevelContext.Provider>
    </section>
  );
}
