import React, { PureComponent } from 'react';
import Avatar from 'react-avatar';
import { Link } from 'react-router-dom';
import TimeAgo from 'timeago-react';
import Markdown from '../common/Markdown';

class RecruitContent extends PureComponent {
  constructor() {
    super();
    this.renderMarkdown = this.renderMarkdown.bind(this);
  }

  renderMarkdown() {
    let { recruit } = this.props
    if (recruit && !recruit.content) {
      return (
        <div className="markdown-body">
          加载中...
        </div>
      );
    }
    return (
      <Markdown markdownObj={recruit} />
    )
  };

  render() {
    let { recruit } = this.props
    let time = new String(recruit.createdAt).slice(0,10);
    return (
      <div className="recruit-detail">
        <div className="author-info-block">
            <Avatar
              name={"官方"}
              size={40}
              src={''}
              textSizeRatio={2}
              round={true}
            />
          <div className="author-info-box">
            <a>jscode 社区</a>
            <span className="time">
              {time}
            </span>
          </div>
        </div>
        <h1 className="article-title">{recruit.title}</h1>
        {this.renderMarkdown()}
      </div>
    )
  }
}

export default RecruitContent;
