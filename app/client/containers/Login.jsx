import React from 'react';
import { connect } from 'react-redux';
import Navigator from '../components/common/Navigator';
import Footer from '../components/common/Footer';
import Advertisement from '../components/common/Advertisement';
import LoginForm  from '../components/login/LoginForm';
import { Link } from 'react-router-dom';
import { Icon } from 'antd'
import './styles/Login.less';

class Login extends React.Component {
    constructor() {
      super();
    }
    redirectTo(str) {
      this.props.history.push(str);
    }
    render() {
      const adv = {
        title: 'TensorFlow 官方文档中文版 V1.7',
        url: 'https://github.com/xitu/tensorflow-docs',
        imgUrl: '/public/img/2bd9d875e6e.jpg'
      }
      return (
        <div className="main">
          <Navigator />
          <div className="center">
            <section className="auth-section login-section">
              <div className="auth-form">
                <div className="form-header">
                  <Icon type="user" /> 登录
                  <div className="right">
                    没有账号? 
                    <Link className="login" to="/register">注册</Link>
                  </div>
                </div>
                <LoginForm redirectTo={this.redirectTo.bind(this)}/>
                <div className="more-login-action">
                  <div className="jscode-other-login-method">
                    <div className="line"></div>
                    <span>其他方式登录</span>
                    <div className="line"></div>
                  </div>
                  <div className="jscode-third-login">
                    <a title="敬请期待">
                      <Icon type="github" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="aside">
                <Advertisement Ad={adv}/>
              </div>
            </section>
          </div>
          <Footer />
        </div>
      )
    }
  }
  
  export default connect()(Login);
  
