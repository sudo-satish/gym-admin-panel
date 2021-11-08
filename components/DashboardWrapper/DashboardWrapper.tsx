import React from "react";
import { NextPage } from "next";
import { Layout, Menu } from "antd";
import { useRouter } from "next/router";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  BarChartOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { useState } from "react";

const { Header, Content, Footer, Sider } = Layout;
const DashboardWrapper: NextPage = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const router = useRouter();
  return (
    <Layout>
      <Sider
        // collapsible
        collapsed={isCollapsed}
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
        }}
      >
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[router.pathname]}
          onSelect={(props) => {
            router.push(props.key);
          }}
        >
          <Menu.Item key="/dashboard" icon={<BarChartOutlined />}>
            Dashboard
          </Menu.Item>
          <Menu.Item key="/gyms" icon={<UserOutlined />}>
            Gyms
          </Menu.Item>
          <Menu.Item key="/branches" icon={<VideoCameraOutlined />}>
            Branches
          </Menu.Item>
          <Menu.Item key="/members" icon={<UploadOutlined />}>
            Members
          </Menu.Item>
          <Menu.Item key="/trainers" icon={<BarChartOutlined />}>
            Trainers
          </Menu.Item>
          <Menu.Item key="/super-admins" icon={<BarChartOutlined />}>
            Super Admins
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout
        className="site-layout"
        style={{ marginLeft: isCollapsed ? 80 : 200 }}
      >
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <div
            style={{
              display: "inline-block",
              marginLeft: "20px",
              fontSize: "larger",
            }}
          >
            {React.createElement(
              isCollapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: () => setIsCollapsed(!isCollapsed),
              }
            )}
          </div>
        </Header>
        <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, textAlign: "center" }}
          >
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default DashboardWrapper;
