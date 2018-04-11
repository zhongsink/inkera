import React from 'react';
import { connect } from 'react-redux';
import Navigator from '../components/common/Navigator';
import Footer from '../components/common/Footer';
import Advertisement from '../components/common/Advertisement';
import RecruitContent from '../components/recruit/RecruitContent';
import SideBar from '../components/recruit/SideBar';
import { Link } from 'react-router-dom';
import { Icon, BackTop, Affix } from 'antd'
import axios from 'axios';
import './styles/RecruitDetail.less';

class RecruitDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      result: {
        id: null,
        title: null,
        content: null,
        from: null,
        check: null,
        url: null,
        createdAt: null,
        updatedAt: null
      }
    }
  }
  componentDidMount() {
    let self = this;
    let { match } = this.props
    axios.get(`/recruit/get?id=${match.params.id}`)
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
        <Navigator />
        <div className="center recruit-detail">
          <section className="recruit-container">
            <RecruitContent recruit={this.state.result} />
            <div className="aside">
              <Affix offsetTop={10}>
                <Advertisement Ad={adv[0]} />
                <Advertisement Ad={adv[1]} />
                <SideBar />
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

export default connect()(RecruitDetail);
