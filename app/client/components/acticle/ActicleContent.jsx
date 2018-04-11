import React, { PureComponent } from 'react';
import Avatar from 'react-avatar';
import { Link } from 'react-router-dom';
import TimeAgo from 'timeago-react';
import { Spin } from 'antd';
import Markdown from '../common/Markdown';

class ActicleContent extends PureComponent {
  constructor() {
    super();
    this.renderMarkdown = this.renderMarkdown.bind(this);
  }

  renderMarkdown() {
    let { article } = this.props
    if (article && !article.content) {
      return (
        <div className="markdown-body">
          加载中... 
        </div>
      );
    }
    return (
      <Markdown markdownObj={article} />
    )
  };

  render() {
    let { user, article } = this.props
    let time = new String(article.createdAt).slice(0,10);
    return (
      <div className="article-detail">
        <div className="author-info-block">
          <Link to={`/user/${user.authentication_token}`}>
            <Avatar
              name={user.name}
              size={40}
              src={user.portrait}
              textSizeRatio={2}
            />
          </Link>
          <div className="author-info-box">
            <Link to={`/user/${user.authentication_token}`}>
              {user.name}
            </Link>
            <span className="time">
              创建于 {time}
            </span>
          </div>
        </div>
        <h1 className="article-title">{article.title}</h1>
        {this.renderMarkdown()}
      </div>
    )
  }
}

export default ActicleContent;
