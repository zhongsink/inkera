import React from 'react';
import { connect } from 'react-redux';
import Navigator from '../components/common/Navigator';
import Footer from '../components/common/Footer';
import Advertisement from '../components/common/Advertisement';
import RegisterForm  from '../components/register/RegisterForm';
import { Link } from 'react-router-dom';
import { Icon } from 'antd'
import './styles/Login.less';

class Register extends React.Component {
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
        imgUrl: 'https://user-gold-cdn.xitu.io/1521811593412752566594ff74d779e3c92bd9d875e6e.jpg?imageView2/1/q/85/format/webp/interlace/1'
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
                <RegisterForm redirectTo={this.redirectTo.bind(this)}/>
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
  
  export default connect()(Register);
  
