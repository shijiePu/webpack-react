import {
  NotificationOutlined,
  UserOutlined,
  MenuUnfoldOutlined
} from "@ant-design/icons";

export const Link_Config = [
  {
    name: "首页",
    icon: MenuUnfoldOutlined,
    id: "home",
    path: "/home",
  },
  {
    name: "组件",
    icon: UserOutlined,
    id: "unitDemo",
    children: [
      {
        path: "/manage",
        label: "XX管理",
        id: "tabsDemo",
      },
    ],
  },
  {
    name: "特定场景",
    children: [
      { path: "/errorBoundary", label: "错误边界", id: "errorBoundary" },
      // plop占位
    ],
    icon: NotificationOutlined,
    id: "start",
  },
];
