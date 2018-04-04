import React, { PureComponent } from 'react';
import axios from 'axios';
import Item from './Item';

class List extends PureComponent {
  constructor() {
    super();
    this.state = {
      list:[]
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
    return this.state.list.map((recruit, index) =>
      <Item key={index} recruit={recruit} />);
  };

  componentDidMount() {
    let self = this;
    axios.get('/recruit/list')
    .then(function (response) {
      if (response.data.status) {
        self.setState({
          list:response.data.list
        });
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  render() {
    return (
      <div className="List">
        { this.renderList() }
      </div>
    )
  }
}

export default List;
