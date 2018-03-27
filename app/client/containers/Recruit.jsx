import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Navigator from '../components/common/Navigator';
import './styles/Home.less';

class Recruit extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="home">
        <div className="main">
          <Navigator current='recruit'/>
          <div className="center">
            Recruit
          </div>
        </div>
      </div>
    )
  }
}
export default connect()(Recruit);
