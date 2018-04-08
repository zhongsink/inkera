import React, { PureComponent } from 'react';
import Avatar from 'react-avatar';
import { Link } from 'react-router-dom';
import { Dropdown, Menu, Icon } from 'antd'

class Logined extends PureComponent {
  constructor() {
    super()
  }
  render() {
    const user = this.props.user;
    const SubMenu = Menu.SubMenu;
    const menu = (
      <Menu className="user-bar-menu">
        <Menu.Item>
          <Link to="/editor/new">
            <Icon type="edit" />
            &nbsp;&nbsp;写文章
          </Link>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item>
          <a href={`/user/${user.authentication_token}`}>
            <Icon type="user" />
            &nbsp;&nbsp;我的主页
          </a>
        </Menu.Item>
        <Menu.Item>
          <a href={`/user/${user.authentication_token}`}>
            <Icon type="heart" />
            &nbsp;&nbsp;我喜欢的
          </a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item>
          <Link to="/about">
            <Icon type="info-circle-o" />
            &nbsp;&nbsp;关于
          </Link>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item>
          <a className="signout">
            <Icon type="logout" />
            &nbsp;&nbsp;登出
          </a>
        </Menu.Item>
      </Menu>
    );
    return (
      <Dropdown overlay={menu} trigger={['click']}>
        <a className="ant-dropdown-link">
          <Avatar
            name={user.name}
            size={32}
            round={true}
            textSizeRatio={1.75}
          />
          <Icon type="down" />
        </a>
      </Dropdown>
    )
  }
}

export default Logined;

