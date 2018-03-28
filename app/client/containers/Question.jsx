import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Navigator from '../components/common/Navigator';
import Footer from '../components/common/Footer';
import './styles/Home.less';

class Question extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="main">
        <Navigator current='question'/>
        <div className="center">
          Question
        </div>
        <Footer />
      </div>
    )
  }
}
export default connect()(Question);
