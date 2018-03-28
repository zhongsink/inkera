import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextInput from './TextInput';
import Nav from './Nav';
import UserBar from './UserBar';
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
        <div className="countainer">
          <Link className="icon" to="/">
            <img src="/public/img/logo.png" alt="jscode logo"/>
          </Link>
          <Nav current={this.props.current}></Nav>
          <div className="user-bar">
            <TextInput
              value={this.state.value}
              onChange={this.onChange}
              onEnter={this.onEnter}
              placeholder="搜索一下..."
            />
            <UserBar user={{name:"inkera", login: false}}/>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(Navigator);
