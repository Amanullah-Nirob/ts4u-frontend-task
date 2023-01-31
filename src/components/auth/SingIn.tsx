import { Button, Form, Input } from "antd";
type SizeType = Parameters<typeof Form>[0]["size"];

const SingIn = ({ handleRegisterToggle }: any) => {
  const [form] = Form.useForm();
  const handleSubmit = async (values: any) => {
    console.log(values);
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
        <Form.Item name={"Email"} rules={[{ required: true, type: "email" }]}>
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
              loading={false}
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

export default SingIn;
