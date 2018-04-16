import React from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { Switch, Route, Link } from 'react-router-dom';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;
import './styles/Admin.less'

const Home = () => {
  return (
    <Content style={{ margin: '0 16px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item><Link to='/jscode/admin/roster'>Roster</Link></Breadcrumb.Item>
        <Breadcrumb.Item><Link to='/jscode/admin/schedule'>Schedule</Link></Breadcrumb.Item>
      </Breadcrumb>
      <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
        Bill is a Home.
      </div>
    </Content>
  )
}
const Roster = () => {
  return (
    <Content style={{ margin: '0 16px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item><Link to='/jscode/admin/roster'>Roster</Link></Breadcrumb.Item>
        <Breadcrumb.Item><Link to='/jscode/admin/schedule'>Schedule</Link></Breadcrumb.Item>
      </Breadcrumb>
      <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
        Roster
      </div>
    </Content>
  )
}

const Schedule = () => {
  return (
    <Content style={{ margin: '0 16px' }}>
      <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
        Schedule
      </div>
    </Content>
  )
}

class Admin extends React.Component {
  state = {
    collapsed: false,
  };
  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }
  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Header className="header">
          <div className="logo">
            <img src="/public/img/logo_w.png" alt="logo" style={{width: 'auto', height: '50px'}}/>
          </div>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
          </Menu>
        </Header>
        <Layout>
          <Sider
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
          >
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
              <Menu.Item key="1">
                <Icon type="pie-chart" />
                <span>用户管理</span>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="desktop" />
                <span>文章管理</span>
              </Menu.Item>
              <SubMenu
                key="sub1"
                title={<span><Icon type="user" /><span>问答管理</span></span>}
              >
                <Menu.Item key="3">Tom</Menu.Item>
                <Menu.Item key="4">Bill</Menu.Item>
                <Menu.Item key="5">Alex</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub2"
                title={<span><Icon type="team" /><span>广告管理</span></span>}
              >
                <Menu.Item key="6">Team 1</Menu.Item>
                <Menu.Item key="8">Team 2</Menu.Item>
              </SubMenu>
              <Menu.Item key="9">
                <Icon type="file" />
                <span>设置</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Switch>
              <Route exact path='/jscode/admin' component={Home} />
              <Route path='/jscode/admin/roster' component={Roster} />
              <Route path='/jscode/admin/schedule' component={Schedule} />
            </Switch>
            <Footer style={{ textAlign: 'center' }}>
              jscode ©2018 Created by inkera UED
          </Footer>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default Admin;
