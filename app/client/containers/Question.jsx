import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
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
    const adv = {
      title: 'TensorFlow 官方文档中文版 V1.7',
      url: 'https://github.com/xitu/tensorflow-docs',
      imgUrl: 'https://user-gold-cdn.xitu.io/1521811593412752566594ff74d779e3c92bd9d875e6e.jpg?imageView2/1/q/85/format/webp/interlace/1'
    }
    return (
      <div className="main">
        <Navigator current='question'/>
        <div className="center quesion-container">
          <section className="list-container">
            <List/>
            <div className="aside">
              <Advertisement Ad={adv}/>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    )
  }
}
export default connect()(Question);
