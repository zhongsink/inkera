import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { Icon, message } from 'antd'
import axios from 'axios';
import { connect } from 'react-redux';

class SuspendedPanel extends PureComponent {
  constructor() {
    super();
    this.state = {
      wacth: false,
      number: 0
    }
  }

  componentDidMount() {
    let { match, user } = this.props;
    let self = this;
    axios.get(`/watchs?article=${match.params.id}&user=${user.id}`)
      .then((response) => {
        if (response.data.status) {
          self.setState({
            wacth: response.data.wacth,
            number: response.data.number
          });
        } else {
          message.error('数据查询异常')
        }
      }).catch((error) => {
        message.error(error.message)
      })
  }
  wacthThis() {
    let { match, user } = this.props;
    let self = this;
    if (!user.login) {
      message.error('请先登录！');
      return;
    }
    axios.post('/watch/toggle', {
      _csrf: document.querySelector("meta[name=csrf-token]").content,
      articleId: match.params.id,
      userId: user.id
    }).then((response) => {
      if (response.data.status) {
        self.setState({
          wacth: response.data.wacth,
          number: response.data.number
        });
      } else {
        message.error('数据查询异常')
      }
    }).catch((error) => {
      message.error(error.message)
    })
  }

  render() {
    let { wacth, number } = this.state;
    return (
      <div className="article-suspended-panel">
        <div
          className={`like-btn panel-btn ${wacth ? 'active' : null}`}
          title="点赞此篇文章"
          data-number={number}
          onClick={this.wacthThis.bind(this)}
        >
          <Icon type="heart" />
        </div>
        <div
          className="panel-btn"
          title="评论此篇文章"
        >
          <a href="#comment">
            <Icon type="message" />
          </a>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({ user: state.user });
export default connect(mapStateToProps)(SuspendedPanel);
