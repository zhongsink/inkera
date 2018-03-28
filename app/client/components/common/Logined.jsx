import React, { PureComponent } from 'react';
import Avatar from 'react-avatar';
import {Dropdown, Menu, Icon} from 'antd'

class Logined extends PureComponent {
  constructor(){
    super()
  }
  render() {
    const user = this.props.user;
    const SubMenu = Menu.SubMenu;
    const menu = (
      <Menu className="user-bar-menu">
        <Menu.Item>
          <Icon type="edit" />
          <a>写文章</a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item>
          <Icon type="user" />
          <a>我的主页</a>
        </Menu.Item>
        <Menu.Item>
          <Icon type="heart" />
          <a>我的关注</a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item>
          <Icon type="setting" />
          <a>设置</a>
        </Menu.Item>
        <Menu.Item>
          <Icon type="info-circle-o" />
          <a>关于</a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item>
          <Icon type="logout" />
          <a>登出</a>
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

