import React from "react";
import { Alert, Button, Card, Flex, Form, Input , Spin, Typography } from "antd";
import {Link} from "react-router-dom";
// import "../App.css"
import registerImage  from '../assets/register.png'
import userSignup from "../hooks/userSignup";

const Register = () => {
  const {loading ,error, registerUser} = userSignup();
  const handleRegister = (values) => {
    registerUser(values);
  };
  return (

      <Card className="form-container1">
        <Flex gap="large" align="center">
          {/* Form */}
          <Flex vertical flex={1}>
            <Typography.Title level={3} strong className="title">
              Create an account
            </Typography.Title>
            {/* <Typography.Title type="secondary" strong className="slogan">
              Join For exclusive access!
            </Typography.Title> */}
            <Form
              layout="vertical"
              onFinish={handleRegister}
              autoComplete="off"
            >
              <Form.Item
                label="Full Name"
                name="name"
                rules={[
                  {
                    required: true,
                    message: "please input your full name",
                  },
                ]}
              >
                <Input size='large' placeholder="Enter your fullname" />
              </Form.Item>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "please input your Email",
                  },
                  {
                    type:"email",
                    message: 'The input is not valid Email'
                  }
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
                  }
                ]}
              >
                <Input.Password size="large" placeholder="Enter your Password" />
              </Form.Item>
              <Form.Item
                label="Password"
                name="passwordConfirm"
                rules={[
                  {
                    required: true,
                    message: "please input your Confirm Password",
                  }
                ]}
              >
                <Input.Password size="large" placeholder="Re-Enter your Password" />
              </Form.Item>

               {error && <Alert description={error} type='error' showIcon closable className='alert'/>}

                 <Button
                  type={`${loading ? '' : "primary"}`}
                  htmlType="submit" 
                  size="large" 
                  className="btn">
                    {loading ? <Spin /> : 'Create Account'}
                    
                    </Button>
              <Form.Item>
              </Form.Item>
              <Link to="/login">
                 <Button size="large" className="btn">Sign in</Button>
                 </Link>
              <Form.Item>
              </Form.Item>
            </Form>
          </Flex>

          {/* Image */}
          <Flex flex={1} >
            <img src={registerImage} className="auth-image" alt="" />
          </Flex>
        </Flex>
      </Card>
   
  );
};

export default Register;
