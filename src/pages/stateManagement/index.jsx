import { Button, Input } from "antd";
import { useReducer, useState, useContext } from "react";
import tasksReducer from "./tasksReducer";
import LevelTitle from "./components/levelTitle";

import List from "./components/list";

let nextId = 0;
const defaultTask = [
  {
    name: "测试",
    id: "test",
  },
  {
    name: "测试2",
    id: "test2",
  },
];
const StateManagement = () => {
  const [tasks, dispatch] = useReducer(tasksReducer, defaultTask);
  const [value, setValue] = useState("");

  const addTask = () => {
    dispatch({
      type: "add",
      name: value,
      id: nextId++,
    });
    setValue("");
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <div>
        <Input
          style={{ width: "220px" }}
          value={value}
          onChange={handleChange}
        />
        <Button onClick={addTask}>添加</Button>
      </div>

      <List tasks={tasks} dispatch={dispatch}></List>

      <LevelTitle></LevelTitle>
    </div>
  );
};

export default StateManagement;
