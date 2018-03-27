import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Navigator from '../components/common/Navigator';
import './styles/Home.less';

class Question extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="home">
        <div className="main">
          <Navigator current='question'/>
          <div className="center">
            Question
          </div>
        </div>
      </div>
    )
  }
}
export default connect()(Question);
