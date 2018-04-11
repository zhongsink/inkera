import React, { PureComponent } from 'react';
import Avatar from 'react-avatar';
import { Link } from 'react-router-dom';
import TimeAgo from 'timeago-react';
import { Spin } from 'antd';
import Markdown from '../common/Markdown';

class QuestionContent extends PureComponent {
  constructor() {
    super();
    this.renderMarkdown = this.renderMarkdown.bind(this);
  }

  renderMarkdown() {
    let { question } = this.props
    if (question && !question.content) {
      return (
        <div className="markdown-body">
          加载中... &nbsp;&nbsp;&nbsp;
        </div>
      );
    }
    return (
      <Markdown markdownObj={question} />
    )
  };

  render() {
    let { user, question } = this.props
    let time = new String(question.createdAt).slice(0,10);
    return (
      <div className="question-detail">
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
        <h1 className="article-title">{question.title}</h1>
        {this.renderMarkdown()}
      </div>
    )
  }
}

export default QuestionContent;
