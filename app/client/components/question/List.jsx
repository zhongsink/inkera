import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import UserNav from '../common/UserNav'
import Item from './Item';

class List extends PureComponent {
  constructor() {
    super();
    this.state = {
      list: []
    }
  }
  renderList() {
    if (!this.state.list) {
      return (
        <div>
          无数据
        </div>
      );
    }
    return this.state.list.map((Question, index) =>
      <Item key={index} user={Question.user} question={Question.question} />);
  };

  componentDidMount() {
    let self = this;
    axios.get('/question/list')
      .then(function (response) {
        if (response.data.status) {
          self.setState({
            list: response.data.list
          });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  render() {
    let { user } = this.props;
    return (
      <div className="question-list-container">
        {user.login ? <UserNav user={user} url="/editor/question" text="提问" /> : null}
        <div className="List">
          {this.renderList()}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({ user: state.user });
export default connect(mapStateToProps)(List);
