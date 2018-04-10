import React, { PureComponent } from 'react';
import Avatar from 'react-avatar';
import { Link } from 'react-router-dom';
import { Icon, message } from 'antd'
import './styles/UserNav.less';

class UserNav extends PureComponent {
  constructor() {
    super()
  }

  render() {
    let { user, url, text } = this.props
    return (
      <div className="user-action-nav">
        <Avatar
          name={user.name}
          size={50}
          textSizeRatio={1.5}
          src={user.portrait}
        />
        <div className="write-btn">
          <Link to={url}>
            <Icon type="edit" />
            &nbsp;&nbsp;{text}
          </Link>
        </div>
        <div className="user-home">
          <Link to={`/user/${user.authentication_token}`}>
            我的主页
          </Link>
        </div>
      </div>
    )
  }
}

export default UserNav
