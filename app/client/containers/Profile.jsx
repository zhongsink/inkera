import React from 'react';
import Navigator from '../components/common/Navigator';
import Footer from '../components/common/Footer';
import UpdateAttr from '../components/profile/updateAttr';
import UpdateAvatar from '../components/profile/updateAvatar';
import { BackTop, Button, Icon } from 'antd'
import { connect } from 'react-redux';
import './styles/Profile.less';

class Profile extends React.Component {
  constructor() {
    super();
  }

  render() {
    let { user } = this.props;
    return (
      <div className="main">
        <Navigator />
        <div className="center profile">
          <section className="update-profile">
            <div className="setting-profile-view">
              <h1>个人资料</h1>
              <ul className="setting-list">
                <li className="item">
                  <span>头像</span>
                  <UpdateAvatar user={user}/>
                </li>
                <li className="item">
                  <span>昵称</span>
                  <UpdateAttr placeholder="填写你的昵称" name="name" value={user.name} />
                </li>
                <li className="item">
                  <span>职位</span>
                  <UpdateAttr placeholder="填写你的职位" name="position" value={user.position}/>
                </li>
                <li className="item">
                  <span>公司</span>
                  <UpdateAttr placeholder="填写你的公司" name="company" value={user.company}/>
                </li>
                <li className="item">
                  <span>个人介绍</span>
                  <UpdateAttr placeholder="填写职业技能、擅长的事情、喜欢的事情等" name="introduction" value={user.introduction}/>
                </li>
                <li className="item">
                  <span>Github</span>
                  <UpdateAttr placeholder="填写你的 Github" name="github" value={user.github}/>
                </li>
                <li className="item">
                  <span>个人主页</span>
                  <UpdateAttr placeholder="填写你的个人主页" name="website" value={user.website} />
                </li>
              </ul>
            </div>
          </section>
        </div>
        <BackTop />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({ user: state.user });
export default connect(mapStateToProps)(Profile);
