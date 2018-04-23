import React from 'react';
import { Layout, Menu, Breadcrumb, Icon, message } from 'antd';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import User from '../components/admin/user';
import Article from '../components/admin/article';
import Question from '../components/admin/question';
import Recuit from '../components/admin/recuit';
import Ad from '../components/admin/ad';
import Setting from '../components/admin/setting';
import axios from 'axios';
import Logined from '../components/common/Logined'

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;
import './styles/Admin.less'

class Admin extends React.Component {
  state = {
    collapsed: false,
    async: false,
    user: {}
  };
  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  }
  componentDidMount() {
    let self = this;
    axios.get(`/admin/user`)
      .then(function (response) {
        if (response.data.status) {
          self.setState({
            async: true,
            user: response.data.result,
          });
        }
      })
      .catch(function (error) {
        message.error(error);
      });
  }
  render() {
    if (!this.state.async)
      return null;
    if (this.state.async && !this.state.user.role) {
      return <Redirect to='/' />
    }
    let {user} = this.state;
    return (
      <Layout
        style={{ minHeight: '100vh' }}
        className="jscode-admin"
      >
        <Header className="header">
          <div className="logo">
            <Link to="/">
              <img src="/public/img/logo_w.png" alt="logo" />
            </Link>
          </div>
          <div className="jscode-user-bar">
            <span>欢迎 {user.name}</span>
            <Logined user={user}/>
          </div>
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
                <Link to="/jscode/admin">
                  <Icon type="user" />
                  <span>用户管理</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/jscode/admin/article">
                  <Icon type="file-word" />
                  <span>文章管理</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/jscode/admin/question">
                  <Icon type="exception" />
                  <span>问答管理</span>
                </Link>
              </Menu.Item>
              <SubMenu
                key="sub3"
                title={<span><Icon type="usergroup-add" /><span>招聘管理</span></span>}
              >
                <Menu.Item key="7"><Link to="/jscode/admin/recuit">最新列表</Link></Menu.Item>
                <Menu.Item key="10">录入信息</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub2"
                title={<span><Icon type="notification" /><span>广告管理</span></span>}
              >
                <Menu.Item key="6"><Link to="/jscode/admin/ad">投放广告</Link></Menu.Item>
                <Menu.Item key="8"><Link to="/jscode/admin/ad">更新广告</Link></Menu.Item>
              </SubMenu>
              {/* <Menu.Item key="9">
                <Link to="/jscode/admin/setting">
                  <Icon type="setting" />
                  <span>设置</span>
                </Link>
              </Menu.Item> */}
            </Menu>
          </Sider>
          <Layout className="admin-container">
            <Switch>
              <Route exact path='/jscode/admin' component={User} />
              <Route path='/jscode/admin/article' component={Article} />
              <Route path='/jscode/admin/question' component={Question} />
              <Route path='/jscode/admin/recuit' component={Recuit} />
              <Route path='/jscode/admin/ad' component={Ad} />
              <Route path='/jscode/admin/setting' component={Setting} />
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
