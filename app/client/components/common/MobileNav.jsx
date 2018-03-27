import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Dropdown, Icon } from 'antd';

class MobileNav extends PureComponent {
  constructor() {
    super();
  }

  render(){
    const menu = (
      <Menu
          selectedKeys={[this.props.current]}
      >
        <Menu.Item key="home">
          <Link to="/">
            首页
          </Link>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="question">
          <Link to="/question">
            问答
          </Link>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="recruit">
          <Link to="/recruit">
            招聘
          </Link>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="about">
          <Link to="/about">
            关于
          </Link>
        </Menu.Item>
      </Menu>
    )
    return (
      <Dropdown overlay={menu} trigger={['click']}>
        <div className="mobile-nav ant-dropdown-link">
          {this.props.currentNav}
          <Icon type="down" />
        </div>
      </Dropdown>
    )
  }
}

export default MobileNav;