import React from "react";
import { Link_Config } from "@/config/navConfig";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

const { Sider } = Layout;
const NarBar = () => {
  const getItems = Link_Config.map((item) => {
    const { name, children, icon, id } = item;
    const key = id;
    return {
      key,
      icon: React.createElement(icon),
      label: name,
      children: children.map((child) => {
        const { id: subKey, path, label } = child;
        const labelLink = (
          <Link key={subKey} to={"/home" + path}>
            {label}
          </Link>
        );
        return {
          key: subKey,
          label: labelLink,
        };
      }),
    };
  });
  return (
    <Sider className="app-sider" theme="dark">
      <Menu
        mode="inline"
        defaultSelectedKeys={["home"]}
        defaultOpenKeys={["start"]}
        style={{ height: "100%", borderRight: 0 }}
        items={getItems}
      ></Menu>
    </Sider>
  );
};

export default NarBar;
