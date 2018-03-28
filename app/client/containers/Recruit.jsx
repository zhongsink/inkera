import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Navigator from '../components/common/Navigator';
import Footer from '../components/common/Footer';
import './styles/Home.less';

class Recruit extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="main">
        <Navigator current='recruit'/>
        <div className="center">
          Recruit
        </div>
        <Footer/>
      </div>
    )
  }
}
export default connect()(Recruit);
