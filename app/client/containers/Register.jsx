import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Navigator from '../components/common/Navigator';
import Footer from '../components/common/Footer';
import Advertisement from '../components/common/Advertisement';
import RegisterForm from '../components/register/RegisterForm';
import { Link, Redirect } from 'react-router-dom';
import { Icon, message } from 'antd'
import './styles/Login.less';

class Register extends PureComponent {
  constructor() {
    super();
  }
  render() {
    const adv = {
      title: 'TensorFlow 官方文档中文版 V1.7',
      url: 'https://github.com/xitu/tensorflow-docs',
      imgUrl: '/public/img/2bd9d875e6e.jpg'
    }
    let { user } = this.props;
    if (user.login) {
      message.success('用户已登录，自动跳转至首页');
      return location.href="/"
    }
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
            <div className="aside">
              <Advertisement Ad={adv} />
            </div>
          </section>
        </div>
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = state => ({ user: state.user });
export default connect(mapStateToProps)(Register);

