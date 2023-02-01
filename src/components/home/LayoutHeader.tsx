import {
  FullscreenOutlined,
  MenuFoldOutlined,
  TranslationOutlined,
} from "@ant-design/icons";
import { Image, Layout } from "antd";
import Link from "next/link";
import React from "react";
import SearchProduct from "../header/SearchProduct";

const { Header } = Layout;
function LayoutHeader() {
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
          <Link href="/profile">
            <p>Profile</p>
          </Link>

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
