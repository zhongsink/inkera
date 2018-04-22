import React, { PureComponent } from 'react';
import { Layout, Table, Icon, Divider, message } from 'antd';
import axios from 'axios';
const { Header, Content, Footer, Sider } = Layout;

class Question extends PureComponent {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    let self = this;
    axios.get(`/admin/list?obj=Question`)
      .then(function (response) {
        if (response.data.status) {
          self.setState({
            data: response.data.list
          });
        }
      })
      .catch(function (error) {
        message.error(error);
      });
  }

  render() {
    const columns = [
      {
        title: '问题 id',
        dataIndex: 'key',
        key: 'key',
        render: text => <a href="javascript:;">{text}</a>,
      },
      {
        title: '问题标题',
        dataIndex: 'title',
        key: 'title',
        render: text => <a href="javascript:;">{text}</a>,
      }
      , {
        title: '创建者id',
        dataIndex: 'userId',
        key: 'userId',
      }, {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <span>
            <a href="javascript:;">删除</a>
            <Divider type="vertical" />
            <a href="javascript:;">推荐</a>
          </span>
        )
      }];
    return (
      <Content className="jscode-list-container">
        <Table 
          columns={columns} 
          dataSource={this.state.data} />
      </Content>
    )
  }
}

export default Question;
