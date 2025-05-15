import { useEffect, FC } from "react";
import { Form, Input, Button, message } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import './login.scss'

const LoginForm: FC = () => {
  // 触发登录方法
  const onFinish = async (values: { username: string, password: string }) => {
    // 开发环境 mock
    console.log(values);
    if (process.env.NODE_ENV === "development") {
      const { username, password } = values;
      try {
        sessionStorage.setItem("user", username);
        sessionStorage.setItem("username", username);
        sessionStorage.setItem("password", password);
        navigate("/home", { replace: true });
      } catch (e) { }
      return;
    }
  };

  const navigate = useNavigate();

  const FormView = (
    <Form
      initialValues={{ username: "admin", password: "123456" }}
      className="login-form"
      name="login-form"
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: "请输入用户名" }]}
      >
        <Input placeholder="用户名" prefix={<UserOutlined />} size="large" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "请输入密码" }]}
        extra="用户名：admin 密码：123456"
      >
        <Input.Password
          placeholder="密码"
          prefix={<LockOutlined />}
          size="large"
        />
      </Form.Item>
      <Form.Item>
        <Button
          className="login-form-button"
          htmlType="submit"
          size="large"
          type="primary"
        >
          登录
        </Button>
      </Form.Item>
    </Form>
  );

  return (
    <div className="login-layout" id="login-layout">
      <div className="logo-box">
        <span className="logo-name">登录</span>
      </div>
      {FormView}
    </div>
  );
};

export default LoginForm;
