import { Input, Button, Form, Typography } from "antd";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useOtpVerifyRequestMutation } from "../../../redux/api/authApi";

const { Title } = Typography;

const Otp = () => {
  const navigete = useNavigate();
  const [otpVerifyRequest, { data, isSuccess }] = useOtpVerifyRequestMutation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");

  useEffect(() => {
    if (searchParams.get("email")) {
      setEmail(atob(searchParams.get("email")));
      if (isSuccess) {
        navigete(`/auth/sign-in`);
      }
    }
  }, [searchParams, isSuccess]);
  console.log(email);
  const onFinish = () => {
    otpVerifyRequest({ email, otp });
  };
  console.log(data);

  return (
    <Form
      onFinish={onFinish}
      className="flex flex-col gap-3 items-center justify-center"
      layout="vertical"
    >
      <Title level={1}>Verify your code</Title>

      <div className="flex items-center justify-center">
        {" "}
        <Input.OTP length={6} onChange={(text) => setOtp(text)} />
      </div>

      <Form.Item>
        <Button className="w-full" type="primary" htmlType="submit">
          Verify
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Otp;
