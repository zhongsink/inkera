import React from 'react';
import { connect } from 'react-redux';
import Navigator from '../components/common/Navigator';
import Footer from '../components/common/Footer';
import RegisterForm  from '../components/register/RegisterForm';
import { Link } from 'react-router-dom';
import { Icon } from 'antd'
import './styles/Login.less';

class Login extends React.Component {
    constructor() {
      super();
    }
    render() {
      return (
        <div className="main">
          <Navigator />
          <div className="center">
            <section className="auth-section">
              <div className="auth-form">
                <div className="form-header">
                  <Icon type="user" /> 注册
                  <div className="right">
                    已有账号? 
                    <Link className="login" to="/login">登录</Link>
                  </div>
                </div>
                <RegisterForm />
              </div>
            </section>
          </div>
          <Footer />
        </div>
      )
    }
  }
  
  export default connect()(Login);
  
