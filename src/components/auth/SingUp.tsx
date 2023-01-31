import { useRegisterUserMutation } from "@/redux/apiSlice/userApi";
import { useAppDispatch } from "@/redux/hooks";
import { RegisterRequest } from "@/redux/interface/userinterface";
import { Button, Form, Input, message } from "antd";
type SizeType = Parameters<typeof Form>[0]["size"];

const SingUp = ({ handleRegisterToggle }: any) => {
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();
  const [registerUser, { data, isLoading, isError, error }] =
    useRegisterUserMutation();
  const [messageApi, contextHolder] = message.useMessage();
  const handleSubmit = async (values: any) => {
    try {
      const registerInputValue = {
        name: values.Name,
        email: values.Email,
        password: values.password,
      };
      const userData = await registerUser(
        registerInputValue as RegisterRequest,
      );
      console.log(userData);
    } catch (error: any) {
      console.log(error);
      messageApi.open({
        type: "error",
        content: "registration failed",
      });
    }
  };

  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      password: "${label} is not a valid email!",
    },
  };
  const validateConfirmPassword = (_: any, value: any) => {
    const password = form.getFieldValue("password");
    if (value && value !== password) {
      return Promise.reject("The two passwords that you entered do not match!");
    }
    return Promise.resolve();
  };
  const validatePassword = (rule: any, value: string, callback: any) => {
    if (value && value.length < 6) {
      callback("Password must be at least 6 characters.");
    } else {
      callback();
    }
  };

  return (
    <div className="auth-form">
      <Form
        form={form}
        name="register"
        onFinish={handleSubmit}
        size={"large" as SizeType}
        validateMessages={validateMessages}
        className="register-form"
      >
        <Form.Item name={"Name"} rules={[{ required: true }]}>
          <Input type="Name" placeholder="Name" />
        </Form.Item>

        <Form.Item name={"Email"} rules={[{ required: true, type: "email" }]}>
          <Input type="email" placeholder="Email" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true }, { validator: validatePassword }]}
        >
          <Input.Password type="password" placeholder="Password" />
        </Form.Item>
        <Form.Item
          name="confirmPassword"
          rules={[
            { required: true, message: "Please confirm your password!" },
            { validator: validateConfirmPassword },
          ]}
        >
          <Input.Password placeholder="Confirm Password" />
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
              Register
            </Button>
          </Form.Item>
          <div className="bottom-question">
            <Button type="link" onClick={handleRegisterToggle}>
              Already have an account?
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default SingUp;
