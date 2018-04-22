import React, { PureComponent } from 'react';
import { Layout, Table, Icon, Divider, message } from 'antd';
import { Link } from 'react-router-dom';
import axios from 'axios';

const { Header, Content, Footer, Sider } = Layout;

class Article extends PureComponent {
  constructor() {
    super();
    this.state = {
      data: []
     }
  }
  componentDidMount() {
    let self = this;
    axios.get(`/admin/list?obj=Article`)
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
        title: '文章 id',
        dataIndex: 'key',
        key: 'key',
        render: (text, row, index) => <Link to={`/article/${text}`}>{text}</Link>,
      },
      {
        title: '文章标题',
        dataIndex: 'title',
        key: 'title',
        render: (text, row, index) => <Link to={`/article/${row.key}`}>{text}</Link>,
      }
      , {
        title: '文章标签',
        dataIndex: 'lable',
        key: 'lable',
      }, {
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

export default Article;
