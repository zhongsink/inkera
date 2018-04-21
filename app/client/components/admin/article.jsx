import React, { PureComponent } from 'react';
import { Layout, Table, Icon, Divider } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

const columns = [
  {
    title: '文章 id',
    dataIndex: 'key',
    key: 'key',
    render: text => <a href="javascript:;">{text}</a>,
  },
  {
    title: '文章标题',
    dataIndex: 'title',
    key: 'title',
    render: text => <a href="javascript:;">{text}</a>,
  }
  , {
    title: '文章标签',
    dataIndex: 'label',
    key: 'label',
  }, {
    title: '创建者id',
    dataIndex: 'userId',
    key: 'userId',
  }, {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <span>
        <a href="javascript:;">删除</a>
      </span>
    )
  }];

const data = [{
  key: '1',
  title: 'John Brown',
  label: 'ssss',
  userId: '5'
}, {
  key: '2',
  title: 'John Brown',
  label: 'ssss',
  userId: '5'
}, {
  key: '3',
  title: 'John Brown',
  label: 'ssss',
  userId: '5'
}, {
  key: '4',
  title: 'John Brown',
  label: 'ssss',
  userId: '5'
}, {
  key: '11',
  title: 'John Brown',
  label: 'ssss',
  userId: '5'
}
];
class Article extends PureComponent {
  render() {
    return (
      <Content className="jscode-list-container">
         <Table 
          columns={columns} 
          dataSource={data} />
      </Content>
    )
  }
}

export default Article;
