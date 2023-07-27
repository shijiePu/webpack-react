// 结合使用reducer && context 做一个全局状态管理
import { createContext, useReducer, useContext } from "react";

// 创建 context
// // 如果没有 Context.Provider...组件 ， 存的值应该是一个变量， 直接通过useContext获取
export const colorContext = createContext(["#a1a7af1f", "#aed8ae4a"]);

// 创建的context时，useContext这个hooks就是获取当前context组件（<TasksContext.Provider value={tasks}>）中value的值
// 结合reducer一起使用的方法
export const TasksContext = createContext(null);
export const TasksDispatchContext = createContext(null);

export function AppProvider({ children }) {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}

export function useTasks() {
  return useContext(TasksContext);
}

export function useTasksDispatch() {
  return useContext(TasksDispatchContext);
}

function tasksReducer(state, action) {
  console.log(state, action);
  switch (action.type) {
    case "add":
      return [...state, { name: action.name, id: action.id }];
    case "del":
      return state.filter((item) => item.id !== action.id);
    case "edit":
      return state.map((item) => {
        if (item.id === action.id) {
          return {
            name: action.name,
            id: action.id,
          };
        } else {
          return item;
        }
      });
    default:
      throw Error("Unknown action: " + action.type);
  }
}

const initialTasks = [
  { id: 0, name: "Philosopher’s Path", done: true },
  { id: 1, name: "Visit the temple", done: false },
  { id: 2, name: "Drink matcha", done: false },
];
