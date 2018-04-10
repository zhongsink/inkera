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
    return this.state.list.map((Article, index) =>
      <Item key={index} user={Article.user} article={Article.article} />);
  };

  componentDidMount() {
    let self = this;
    axios.get('/article/list')
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
      <div className="article-list-container">
        { user.login ? <UserNav user={user} url="/editor/new" text="写文章" />: null}
        <div className="List">
          {this.renderList()}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({ user: state.user });
export default connect(mapStateToProps)(List);
