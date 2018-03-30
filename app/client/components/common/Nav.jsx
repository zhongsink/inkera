import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Dropdown, Icon } from 'antd';
import PCNav from './PcNav';
import MobileNav from './MobileNav';

class Nav extends PureComponent {
  constructor() {
    super();
    this.handleClick= this.handleClick.bind(this);
  }

  handleClick(e) {
    console.log('click ', e);
  }
  render() {
    const nav = {
      home: '首页',
      question: '问答',
      recruit: '招聘'
    }
    return (
      <div className="nav">
        <PCNav current={this.props.current}/>
        <MobileNav current={this.props.current} currentNav={nav[`${this.props.current}`]}/>
      </div>
    )
  }
}

export default Nav;