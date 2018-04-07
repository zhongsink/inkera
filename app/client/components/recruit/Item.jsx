import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import Avatar from 'react-avatar';
import TimeAgo from 'timeago-react';

class Item extends PureComponent {
  constructor() {
    super();
  }
  render() {
    let recruit = this.props.recruit
    return (
      <div className="list-item">
        <div className="avatar">
          <Avatar
            name={"官方"}
            size={32}
            src={""}
            textSizeRatio={1.75}
          />
        </div>
        <div className="item-content">
          <div className="header">
            <span className="colorful dot">招聘</span>
            <a href={recruit.url}>
              <span className="dot">{recruit.from}</span>
            </a>
            <span>
              <TimeAgo
                datetime={recruit.createdAt}
                locale='zh_CN' />
            </span>
          </div>
          <div className="item-title">
            <Link to={`/recruit/${recruit.id}`}>
              {recruit.title}
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Item;
