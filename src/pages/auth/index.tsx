import SingIn from "@/components/auth/SingIn";
import SingUp from "@/components/auth/SingUp";
import Verifyotp from "@/components/auth/Verifyotp";
import { Col, Row } from "antd";
import Image from "next/image";
import { useState } from "react";
import authImage from "../../../public/static/images/auth.png";
import logo from "../../../public/static/images/fav.png";
const AuthUser = () => {
  const [registerOpen, setRegisterOpen] = useState(false);
  const [verifyotp, setVerifyotp] = useState(false);
  const handleRegisterToggle = () => {
    setRegisterOpen(!registerOpen);
  };

  return (
    <div className="auth-area-main">
      <div
        className="auth-box-area"
        style={{ backgroundColor: "hsla(0, 0%, 100%, 0.8)" }}
      >
        <Row>
          <Col lg={14}>
            <div className="auth-left">
              <div className="left-content">
                <Image
                  src={authImage}
                  alt="login left image"
                  style={{ width: "100%", height: "100%" }}
                  priority
                  placeholder="blur"
                />
              </div>
            </div>
          </Col>
          <Col lg={10} md={24}>
            <div
              className="auth-form-main"
              style={{
                backgroundColor: "transparent",
                boxShadow: "2px 3px 7px rgb(0 0 0 / 20%)",
                marginTop: registerOpen ? "0" : "50px",
              }}
            >
              <div className="login-logo">
                <div className="logo-image">
                  <Image
                    src={logo}
                    alt="home banner image"
                    style={{ width: "100%", height: "100%" }}
                    priority
                    placeholder="blur"
                  />
                </div>
                <h2 style={{ color: "#475768" }}>Aman Chat</h2>
              </div>
              <div className="login-inputs-area">
                {verifyotp ? (
                  <Verifyotp />
                ) : registerOpen ? (
                  <SingUp
                    handleRegisterToggle={handleRegisterToggle}
                    setVerifyot={setVerifyotp}
                  />
                ) : (
                  <SingIn handleRegisterToggle={handleRegisterToggle}></SingIn>
                )}
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default AuthUser;
