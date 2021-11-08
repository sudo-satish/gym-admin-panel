import type { NextPage } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import { Layout, Input, Button, Form, Checkbox } from "antd";
import styles from "./login.module.scss";
import AuthService from "../../services/AuthService";

const LoginPageHeader = () => (
  <Head>
    <title>Login Page</title>
    <meta name="description" content="Login Please" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
);

const LoginPage: NextPage = () => {
  const router = useRouter();
  const onFinish = async (values: any) => {
    console.log("Success:", values);
    AuthService.verifyOtp({
      mobileNumber: values.mobileNumber,
      otp: values.otp,
    })
      .then((response) => {
        router.push("/dashboard");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <LoginPageHeader />
      <div className={styles["fullView"]}>
        <Form
          name="basic"
          layout="vertical"
          labelCol={{ span: 16 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Mobile Number"
            name="mobileNumber"
            rules={[
              { required: true, message: "Please input your mobile number!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="otp"
            rules={[{ required: true, message: "Please input OTP!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Verify OTP
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default LoginPage;
