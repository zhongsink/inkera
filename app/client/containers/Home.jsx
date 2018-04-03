import React from 'react';
import PropTypes from 'prop-types';
import Navigator from '../components/common/Navigator';
import Footer from '../components/common/Footer';
import Advertisement from '../components/common/Advertisement';
import List from '../components/home/List'
import './styles/Home.less';

class Home extends React.Component {
  static contextTypes = {
    router: PropTypes.object,
  }

  constructor() {
    super();
    this.state = { search: '' };
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

  render() {
    const adv = {
      title: 'TensorFlow 官方文档中文版 V1.7',
      url: 'https://github.com/xitu/tensorflow-docs',
      imgUrl: 'https://user-gold-cdn.xitu.io/1521811593412752566594ff74d779e3c92bd9d875e6e.jpg?imageView2/1/q/85/format/webp/interlace/1'
    }
    return (
      <div className="main">
        <Navigator current="home"/>
        <div className="center home">
          <section className="list-container">
            <List/>
            <div className="aside">
              <Advertisement Ad={adv}/>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
