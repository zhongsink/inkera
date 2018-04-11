import React from 'react';
import { connect } from 'react-redux';
import Navigator from '../components/common/Navigator';
import Footer from '../components/common/Footer';
import Advertisement from '../components/common/Advertisement';
import QuestionContent from '../components/question/QuestionContent';
import { Link } from 'react-router-dom';
import { Icon, BackTop } from 'antd'
import axios from 'axios';
import './styles/QuestionDetail.less';

class QuestionDetail extends React.Component {
  constructor() {
    super();
    this.state = {
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
          authentication_token: null
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
        console.log(error);
      });
  }

  render() {
    let { match } = this.props
    const adv = {
      title: 'TensorFlow 官方文档中文版 V1.7',
      url: 'https://github.com/xitu/tensorflow-docs',
      imgUrl: '/public/img/2bd9d875e6e.jpg'
    }
    return (
      <div className="main">
        <Navigator />
        <div className="center question-detail">
          <section className="question-container">
            <QuestionContent user={this.state.result.user} question={this.state.result.question}/>
            <div className="aside">
              <Advertisement Ad={adv} />
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
