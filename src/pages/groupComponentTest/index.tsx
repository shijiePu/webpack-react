import { Group, GroupItem } from "@/components/groups";
import { GroupContext } from "@/components/context/groupContext"
import { useContext } from "react";
// 本demo做了什么？
// useContext 使用方法 
// 1 先使用 React.createContext(initValue) 存一个值
// 2 React.createElement(GroupContext.Provider, {
//     value: groupContext
// }, props.children)
// 3 消费组件通过useContext拿到context的值 渲染页面
function GroupComponentTest() {
    const authorContext = useContext(GroupContext)
    console.log({ authorContext });

    return (
        <Group >
            <GroupItem author={authorContext.author} name="《React进阶实践指南》" />
            <GroupItem author={authorContext.author} name="《React18进阶实践指南》" />
        </Group>
    )
}

export default GroupComponentTest