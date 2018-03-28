import React, { PureComponent } from 'react';
import Avatar from 'react-avatar';
import Logined from './Logined';
import WillLogin from './WillLogin'

class UserBar extends PureComponent {
  constructor(){
    super();
  }

  render() {
    const user = this.props.user || {name: "inkera", login: false};
    const Login = user.login ? Logined: WillLogin
    return (
      <div className="login-state">
        <Login user={user}/>
      </div>
    )
  }
}

export default UserBar;