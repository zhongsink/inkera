import React from 'react';
import { connect } from 'react-redux';
import Navigator from '../components/common/Navigator';
import Footer from '../components/common/Footer';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import './styles/NoMatch.less';

class NoMatch extends React.Component {
  render() {
    return (
      <div className="main no-found">
        <Navigator />
        <div className="center no-match-container">
          <div className="not-found-view">
            <img src="/public/img/404.png" alt="404"/>
            <div className="not-found-float">
              <Link to="/" className="not-found-btn">
                <Button type="primary">返回首页</Button>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default connect()(NoMatch);
