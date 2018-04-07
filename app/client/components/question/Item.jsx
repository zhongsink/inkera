import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import Avatar from 'react-avatar';
import TimeAgo from 'timeago-react';

class Item extends PureComponent {
  constructor() {
    super();
  }
  render() {
    let user = this.props.user
    let question = this.props.question
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
            <span className="colorful dot">问答</span>
            <span>
              <TimeAgo
                datetime={question.createdAt}
                locale='zh_CN' />
            </span>
          </div>
          <div className="item-title">
            <Link to={`/question/${question.id}`}>
              {question.title}
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Item;
