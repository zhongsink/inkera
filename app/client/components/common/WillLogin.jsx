import React, { PureComponent } from 'react';

class WillLogin extends PureComponent {
  constructor(){
    super()
    this.login = this.login.bind(this);
    this.register = this.register.bind(this);
  }
  login(e) {
    console.log(e)
  }
  register(e) {
    console.log(e)
  }
  render() {
    const user = this.props.user;
    return (
      <div className="unlogin">
        <span className="login" onClick={this.login}>登录</span>
        <span className="register" onClick={this.register}>注册</span>
      </div>
    )
  }
}

export default WillLogin;

