import React from 'react';
import PropTypes from 'prop-types';
import Navigator from '../components/common/Navigator';
import Footer from '../components/common/Footer';
import Advertisement from '../components/common/Advertisement';
import RecomendedBox from '../components/common/RecomendedBox';
import List from '../components/home/List'
import { BackTop, Affix, message } from 'antd'
import axios from 'axios';
import './styles/Home.less';

class Home extends React.Component {
  static contextTypes = {
    router: PropTypes.object,
  }

  constructor() {
    super();
    this.state = { search: '', list: [] };
    this.onChange = this.onChange.bind(this);
    this.onEnter = this.onEnter.bind(this);
  }

  onChange(event) {
    this.setState({
      search: event.target.value,
    });
  }

  onEnter() {
    const search = this.state.search;
    if (search) {
      this.context.router.history.push(`/repositories?q=${search}&sort=stars&order=desc`);
    } else {
      throw new Error('repository cannot be null');
    }
  }
  componentDidMount() {
    let self = this;
    let { match } = this.props
    axios.get(`/article/recommended`)
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
    const adv = [
      {
        title: '腾讯云　容器服务 CCS',
        url: 'https://cloud.tencent.com/product/ccs',
        imgUrl: '/public/img/6c80707.jpg'
      }
    ]
    return (
      <div className="main">
        <Navigator current="home" />
        <div className="center home">
          <section className="list-container">
            <List />
            <div className="aside">
              <Affix offsetTop={10}>
                <Advertisement Ad={adv[0]} />
                {this.state.list.length > 0 ? <RecomendedBox title="你可能感兴趣的文章" list={this.state.list} /> : null}
              </Affix>
            </div>
          </section>
        </div>
        <BackTop />
        <Footer />
      </div>
    );
  }
}

export default Home;
