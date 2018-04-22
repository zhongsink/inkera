import React, { PureComponent } from 'react';
import { Layout, Table, Icon, Divider, message } from 'antd';
import { Link } from 'react-router-dom';
import axios from 'axios';
const { Header, Content, Footer, Sider } = Layout;


class User extends PureComponent {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }
  componentDidMount() {
    let self = this;
    axios.get(`/admin/list?obj=User`)
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
    const columns = [{
      title: '用户 id',
      dataIndex: 'key',
      key: 'key'
    }, {
      title: '昵称',
      dataIndex: 'name',
      key: 'name',
      render: (text, row, index) => <Link to={`/user/${row.token}`}>{text}</Link>,
    }, {
      title: '用户名',
      dataIndex: 'username',
      key: 'username',
    }, {
      title: '邮箱',
      dataIndex: 'email',
      key: 'email',
    }, {
      title: '用户 token',
      dataIndex: 'token',
      key: 'token',
    }, {
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <span>
          <a href="javascript:;">Action 一 {record.name}</a>
          <Divider type="vertical" />
          <a href="javascript:;">删除</a>
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

export default User;
