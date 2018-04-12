import React from 'react';
import { connect } from 'react-redux';
import Navigator from '../components/common/Navigator';
import Footer from '../components/common/Footer';
import Advertisement from '../components/common/Advertisement';
import QuestionContent from '../components/question/QuestionContent';
import RecomendedBox from '../components/common/RecomendedBox';
import SideUser from '../components/common/SideUser';
import { Link } from 'react-router-dom';
import { Icon, BackTop, message, Affix } from 'antd'
import axios from 'axios';
import './styles/QuestionDetail.less';

class QuestionDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [],
      result: {
        question: {
          id: null,
          title: null,
          content: null,
          check: null,
          heats: null,
          UserId: null,
          createdAt: null,
          updatedAt: null
        },
        user: {
          id: null,
          name: null,
          username: null,
          portrait: null,
          email: null,
          authentication_token: null,
          profile: {}
        }
      }
    }
  }
  componentDidMount() {
    let self = this;
    let { match } = this.props
    axios.get(`/question/get?id=${match.params.id}`)
      .then(function (response) {
        if (response.data.status) {
          self.setState({
            result: response.data.result
          });
        }
      })
      .catch(function (error) {
        message.error(error.message);
      });
    axios.get(`/question/recommended`)
      .then(function (response) {
        if (response.data.status) {
          self.setState({
            list: response.data.result
          });
        }
      })
      .catch(function (error) {
        message.error(error);
      });
  }

  render() {
    let { match } = this.props
    let { user, question } = this.state.result
    return (
      <div className="main">
        <Navigator />
        <div className="center question-detail">
          <section className="question-container">
            <QuestionContent user={user} question={question} match={match}/>
            <div className="aside">
              <Affix offsetTop={10}>
                <SideUser user={user} />
                {this.state.list.length > 0 ? <RecomendedBox title="你可能还感兴趣的问答" type="question" list={this.state.list} /> : null}
              </Affix>
            </div>
          </section>
        </div>
        <BackTop />
        <Footer />
      </div>
    )
  }
}

export default connect()(QuestionDetail);
