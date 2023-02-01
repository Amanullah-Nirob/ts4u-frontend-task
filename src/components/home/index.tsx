import { Layout, theme } from "antd";
import Head from "next/head";
import LayoutFooter from "./LayoutFooter";
import LayoutHeader from "./LayoutHeader";
import LayoutMainContent from "./LayoutMainContent";
import LayoutSideMenu from "./LayoutSideMenu";

const { Sider, Content, Header } = Layout;

const MainHome = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <>
      <Head>
        <title>AmanShop </title>
      </Head>
      <div className="main-home">
        <Layout>
          <Sider trigger={null} collapsible width={220}>
            <LayoutSideMenu />
          </Sider>
          <Layout className="site-layout">
            <LayoutHeader />
            <Content
              style={{
                margin: "15px 13px",
                padding: 24,
                boxShadow: "0 0 12px #0000000d",
                border: "1px solid #e4e7ed",
                borderRadius: "4px",
                height: "100%",
                background: colorBgContainer,
              }}
            >
              <LayoutMainContent />
            </Content>
            <LayoutFooter />
          </Layout>
        </Layout>
      </div>
    </>
  );
};

export default MainHome;
