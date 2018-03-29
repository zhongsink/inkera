import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

class WillLogin extends PureComponent {
  constructor(){
    super()
  }
  render() {
    const user = this.props.user;
    return (
      <div className="unlogin">
        <Link className="login" to="/login">登录</Link>
        <Link className="register" to="/register">注册</Link>
      </div>
    )
  }
}

export default WillLogin;

