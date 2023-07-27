import { useEffect, useContext } from "react";
import useEffectEvent from "@/hooks/useEffectEvent";
import {
  useTasks,
  useTasksDispatch,
  TasksContext,
  TasksDispatchContext,
} from "@/modals/appContext";
import { Button } from "antd";

// useEffectEvent
export default function ChatRoom() {
  useEffect(() => {
    const connection = createConnection();
    connection.connect();
    return () => {
      connection.disconnect();
    };
  }, []);
  return (
    <div>
      <h1>欢迎来到聊天室！</h1>
      <Page url={"/home/effect"}></Page>
    </div>
  );
}

function createConnection() {
  // 真实的实现会将其连接到服务器，此处代码只是示例
  return {
    connect() {
      console.log("✅ 连接中……");
    },
    disconnect() {
      console.log("❌ 连接断开。");
    },
  };
}

// useEffectEvent例子
// numberOfItems 值改变不会触发组件变化  只有url变化之后再会重新渲染组件
function Page({ url }) {
  const tasks = useContext(TasksContext);
  const dispatch = useContext(TasksDispatchContext);
  const numberOfItems = tasks.length;

  const onVisit = useEffectEvent((visitedUrl) => {
    logVisit(visitedUrl, numberOfItems);
  });

  const logVisit = (url, number) => {
    console.log(url, number);
  };

  useEffect(() => {
    onVisit(url);
  }, [url]); // ✅ 声明所有依赖项
  // ...

  const addTask = () => {
    dispatch({
      type: "add",
      name: "test",
      id: numberOfItems + 1,
    });
  };




  return (
    <>
      <Button onClick={addTask}>添加</Button>
      <h2>{url}</h2>
    </>
  );
}
