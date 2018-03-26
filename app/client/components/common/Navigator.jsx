import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextInput from './TextInput';
import { listRepositories } from '../../models/actions/repository';
import { objectToQueryString } from '../../../shared/utils/url';
import './styles/Navigator.less';

class Navigator extends React.Component {
  static contextTypes = {
    router: PropTypes.object,
  }

  constructor() {
    super();
    this.state = { value: '' };
    this.onChange = this.onChange.bind(this);
    this.onEnter = this.onEnter.bind(this);
  }

  onChange(event) {
    this.setState({
      value: event.target.value,
    });
  }

  onEnter() {
    const { dispatch } = this.props;
    const query = {
      q: this.state.value,
      sort: 'stars',
      order: 'desc',
    };
    dispatch(listRepositories({ query }));
    this.context.router.history.push(`/repositories${objectToQueryString(query)}`);
  }

  render() {
    return (
      <div className="navigator">
        <div className="content">
          <Link className="icon" to="/">
            <img src="/public/img/logo.png" alt="jscode logo"/>
          </Link>
          <div className="navigation-items">
            <a>首页</a>
            <a>问答</a>
            <a>招聘</a>
            <a>关于</a>
          </div>
          <div className="search">
            <TextInput
              value={this.state.value}
              onChange={this.onChange}
              onEnter={this.onEnter}
              size="sm"
              theme="white"
              placeholder="Search Github"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(Navigator);
