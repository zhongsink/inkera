import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';

class Nav extends PureComponent {
  constructor() {
    super();
    this.handleClick= this.handleClick.bind(this);
  }

  handleClick(e) {
    console.log('click ', e);
  }
  render() {
    return (
      <Menu
        onClick={this.handleClick}
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

export default Nav;