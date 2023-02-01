import { useLoginMutation } from "@/redux/apiSlice/userApi";
import { useAppDispatch } from "@/redux/hooks";
import { LoginRequest } from "@/redux/interface/userinterface";
import { setLoggedInUser } from "@/redux/slice/auth/authSlice";
import { Button, Form, Input, message } from "antd";
import Router from "next/router";
type SizeType = Parameters<typeof Form>[0]["size"];

const SingIn = ({ handleRegisterToggle }: any) => {
  const [form] = Form.useForm();
  const [login, { isLoading, isError, error }] = useLoginMutation();
  const dispatch = useAppDispatch();
  const handleSubmit = async (values: any) => {
    try {
      const loginData = await login(values as LoginRequest).unwrap();
      message.success("login successful");
      dispatch(setLoggedInUser(loginData));
      Router.push("/");
    } catch (error: any) {
      message.error(error.data.message);
      console.log(error);
    }
  };

  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
    },
  };

  return (
    <div className="auth-form">
      <Form
        form={form}
        name="login"
        onFinish={handleSubmit}
        size={"large" as SizeType}
        validateMessages={validateMessages}
        className="register-form"
      >
        <Form.Item name={"email"} rules={[{ required: true, type: "email" }]}>
          <Input type="email" placeholder="Email" />
        </Form.Item>

        <Form.Item name="password" rules={[{ required: true }]}>
          <Input.Password type="password" placeholder="Password" />
        </Form.Item>

        <div className="form-action-main">
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="register-form-button"
              loading={isLoading}
              style={{ width: "100%" }}
            >
              Login
            </Button>
          </Form.Item>
          <div className="bottom-question">
            <Button type="link" onClick={handleRegisterToggle}>
              New User? Register
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default SingIn;
