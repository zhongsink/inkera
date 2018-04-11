import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { BackTop } from 'antd'
import Navigator from '../components/common/Navigator';
import Footer from '../components/common/Footer';
import Advertisement from '../components/common/Advertisement';
import List from '../components/question/List'
import './styles/Question.less';

class Question extends React.Component {
  constructor() {
    super();
  }
  render() {
    const adv = [{
      title: 'TensorFlow 官方文档中文版 V1.7',
      url: 'https://github.com/xitu/tensorflow-docs',
      imgUrl: '/public/img/2bd9d875e6e.jpg'
    },
    {
      title: '腾讯云　容器服务 CCS',
      url: 'https://cloud.tencent.com/product/ccs',
      imgUrl: '/public/img/6c80707.jpg'
    }
    ]
    return (
      <div className="main">
        <Navigator current='question' />
        <div className="center quesion-container">
          <section className="list-container">
            <List />
            <div className="aside">
              <Advertisement Ad={adv[0]} />
              <Advertisement Ad={adv[1]} />
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
