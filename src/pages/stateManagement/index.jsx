import { Button, Input } from "antd";
import { useState, useRef, useContext, useMemo, useEffect } from "react";
import LevelTitle from "./components/levelTitle";
import {
  useTasks,
  useTasksDispatch,
  TasksContext,
  TasksDispatchContext,
} from "@/modals/appContext";
import List from "./components/list";
import useThrottleState from "@/hooks/useThrottleState"
import useThrottleEffect from "@/hooks/useThrottleEffect"
import useDebounceState from "@/hooks/useDebounceState"
import useDebounceEffect from "@/hooks/useDebounceEffect"



let nextId = 3;
const StateManagement = () => {
  const [value, setValue] = useState("");

  //1通过自定义hooks获取
  // const tasks = useTasks(); //自定义hooks 获取Context中的tasks
  // const dispatch = useTasksDispatch(); //自定义hooks 获取Context中的dispatch

  // 2通过useContext获取
  // // 创建的context时，useContext这个hooks就是获取当前context组件（<TasksContext.Provider value={tasks}>）中value的值
  // // 如果没有 Context.Provider...组件 ， 存的值应该是一个变量， 直接通过useContext获取
  const tasks = useContext(TasksContext);

  const dispatch = useContext(TasksDispatchContext);

  let countRef = useRef(0);

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

  // const [num, setNum] = useThrottleState(0, 1000)
  // const [num, setNum] = useDebounceState(0, 1000)
  const [num, setNum] = useState(0)

  const debounceClick = () => {
    console.log('debounceClick', { num, setNum });
    let newValue = num + 1
    setNum(newValue)
  }

  const { cancel } = useThrottleEffect(() => {
    console.log('useThrottleEffect执行');
  }, 1000, [num])

  function handleClick() {
    // 这样并未重新渲染组件！
    countRef.current = countRef.current + 1;
  }


  useEffect(() => {

  }, [num])

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

      <List filterValue={value} tasks={tasks} dispatch={dispatch}></List>

      <LevelTitle></LevelTitle>

      <button onClick={handleClick}>你点击了 {countRef.current} 次</button>
      <button onClick={debounceClick}>节流state {num} 次</button>
    </div>
  );
};

export default StateManagement;
