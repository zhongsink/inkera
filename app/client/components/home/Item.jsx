import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import Avatar from 'react-avatar';

class Item extends PureComponent {
  constructor() {
    super();
  }
  render() {
    let user = this.props.user
    let article = this.props.article
    return (
      <div className="list-item">
        <div className="avatar">
          <Link to={`/user/${user.authentication_token}`}>
            <Avatar
              name={user.name}
              size={32}
              src={user.portrait}
              textSizeRatio={1.75}
            />
          </Link>
        </div>
        <div className="item-content">
          <div className="header">
            <span className="colorful dot">专栏</span>
            <span className="dot">{article.createdAt.slice(0, 10)}</span>
            <span>{article.lable}</span>
          </div>
          <div className="item-title">
            <Link to={`/article/${article.id}`}>
              {article.title}
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Item;
