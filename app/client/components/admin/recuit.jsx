import React, { PureComponent } from 'react';
import { Layout, Table, Icon, Divider } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

const columns = [
  {
    title: '招聘信息 id',
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
    title: '招聘信息转载于',
    dataIndex: 'from',
    key: 'from',
  }, {
    title: '招聘信息转载URL',
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

const data = [{
  key: '1',
  title: 'John Brown',
  from: 'cnode',
  url:'https://www.baidu.com'
}, {
  key: '2',
  title: 'John Brown',
  from: 'cnode',
  url:'https://www.baidu.com'
}, {
  key: '3',
  title: 'John Brown',
  from: 'cnode',
  url:'https://www.baidu.com'
}, {
  key: '4',
  title: 'John Brown',
  from: 'cnode',
  url:'https://www.baidu.com'
}, {
  key: '11',
  title: 'John Brown',
  from: 'cnode',
  url:'https://www.baidu.com'
}
];
class Recuit extends PureComponent {
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

export default Recuit;
