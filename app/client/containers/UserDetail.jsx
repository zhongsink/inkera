import React from 'react';
import { connect } from 'react-redux';
import Navigator from '../components/common/Navigator';
import Footer from '../components/common/Footer';
import { Link } from 'react-router-dom';
import { Icon, BackTop, Spin } from 'antd'
import axios from 'axios';
import UserInfo from '../components/user/UserInfo';
import Aside from '../components/user/Aside';
import Tab from '../components/user/Tab';
import './styles/UserDetail.less';

class UserDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      userInfo: {
        asyn: false,
        id: undefined,
        name: undefined,
        usename: undefined,
        email: undefined,
        authentication_token: undefined,
        phone: undefined,
        github: undefined,
        position: undefined,
        company: undefined,
        introduction: undefined,
        website: undefined,
      },
      articles: [],
      questions: [],
      likeArticles: []
    }
    this.renderUserInfo = this.renderUserInfo.bind(this);
  }

  componentDidMount() {
    let { match } = this.props
    let self = this;
    axios.get(`/getUserInfo?hash=${match.params.hash}`)
      .then(function (response) {
        if (response.data.status) {
          self.setState({
            userInfo: Object.assign(response.data.user, { asyn: true }),
            articles: response.data.articles,
            questions: response.data.questions,
            likeArticles: response.data.likeArticles,
          });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  renderUserInfo() {
    let userInfo = this.state.userInfo;
    let { user } = this.props;

    if (!userInfo.asyn) {
      return (
        <div className="user-info-block">
          加载中...
        </div>
      )
    }
    return (
      <UserInfo user={userInfo} isCurrentUser={user.authentication_token == userInfo.authentication_token} />
    )
  }

  render() {
    let { match } = this.props
    let {likeArticles, articles, questions} = this.state
    return (
      <div className="main">
        <Navigator />
        <div className="center user">
          <section className="user-detail">
            <div className="user-detail-container">
              {this.renderUserInfo()}
              <Tab like={likeArticles} articles={articles} questions={questions} />
            </div>
            <div className="aside">
              <Aside like={likeArticles.length} article={articles.length} question={questions.length}/>
            </div>
          </section>
        </div>
        <BackTop />
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = state => ({ user: state.user });
export default connect(mapStateToProps)(UserDetail);
