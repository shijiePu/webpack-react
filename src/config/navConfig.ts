import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";

export const Link_Config = [
  {
    name: "组件库",
    icon: UserOutlined,
    id: "unitDemo",
    children: [
      {
        path: "/unitDemo/Group",
        label: "GroupsDemo",
        id: "GroupsDemo",
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
    ],
    icon: NotificationOutlined,
    id: "start",
  },
];
