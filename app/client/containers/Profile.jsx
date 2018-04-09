import React from 'react';
import Navigator from '../components/common/Navigator';
import Footer from '../components/common/Footer';
import { BackTop } from 'antd'
import './styles/Profile.less';

class Profile extends React.Component {
  render() {
    return (
      <div className="main">
        <Navigator />
        <div className="center profile">
        </div>
        <BackTop />
        <Footer />
      </div>
    );
  }
}

export default Profile;
