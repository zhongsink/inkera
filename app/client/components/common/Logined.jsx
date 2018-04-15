import React, { PureComponent } from 'react';
import Avatar from 'react-avatar';
import { Link } from 'react-router-dom';
import { Dropdown, Menu, Icon, message } from 'antd';
import axios from 'axios';

class Logined extends PureComponent {
  constructor() {
    super()
  }

  logout() {
    axios.delete('/logout', {
      data: {
        _csrf: document.querySelector("meta[name=csrf-token]").content
      }
    }).then((response) => {
      if (response.data.status) {
        message.success('账户登出成功');
        location.href = '/';
      }
    }).catch((error) => {
      message.success('账户登出失败');
    })

  }

  render() {
    const user = this.props.user;
    const SubMenu = Menu.SubMenu;
    const menu = (
      <Menu className="user-bar-menu">
        <Menu.Item>
          <Link to="/">
            <Icon type="home" />
            &nbsp;&nbsp;首页
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/editor/new">
            <Icon type="edit" />
            &nbsp;&nbsp;写文章
          </Link>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item>
          <Link to={`/user/${user.authentication_token}`}>
            <Icon type="user" />
            &nbsp;&nbsp;我的主页
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/user/${user.authentication_token}`}>
            <Icon type="heart" />
            &nbsp;&nbsp;我喜欢的
          </Link>
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
          <a className="signout" onClick={this.logout.bind(this)}>
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
            src={user.portrait}
          />
          <Icon type="down" />
        </a>
      </Dropdown>
    )
  }
}

export default Logined;

