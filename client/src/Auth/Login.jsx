// import React from "react";
import { Alert, Button, Card, Flex, Form, Input, Spin, Typography } from "antd";
import { Link } from "react-router-dom";
import useLogin from "../hooks/useLogin";
import loginImage from "../assets/logoschool2.png";

const Login = () => {
  const { error, loading, loginUser } = useLogin();
  const handleLogin = async (values) => {
    await loginUser(values);
  };
  return (
    <Card className="form-container">
      <Flex gap="large" align="center">
        {/* Image */}
        <Flex flex={1}>
          <img src={loginImage} className="auth-image" alt="" />
        </Flex>
        {/* Form */}
        <Flex vertical flex={1}>
          <Typography.Title level={3} strong className="title">
            Sign In
          </Typography.Title>
          {/* <Typography.Title type="secondary" strong className="slogan">
          Unlock world!
        </Typography.Title> */}
          <Form layout="vertical" onFinish={handleLogin} autoComplete="off">
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "please input your Email",
                },
                {
                  type: "email",
                  message: "The input is not valid Email",
                },
              ]}
            >
              <Input size="large" placeholder="Enter your Email" />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "please input your Password",
                },
              ]}
            >
              <Input.Password size="large" placeholder="Enter your Password" />
            </Form.Item>

            {error && (
              <Alert
                // description={error}
                type="error"
                showIcon
                closable
                className="alert"
              />
            )}

            <Button
              type={`${loading ? "" : "primary"}`}
              htmlType="submit"
              size="large"
              className="btn"
            >
              {loading ? <Spin /> : "Sign In"}
            </Button>
            <Form.Item></Form.Item>
            <Link to="/signup">
              <Button size="large" className="btn">
                Create an account
              </Button>
            </Link>
            <Form.Item></Form.Item>
          </Form>
        </Flex>
      </Flex>
    </Card>
  );
};

export default Login;
