import React from 'react';
import './styles/About.less';

class About extends React.Component {

  render() {
    return (
      <div className="main about">
        <section className="hero background-cover vertical-center">
            <div className="container">
                <img src="/public/img/logo_w.png" alt="logo" className="jscode-logo"/>
                <p>一个帮助 javascript 开发者成长的社区</p>
                <p>Become a Better Javascript Developer by Sharing and Learning</p>
                <div className="hero-btn-box">
                  <a className="button hero-btn" href="/">
                    <span>访问官网</span>
                  </a>
                </div>
            </div>
        </section>
      </div>
    );
  }
}

export default About;
