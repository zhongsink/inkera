import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Navigator from '../components/common/Navigator';
import Footer from '../components/common/Footer';
import Advertisement from '../components/common/Advertisement';
import List from '../components/question/List'
import RecomendedBox from '../components/common/RecomendedBox';
import { adList } from '../models/actions/ad';
import { BackTop, Affix, message } from 'antd'
import axios from 'axios';
import './styles/Question.less';

class Question extends React.Component {
  constructor() {
    super();
    this.state = {
      list: []
    }
  }
  componentDidMount() {
    let self = this;
    let { match, dispatch, ad } = this.props
    if (!ad.data.length)
      dispatch(adList());
    axios.get(`/question/recommended`)
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
    let data = this.props.ad.data;
    let ad = data.length >= 1? data[1] : { title: '', url: '', imgUrl: ''}
    return (
      <div className="main">
        <Navigator current='question' />
        <div className="center quesion-container">
          <section className="list-container">
            <List />
            <div className="aside">
              <Affix offsetTop={10}>
                <Advertisement Ad={ad} />
                {this.state.list.length > 0 ? <RecomendedBox title="你可能感兴趣的问答" type="question" list={this.state.list} /> : null}
              </Affix>
            </div>
          </section>
        </div>
        <BackTop />
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = state => ({ ad: state.ad });
export default connect(mapStateToProps)(Question);
