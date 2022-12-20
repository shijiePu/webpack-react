import { Outlet, RouteObject, useParams } from "react-router-dom"
import HomePage from "@/pages/home";
import ArcoDesign from "@/pages/ArcoDesign";
import AntdDesign from "@/pages/antDesign";
import GroupsDemo from "@/pages/componentDemo/groups";
import TabsDemo from "@/pages/componentDemo/tabs";

import NotFound from "@/pages/NotFound";
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';

const Link_Config = [
    {
        name: 'unitDemo',
        icon: UserOutlined,
        id: 'unitDemo',
        children: [
            {
                path: '/unitDemo/Group',
                label: "GroupsDemo",
                id: 'GroupsDemo'
            },
            {
                path: '/unitDemo/tabs',
                label: "tabsDemo",
                id: 'tabsDemo'
            },
        ],
    },
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
            { path: '/teams/Idisnew', label: "teamIdIsNew", id: 'teamIdisnew' },
            { path: '/teams/new', label: "newTeam", id: 'newTeam' },
        ],
    },
]
// todo 
// 我们不一定要全部将路由定义在最外层.
// 可以适当拆解出子路由，做一些比较特殊的功能，比如路由的条件渲染，鉴权等

const ROUTER_CONFIG: RouteObject[] = [
    {
        path: "/",
        // element: <HomePage />,
        children: [
            {
                path:"unitDemo",
                children:[
                    {
                        path:"Group",
                        element:<GroupsDemo />
                    },
                    {
                        path:"tabs",
                        element:<TabsDemo />
                    },
                ],
            },
            {
                path: "/ArcoDesign",
                element: <ArcoDesign />
            },
            //  注意，使用命令式创建嵌套路由时
            // 路由父级后面必须加上 /* 用于匹配后续的任意子路由，  
            // 否则按照react-router 的路由匹配方式是无法匹配上内部嵌套的子路由的 
            //   <Route path="/teams/*" element={<Teams />} />
            {
                path: "antdDesign",
                element: <AntdDesign />,
                children: [
                    {
                        // index: true & children 不能共存？ √
                        path: "child/:user",
                        element: <AntdDesignChild />,
                        children: [
                            {
                                index: true,
                                element: <AntdDesignGrandson />,
                            }
                        ]
                    },
                    {
                        index: true,
                        path: "child2",
                        element: <AntdDesignChild2 />,
                    }
                ]
            },
        ]
    },
    {
        path: "*",
        element: <NotFound />,
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
        <div className="border">
            <h1>
                i am AntdDesgnChild
            </h1>
            <h1 style={{ color: 'red' }}>
                my param is {user}
            </h1>
            <Outlet />
        </div>
    </>)
}

export function AntdDesignGrandson() {
    console.log('AntdDsignChild Grandson ');
    return (<>
        <div className="border">
            <h1> i am AntdDesign Grandson </h1>
        </div>
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


export { ROUTER_CONFIG, Link_Config };