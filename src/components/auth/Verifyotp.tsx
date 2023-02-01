import { useVerifyotpMutation } from "@/redux/apiSlice/userApi";
import { useAppDispatch } from "@/redux/hooks";
import { verifyotpReguest } from "@/redux/interface/userinterface";
import { setLoggedInUser } from "@/redux/slice/auth/authSlice";
import { Button, Form, Input, message } from "antd";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
type SizeType = Parameters<typeof Form>[0]["size"];

const Verifyotp = () => {
  const [timeLeft, setTimeLeft] = useState(300000); // 5 minutes in milliseconds
  const [showTimeLeft, setShowTimeLeft] = useState(true);
  const router = useRouter();
  const [verifyotp, { isLoading }] = useVerifyotpMutation();
  const dispatch = useAppDispatch();
  useEffect(() => {
    const timer = setTimeout(() => {
      message.error("Time limit exceeded, please request a new OTP.");
      setShowTimeLeft(false);
    }, timeLeft);

    const interval = setInterval(() => {
      setTimeLeft((prevTimeLeft) => prevTimeLeft - 1000);
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  const handleSubmit = async (values: any) => {
    try {
      const verifyOtpData = { otp: values.otp, email: router?.query?.email };
      const data = await verifyotp(verifyOtpData as verifyotpReguest).unwrap();
      if (data && data.success === true) {
        dispatch(setLoggedInUser(data));
        router.push("/");
      }
    } catch (err: any) {
      message.error(err.message || "Unauthorized OTP");
    }
  };

  const displayTimeLeft = () => {
    const minutes = Math.floor(timeLeft / 60000);
    const seconds = ((timeLeft % 60000) / 1000).toFixed(0);
    return (
      <div>
        Time left:
        <h2>
          <span>{minutes}</span>:<span>{seconds.padStart(2, "0")}</span>
        </h2>
      </div>
    );
  };

  return (
    <div className="verify-otp">
      <div className="verify-info">
        <div className="title">
          <h3>Email verification</h3>
          <p>
            OTP has been sent your email Please verify! for the register
            fulfilled,
          </p>
        </div>
        <div className="time-left">{showTimeLeft && displayTimeLeft()}</div>
      </div>
      <Form onFinish={handleSubmit} size={"large" as SizeType}>
        <Form.Item
          name="otp"
          rules={[{ required: true, message: "Please input the OTP" }]}
        >
          <Input placeholder="Enter OTP" />
        </Form.Item>
        <div className="otp-action">
          <Form.Item>
            <Button
              loading={isLoading}
              style={{ width: "90%" }}
              type="primary"
              htmlType="submit"
            >
              Verify
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};

export default Verifyotp;
