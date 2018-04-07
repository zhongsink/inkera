import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { BackTop } from 'antd'
import Navigator from '../components/common/Navigator';
import Footer from '../components/common/Footer';
import Advertisement from '../components/common/Advertisement';
import List from '../components/recruit/List'
import './styles/Recruit.less';

class Recruit extends React.Component {
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
        <Navigator current='recruit'/>
        <div className="center recruit">
          <section className="list-container">
            <List/>
            <div className="aside">
              <Advertisement Ad={adv}/>
            </div>
          </section>
        </div>
        <BackTop />
        <Footer/>
      </div>
    )
  }
}
export default connect()(Recruit);
