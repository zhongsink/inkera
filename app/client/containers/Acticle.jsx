import React from 'react';
import { connect } from 'react-redux';
import Navigator from '../components/common/Navigator';
import Footer from '../components/common/Footer';
import Advertisement from '../components/common/Advertisement';
import { Link } from 'react-router-dom';
import { Icon } from 'antd'
import './styles/Acticle.less';

class Acticle extends React.Component {
    constructor() {
      super();
    }

    render() {
      let { match } = this.props
      return (
        <div className="main">
          <Navigator />
          <div className="center">
            <section className="article-container">
              1234567
              {match.params.id}
            </section>
          </div>
          <Footer />
        </div>
      )
    }
  }
  
  export default connect()(Acticle);
  