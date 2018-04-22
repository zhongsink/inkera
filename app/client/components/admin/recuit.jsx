import React, { PureComponent } from 'react';
import { Layout, Table, Icon, Divider, message } from 'antd';
import axios from 'axios';
const { Header, Content, Footer, Sider } = Layout;


class Recuit extends PureComponent {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    let self = this;
    axios.get(`/admin/list?obj=Recruit`)
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
        title: '招聘 id',
        dataIndex: 'key',
        key: 'key',
        render: text => <a href="javascript:;">{text}</a>,
      },
      {
        title: '招聘标题',
        dataIndex: 'title',
        key: 'title',
        render: text => <a href="javascript:;">{text}</a>,
      }, {
        title: '转载何处',
        dataIndex: 'from',
        key: 'from',
      }, {
        title: '转载URL',
        dataIndex: 'url',
        key: 'url',
        render: text => <a href={text}>{text}</a>,
      }, {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <span>
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

export default Recuit;
