import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Avatar from 'react-avatar';
import { Link } from 'react-router-dom';
import { Button, message } from 'antd';
import axios from 'axios';
import CommentItem from './CommentItem';
import './styles/CommentBox.less';

class CommentBox extends PureComponent {
  constructor() {
    super();
    this.state = {
      list: [],
    }
  }

  comment() {
    let content = document.querySelector('#comment-input').value;
    let token = document.querySelector("meta[name=csrf-token]").content;
    let { match , user, postUrl} = this.props;
    let self = this;
    if (!content) {
      message.error("输入不能为空");
      return;
    }
    axios.post(postUrl, {
      _csrf: token,
      id: match.params.id,
      content: content,
      userId: user.id
    })
      .then((Response) => {
        if (Response.data.status) {
          self.setState({
            list: Response.data.list
          });
        }
      })
      .catch((error) => {
        message.error(error);
      });
  }
  componentDidMount() {
    let { match, getUrl } = this.props;
    let self = this;
    axios.get(getUrl)
      .then(function (response) {
        if (response.data.status) {
          self.setState({
            list: response.data.list
          });
        }
      })
      .catch(function (error) {
        message.error(error);
      });
  }

  renderComments() {
    return this.state.list.map((item, index) =>
      <CommentItem key={index} item={item} />
    );
  }
  render() {
    let { title, user } = this.props

    const CommentForm = () => {
      return (
        <div className="comment-form">
          <div className="comment-user">
            <Avatar
              name={user.name}
              size={40}
              round={true}
              textSizeRatio={2}
              src={user.portrait}
            />
          </div>
          <div className="comment-send">
            <textarea
              id="comment-input"
              placeholder="说说你的看法"
              className="content-input"
              autoCapitalize="off"
            >
            </textarea>
            <div className="comment-action-box">
              <Button type="primary" onClick={this.comment.bind(this)}>{title}</Button>
            </div>
          </div>
        </div>
      )
    }
    return (
      <div className="comment-box">
        <div className="comment-title" id="comment">{title}</div>
        {user.login ? <CommentForm /> : null}
        <div className="comment-list">
          {this.state.list.length > 0 ? this.renderComments() : null}
        </div>
      </div>
    )
  }
}

export default CommentBox;
