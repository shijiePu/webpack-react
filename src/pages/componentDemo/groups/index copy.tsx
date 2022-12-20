import { Group, GroupItem } from "@/components/groups";
import { GroupContext } from "@/components/context/groupContext"
// 本demo做了什么？
// useContext 使用方法 
// 1 先使用 React.createContext(initValue) 存一个值
// 2 React.createElement(GroupContext.Provider, {
//     value: groupContext
// }, props.children)
// 3 消费组件通过useContext拿到context的值 渲染页面
function GroupComponentTest() {
    return (
        <Group >
            <GroupItem name="《React进阶实践指南》" />
            {/* <GroupItem name="《React182222》" /> */}
        </Group>
    )
}

export default GroupComponentTest