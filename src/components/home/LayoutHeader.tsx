import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  selectCurrentUser,
  setLoggedInUser,
} from "@/redux/slice/auth/authSlice";
import {
  FullscreenOutlined,
  MenuFoldOutlined,
  TranslationOutlined,
} from "@ant-design/icons";
import { Image, Layout, message } from "antd";
import Link from "next/link";
import Router from "next/router";
import React from "react";
import SearchProduct from "../header/SearchProduct";

const { Header } = Layout;
function LayoutHeader() {
  const loggedInUser = useAppSelector(selectCurrentUser);
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(setLoggedInUser(null));
    Router.push("/auth");
    message.success("logout successful");
  };
  return (
    <Header
      style={{
        padding: "0 24px",
        background: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
      className="header"
    >
      {React.createElement(MenuFoldOutlined, {
        className: "trigger",
      })}
      <SearchProduct />
      <div className="header-other">
        <div className="translate">
          <TranslationOutlined style={{ fontSize: "20px" }} />
        </div>
        <div className="full-screen">
          <FullscreenOutlined />
        </div>
        <div className="avater">
          <div className="link">
            {!loggedInUser?.token ? (
              <Link href="/auth">
                <p>Login</p>
              </Link>
            ) : (
              <p style={{ cursor: "pointer" }} onClick={handleLogout}>
                Logout
              </p>
            )}
            <Link href="/profile">
              <p>Profile</p>
            </Link>
          </div>

          <Image
            src="/static/images/aman.png"
            alt="profile photo"
            style={{ width: 45 }}
          />
        </div>
      </div>
    </Header>
  );
}

export default LayoutHeader;
