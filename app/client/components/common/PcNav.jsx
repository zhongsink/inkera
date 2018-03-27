import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Dropdown, Icon } from 'antd';

class PCNav extends PureComponent {
  constructor() {
    super();
  }

  render(){
    return (
      <Menu
        mode="horizontal"
        selectedKeys={[this.props.current]}
        style={{lineHeight: '58px'}}>
        <Menu.Item key="home">
          <Link to="/">
            首页
          </Link>
        </Menu.Item>
        <Menu.Item key="question">
          <Link to="/question">
            问答
          </Link>
        </Menu.Item>
        <Menu.Item key="recruit">
          <Link to="/recruit">
            招聘
          </Link>
        </Menu.Item>
        <Menu.Item key="about">
          <Link to="/about">
            关于
          </Link>
        </Menu.Item>
      </Menu>
    )
  }
}

export default PCNav;