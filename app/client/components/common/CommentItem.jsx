import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Avatar from 'react-avatar';
import { Link } from 'react-router-dom';
import TimeAgo from 'timeago-react';

class CommentItem extends PureComponent {

  render() {
    let { item } = this.props;
    let obj = item.comment || item.answer || {}
    return (
      <div className="comment-item">
        <div className="user-popover-box">
          <Link to={`/user/${item.user.authentication_token}`}>
            <Avatar
              name={item.user.name}
              size={32}
              round={true}
              textSizeRatio={1.75}
              src={item.user.portrait}
            />
          </Link>
        </div>
        <div className="content-box">
          <div className="user-info">
            <Link to={`/user/${item.user.authentication_token}`}>{item.user.name}</Link>
            <span>
              <TimeAgo
                datetime={obj.createdAt}
                locale='zh_CN' />
            </span>
          </div>
          <div className="comment-info">
            {obj.content}
          </div>
        </div>
      </div>
    )
  }
}

export default CommentItem