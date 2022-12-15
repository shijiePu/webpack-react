import { Routes, Route, useParams } from "react-router-dom"

// 使用 Routes 组件就是调用 useRoutes
// useRoutes在开头就用到了RouteContext，
// 而它内部有值的情况是这样的
<Routes>
    <Route path="/" element={<><h1>这里简单测试一下命名式路由的嵌套写法</h1></>}>
        {/* 注意，这里父级后面必须加上 /* 用于匹配后续的任意子路由，否则按照
        react-router 的路由匹配方式是无法匹配上内部嵌套的子路由的 */}
        <Route path="/teams/*" element={<Teams />} />
    </Route>
</Routes>

// 在Teams组件内部：
export function Teams() {
    // 组件内部继续使用 useRoutes
    // useRoutes中调用RouteContext
    return (
        // 使用 Routes 组件就是调用 useRoutes
        <Routes>
            {/* 这里会在内部处理父路由已经匹配到的路径前缀，所以不要写成 /teams/:teamId，直接写后面的部分 */}
            <Route path="/:teamId" element={<OldTeam />} />
            <Route path="/new" element={<NewTeamForm />} />
        </Routes>
    )
}

export function OldTeam() {
    const { teamId } = useParams()
    return (
        <div className="border">
            <h1>i am a OldTeam </h1>
            <h1>my teamId : {teamId} </h1>
        </div>
    )
}

export function NewTeamForm() {
    return (
        <div className="border">
            <h1> 我是NewTeamForm组件 </h1>
        </div>
    )
}

// 这证明我们不一定要全部将路由定义在最外层，可以适当拆解出子路由，做一些比较特殊的功能，比如路由的条件渲染，鉴权等。
// 这里整体概括一下useRoutes做的事情：

// 获取上下文中调用useRoutes后的信息，如果有信息证明此次调用时作为子路由使用的，需要合并父路由的匹配信息。
// 移除父路由已经匹配完毕的pathname前缀后，调用matchRoutes与当前传入的routes配置相匹配，返回匹配到的matches数组。
// 调用_renderMatches方法，渲染上一步得到的matches数组。

// 整个流程对应三个阶段：路由上下文解析阶段，路由匹配阶段，路由渲染阶段。
// 路由上下文解析阶段不用多说，下面详细说说后面两个阶段。






