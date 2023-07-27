import { Button } from "antd";
import { colorContext } from "@/modals/appContext";
import { useContext } from "react";

const listItem = (props) => {
  const { dispatch } = props;
  console.log("listItem", props);
  const editTask = (id, name) => {
    console.log("delTask", props);
    dispatch({
      type: "edit",
      id: id,
      name: name + "edit",
    });
  };
  const delTask = (id) => {
    console.log("delTask");
    dispatch({
      type: "del",
      id: id,
    });
  };
  // 如果没有 Context.Provider...组件 ， 存的值应该是一个变量， 直接通过useContext获取
  const color = useContext(colorContext);

  return (
    <li style={{ backgroundColor: color[props.index % 2] }}>
      name:{props.name}
      <Button size="small" onClick={() => editTask(props.id, props.name)}>
        编辑
      </Button>
      <Button size="small" onClick={() => delTask(props.id)}>
        删除
      </Button>
    </li>
  );
};

export default listItem;
