import React, { PureComponent } from 'react';
import { Layout, Table, Icon, Divider } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

const columns = [{
  title: '用户 id',
  dataIndex: 'key',
  key: 'key'
},
  {
  title: '昵称',
  dataIndex: 'name',
  key: 'name',
  render: text => <a href="javascript:;">{text}</a>,
}
, {
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
      <a href="javascript:;">Delete</a>
    </span>
  )
}];

const data = [{
  key: '1',
  name: 'John Brown',
  username: 'ssss',
  email: 32,
  token: 'New York No. 1 Lake Park',
}, {
  key: '2',
  name: 'Jim Green',
  username: 'ssss',
  email: 42,
  token: 'London No. 1 Lake Park',
}, {
  key: '3',
  name: 'Joe Black',
  username: 'ssss',
  email: 32,
  token: 'Sidney No. 1 Lake Park',
}, {
  key: '4',
  name: 'Jim Green',
  username: 'ssss',
  email: 42,
  token: 'London No. 1 Lake Park',
}, {
  key: '11',
  name: 'Jim Green',
  username: 'ssss',
  email: 42,
  token: 'London No. 1 Lake Park',
}
];

class User extends PureComponent {
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

export default User;
