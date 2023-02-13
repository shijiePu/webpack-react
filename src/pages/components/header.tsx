import { Layout, Menu, Dropdown, Space } from "antd";
import { TrophyOutlined, UserOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { useNavigate } from "react-router-dom";

const PageHeader = () => {
  const getTitle = () => {
    return <TrophyOutlined style={{ display: "flex", alignItems: "center" }} />;
  };

  const loginOut = () => {
    sessionStorage.clear();
    navigate("/login", { replace: true });
  };

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <span onClick={loginOut}>退出登录</span>,
    },
  ];

  const navigate = useNavigate();

  const getMenus = () => {
    return (
      <>
        <Dropdown menu={{ items }}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              {sessionStorage.getItem("username") || "暂无信息"}
              <UserOutlined />
            </Space>
          </a>
        </Dropdown>
      </>
    );
  };

  return (
    <div className="page_header">
      {getTitle()}
      {getMenus()}
    </div>
  );
};

export default PageHeader;
