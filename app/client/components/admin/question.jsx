import React, { PureComponent } from 'react';
import { Layout, Table, Icon, Divider, message } from 'antd';
import axios from 'axios';
import { Link } from 'react-router-dom';
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
        render: (text, row, index) => <Link to={`/question/${text}`}>{text}</Link>,
      },
      {
        title: '问题标题',
        dataIndex: 'title',
        key: 'title',
        render: (text, row, index) => <Link to={`/question/${row.key}`}>{text}</Link>,
      }
      , {
        title: '创建者id',
        dataIndex: 'userId',
        key: 'userId',
        render: (text, row, index) => <Link to={`/jscode/admin`}>{text}</Link>,
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
