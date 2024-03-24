import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";

export const Link_Config = [
  {
    name: "组件",
    icon: UserOutlined,
    id: "unitDemo",
    children: [
      {
        path: "/unitDemo/form",
        label: "form表单",
        id: "form表单",
      },
      {
        path: "/unitDemo/tabs",
        label: "tabsDemo",
        id: "tabsDemo",
      },
    ],
  },
  {
    name: "特定场景",
    children: [
      {
        path: "/cacheCompont",
        label: "组件缓存",
        id: "cacheCompont",
      },
      { path: "/teams/Idisnew", label: "路由的嵌套写法", id: "teamIdisnew" },
      { path: "/conceptsOfSnapshots", label: "快照概念", id: "conceptsOfSnapshots" },
      { path: "/stateManagement", label: "状态管理", id: "stateManagement" },
      { path: "/refsCb", label: "ref回调", id: "refsCb" },
      { path: "/refToPrpos", label: "ref传值", id: "refToPrpos" },
      { path: "/effect", label: "useEffect打印两次", id: "effect" },
      { path: "/square", label: "井子棋", id: "square" },
      { path: "/errorBoundary", label: "错误边界", id: "errorBoundary" },
      
    ],
    icon: NotificationOutlined,
    id: "start",
  },
];
