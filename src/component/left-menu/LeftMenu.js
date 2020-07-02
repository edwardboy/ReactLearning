import React, { Component } from "react";
import { Menu, Button } from "antd";
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css";

const { SubMenu } = Menu;

class LeftMenu extends Component {
  state = {
    collapsed: true,
    current: "mail",
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    const { current } = this.state;
    return (
      <Menu
        style={{ width: 256, height: "100%" }}
        onClick={this.handleClick}
        selectedKeys={[current]}
        mode="vertical"
      >
        <Menu.Item key="mail" icon={<MailOutlined />}>
          家装
        </Menu.Item>
        <Menu.Item key="app" icon={<DesktopOutlined />}>
          数码产品
        </Menu.Item>
        <Menu.Item key="setting" icon={<SettingOutlined />}>
          Setting
        </Menu.Item>
        <Menu.Item key="container" icon={<ContainerOutlined />}>
          Container
        </Menu.Item>
      </Menu>
    );
  }

  handleClick = (e) => {
    this.setState({ current: e.key });
  };
}

export default LeftMenu;
