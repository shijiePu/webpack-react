import { useEffect, FC } from "react";
import { Form, Input, Button, message } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
// import ReactCanvasNest from 'react-canvas-nest'
// import { OidcLogin } from '@/pages/login/OidcLogin'
import { useNavigate } from "react-router-dom";
// import Logo from '@/assets/image/login.webp'
import './login.scss'

const LoginForm: FC = () => {
  useEffect(() => {
    // const { token } = userInfo
    // if (token) {
    //   history.push('/')
    //   return
    // }
    // 重置 tab栏为首页
  }, []);

  // 触发登录方法
  const onFinish = async (values: any) => {
    // 开发环境 mock
    console.log(values);
    if (process.env.NODE_ENV === "development") {
      const { username, password } = values;
      try {
        sessionStorage.setItem("user", username);
        sessionStorage.setItem("username", username);
        sessionStorage.setItem("password", password);
        navigate("/home", { replace: true });
        // window.history.pushState({}, "", "/home");
      } catch (e) {}
      return;
    }
    // 线上环境直接返回信息
    // const result = userRes[0]
    // dispatch(setUserInfo(result))
    // history.push('/')
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
        {/* <OidcLogin loginCallback={() => history.push('/')} /> */}
      </Form.Item>
    </Form>
  );

  return (
    <div className="login-layout" id="login-layout">
      {/* <ReactCanvasNest
        config={{
          pointColor: floatColor,
          lineColor: floatColor,
          pointOpacity: 0.6,
        }}
        style={{ zIndex: 1 }}
      /> */}
      <div className="logo-box">
        {/* <img alt="" className="logo" src={Logo} /> */}
        <span className="logo-name">React-Antd Multi-Tab</span>
      </div>
      {FormView}
    </div>
  );
};

export default LoginForm;
