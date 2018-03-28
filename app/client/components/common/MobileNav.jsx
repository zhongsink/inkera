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
          className="mobile-menu"
          selectedKeys={[this.props.current]}
      >
        <Menu.Item key="home">
          <Icon type="home" />
          <Link to="/">
            首页
          </Link>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="question">
          <Icon type="question-circle-o" />
          <Link to="/question">
            问答
          </Link>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="recruit">
          <Icon type="team" />
          <Link to="/recruit">
            招聘
          </Link>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="about">
          <Icon type="info-circle-o" />
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