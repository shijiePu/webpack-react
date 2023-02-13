import {
    LaptopOutlined,
    NotificationOutlined,
    UserOutlined,
  } from "@ant-design/icons";

export const Link_Config = [
    {
      name: "unitDemo",
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
      name: "antdDesignChild",
      icon: UserOutlined,
      id: "antdDesignChild",
      children: [
        {
          path: "/antdDesign/child/:asjkdhjkas",
          label: "antdDesignChild",
          id: "antdChild",
        },
        {
          path: "/antdDesign/child2",
          label: "Child2",
          id: "antdChild2",
        },
      ],
    },
    {
      name: "start...",
      children: [
        { path: "/", label: "HomePage", id: "home" },
        {
          path: "/ArcoDesign",
          label: "ArcoDesign",
          id: "ArcoDesign",
        },
        {
          path: "/ArcoDesign",
          label: "antdDesign",
          id: "antdDesign",
        },
      ],
      icon: NotificationOutlined,
      id: "start",
    },
    {
      name: "about",
      icon: LaptopOutlined,
      id: "about",
      children: [
        { path: "/teams/Idisnew", label: "teamIdIsNew", id: "teamIdisnew" },
        { path: "/teams/new", label: "newTeam", id: "newTeam" },
      ],
    },
  ];