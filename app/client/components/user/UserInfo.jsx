import React, { PureComponent } from 'react';
import Avatar from 'react-avatar';
import { Link } from 'react-router-dom';
import { Icon } from 'antd';

class UserInfo extends PureComponent {
  constructor() {
    super();
  }

  render() {
    let { user, isCurrentUser } = this.props
    const Github = () => {
      return (
        <a href={user.github} title="Github" target="_blank">
          <Icon type="github" />
        </a>
      );
    }
    const Website = () => {
      return (
        <a href={user.website} title="个人主页" target="_blank">
          <Icon type="aliwangwang-o" />
        </a>
      )
    }

    return (
      <div className="user-info-block">
        <Avatar
          name={user.name}
          size={90}
          round={true}
          textSizeRatio={1.5}
          src={user.portrait}
        />
        <div className="info-box">
          <h1 className="name">{user.name}</h1>
          <div className="position">
            <Icon type="laptop" />
            <span>{user.position}</span>|
            <span>{user.company}</span>
          </div>
          <div className="info">
            <Icon type="solution" />
            <span>{user.introduction}</span>
          </div>
        </div>
        <div className="action-box">
          <div className="link-box">
            {user.github ? <Github /> : null}
            {user.website ? <Website /> : null}
          </div>
          {isCurrentUser ? <Link to="/user/profile" className="button">修改个人资料</Link> : null}
        </div>
      </div>
    )
  }
}
export default UserInfo