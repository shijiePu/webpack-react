import { Outlet, RouteObject, useParams } from "react-router-dom"
import HomePage from "@/pages/home";
import ArcoDesign from "@/pages/ArcoDesign";
import AntdDesign from "@/pages/antDesign";
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Children } from "react";

const Link_Config = [
    {
        name: 'antdDesignChild',
        icon: UserOutlined,
        id: 'antdDesignChild',
        children: [
            {
                path: '/antdDesign/child/:asjkdhjkas',
                label: "antdDesignChild",
                id: 'antdChild'
            },
            {
                path: '/antdDesign/child2',
                label: "Child2",
                id: 'antdChild2'
            },
        ],
    },
    {
        name: 'start...',
        children: [
            { path: '/', label: "HomePage", id: 'home' },
            {
                path: '/ArcoDesign', label: "ArcoDesign",
                id: 'ArcoDesign'
            },
            {
                path: '/antdDesign', label: "antdDesign",
                id: 'antdDesign'
            },
        ],
        icon: NotificationOutlined,
        id: 'start'
    },
    {
        name: 'about', icon: LaptopOutlined, id: 'about', children: [
            { path: '/AboutPage', label: "AboutPage", id: 'AboutPage' },
        ],
    },
]
// todo 
// 接上面关于在useRoutes中调用RouteContext的解释

const ROUTER_CONFIG: RouteObject[] = [
    {
        path: "/",
        element: <HomePage />,
        children: [
            {
                path: "/test",
                element: <>test</>
            },
            {
                path: "/ArcoDesign",
                element: <ArcoDesign />
            },
            {
                path: "antdDesign",
                element: <AntdDesign />,//todo  注释报错 : pamams报错？
                children: [
                    {
                        // index: true,
                        path: "child/:user",
                        element: <AntdDesignChild />,
                    },
                    {
                        path: "child2",
                        element: <AntdDesignChild2 />
                    }
                ]
            },

        ]
    },
    { path: "/team", element: <AboutPage /> },
    {
        path: "*",
        element: <>404 Not Found!</>,
    },
];

export function AboutPage() {
    return (<>i am AboutPage</>)
}

export function AntdDesignChild() {
    // todo  没有匹配到该组件   顺到/antdDesign组件了
    // did
    let { user } = useParams();
    console.log('AntdDsignChild params user ', user);
    return (<>
        <h1>
            i am AntdDesgnChild</h1>
        <h1 style={{ color: 'red' }}>
            my param is {user}
        </h1>
    </>)
}

export function AntdDesignChildParam() {
    let { user } = useParams();
    console.log('AntdDsignChild params user ', user);
    return (<>
        <h1><Outlet /></h1>


    </>)
}

export function AntdDesignChild2() {
    // todo  没有匹配到该组件   顺到/antdDesign组件了
    // did
    let params = useParams();
    console.log('AntdDsignChild params ', params);
    return (<>i am AntdDesgnChild</>)
}



// 可以测试一下  _renderMatches

// todo 
// 接上面关于在useRoutes中调用RouteContext的解释
// ，useRoutes在开头就用到了RouteContext，而它内部有值的情况是这样的
// {/* <Routes> */ }
//   <Route path="/" element={<App />}>
//   {/* 注意，这里父级后面必须加上 /* 用于匹配后续的任意子路由，否则按照 react-router 的路由匹配方式是无法匹配上内部嵌套的子路由的 */}
//   <Route path="/teams/*" element={<Teams />} />
//   </Route>
// </Routes>
// 在Teams组件内部：
// import { Routes, Route } from 'react-router'
// import Team from './Team'
// import NewTeamForm from './NewTeamForm'
// export function Teams() {
//     // 组件内部继续使用 useRoutes（之前说过了，使用 Routes 组件就是调用 useRoutes）
//     return (
//         <Routes>
//             {/* 这里会在内部处理父路由已经匹配到的路径前缀，所以不要写成 /teams/:teamId，直接写后面的部分 */}
//             <Route path="/:teamId" element={<Team />} />
//             <Route path="/new" element={<NewTeamForm />} />
//         </Routes>
//     )
// }
// 这证明我们不一定要全部将路由定义在最外层，可以适当拆解出子路由，做一些比较特殊的功能，比如路由的条件渲染，鉴权等。
// 这里整体概括一下useRoutes做的事情：

// 获取上下文中调用useRoutes后的信息，如果有信息证明此次调用时作为子路由使用的，需要合并父路由的匹配信息。
// 移除父路由已经匹配完毕的pathname前缀后，调用matchRoutes与当前传入的routes配置相匹配，返回匹配到的matches数组。
// 调用_renderMatches方法，渲染上一步得到的matches数组。

// 整个流程对应三个阶段：路由上下文解析阶段，路由匹配阶段，路由渲染阶段。
// 路由上下文解析阶段不用多说，下面详细说说后面两个阶段。


export { ROUTER_CONFIG, Link_Config };