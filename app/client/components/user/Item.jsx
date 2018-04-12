import React, { PureComponent } from 'react';
import TimeAgo from 'timeago-react';
import { Link } from 'react-router-dom';

class Item extends PureComponent {

  render() {
    let { title, object, type } = this.props;
    return (
      <div className="item">
        <div className="meta-box">
          <div className="action">{title}</div>
          <div className="date">
            <TimeAgo
              datetime={object.createdAt}
              locale='zh_CN' />
          </div>
        </div>
        <div className="content-entry">
          <Link to={`/${type}/${object.id}`}>
            <div className="object-title">
              {object.title}
            </div>
          </Link>
        </div>
      </div>
    )
  }
}

export default Item;