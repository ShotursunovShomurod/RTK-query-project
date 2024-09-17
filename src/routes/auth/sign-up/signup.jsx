import { Link, useNavigate } from "react-router-dom";
import { Button, Form, Input, Typography } from "antd";
import { useSignUpRequestMutation } from "../../../redux/api/authApi";
import { useEffect } from "react";

const { Title, Text } = Typography;
const SignUp = () => {
  const navigete = useNavigate();
  const [signUpRequest, { data, isSuccess }] = useSignUpRequestMutation();
  const onFinish = (values) => {
    signUpRequest(values);
  };
  console.log(data);
  useEffect(() => {
    if (isSuccess && data.payload?.email) {
      navigete(`/auth/otp?email=${btoa(data.payload.email)}`);
    }
  }, [isSuccess]);
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      {" "}
      <Form
        name="basic"
        layout="vertical"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Title level={1}>Sign Up</Title>
        <Form.Item
          label="Firstname"
          name="first_name"
          rules={[
            {
              required: true,
              message: "Please input your first_name!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button className="w-full" type="primary" htmlType="submit">
            Sign Up
          </Button>
        </Form.Item>
        <Text>
          Already have an account? <Link to="/auth/sign-in">Sign Ip</Link>
        </Text>
      </Form>
    </div>
  );
};

export default SignUp;
