import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Navigator from '../components/common/Navigator';
import Footer from '../components/common/Footer';
import Advertisement from '../components/common/Advertisement';
import List from '../components/question/List'
import RecomendedBox from '../components/common/RecomendedBox';
import { BackTop, Affix, message } from 'antd'
import axios from 'axios';
import './styles/Question.less';

class Question extends React.Component {
  constructor() {
    super();
    this.state = {
      list: []
    }
  }
  componentDidMount() {
    let self = this;
    let { match } = this.props
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
    const adv = [{
      title: 'TensorFlow 官方文档中文版 V1.7',
      url: 'https://github.com/xitu/tensorflow-docs',
      imgUrl: '/public/img/2bd9d875e6e.jpg'
    }
    ]
    return (
      <div className="main">
        <Navigator current='question' />
        <div className="center quesion-container">
          <section className="list-container">
            <List />
            <div className="aside">
              <Affix offsetTop={10}>
                <Advertisement Ad={adv[0]} />
                {this.state.list.length > 0 ? <RecomendedBox title="你可能感兴趣的问答" type="question" list={this.state.list} /> : null}
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
export default connect()(Question);
