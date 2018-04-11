import React from 'react';
import { connect } from 'react-redux';
import Navigator from '../components/common/Navigator';
import Footer from '../components/common/Footer';
import Advertisement from '../components/common/Advertisement';
import ActicleContent from '../components/acticle/ActicleContent';
import { Link } from 'react-router-dom';
import { Icon, BackTop } from 'antd'
import axios from 'axios';
import './styles/Acticle.less';

class Acticle extends React.Component {
  constructor() {
    super();
    this.state = {
      result: {
        article: {
          id: null,
          title: null,
          content: null,
          lable: null,
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
    axios.get(`/article/get?id=${match.params.id}`)
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
        <div className="center article">
          <section className="article-container">
            <ActicleContent user={this.state.result.user} article={this.state.result.article}/>
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

export default connect()(Acticle);
