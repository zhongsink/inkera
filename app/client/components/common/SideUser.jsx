import React, { PureComponent } from 'react';
import Avatar from 'react-avatar';
import { Link } from 'react-router-dom';
import './styles/SideUser.less';

class SideUser extends PureComponent {
  constructor() {
    super()
  }

  render() {
    const { user } = this.props;
    return (
      <div className="side-user">
        <div className="block-title">
          关于作者
        </div>
        <div className="block-body">
          <div className="body-item">
            <Link to={`/user/${user.authentication_token}`}>
              <Avatar
                name={user.name}
                size={40}
                textSizeRatio={2}
                src={user.portrait}
              />
            </Link>
            <div className="user-position">
              <div className="text-overflow">{user.name}</div>
              <div className="text-overflow">{user.profile.position}</div>
            </div>
          </div>
          <div className="user-introduction">
            介绍：{user.profile.introduction}
          </div>
        </div>
      </div>
    )
  }
}

export default SideUser
