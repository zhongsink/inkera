import React, { PureComponent } from 'react';

class WillLogin extends PureComponent {
  constructor(){
    super()
  }
  render() {
    const user = this.props.user;
    return (
      <div className="unlogin">
        <span className="login">登录</span>
        <span className="register">注册</span>
      </div>
    )
  }
}

export default WillLogin;

