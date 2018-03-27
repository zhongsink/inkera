import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Navigator from '../components/common/Navigator';
import './styles/Home.less';

class About extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="home">
        <div className="main">
          <Navigator current='about'/>
          <div className="center">
            About
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(About);
