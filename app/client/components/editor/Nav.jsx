import React, { PureComponent } from 'react';
import { message, Button, Icon } from 'antd';
import { connect } from 'react-redux';
import Avatar from 'react-avatar';
import Logined from '../common/Logined'


class Nav extends PureComponent {
  constructor() {
    super();
  }

  render() {
    let { user, placeholder, title, change, save } = this.props
    return (
      <div className="editor-nav">
        <input placeholder={placeholder} maxLength="80" className="title-input" value={title} onChange={change}/>
        <div className="right-box">
          <div className="status-text">
            注意：内容不会自动保存
          </div>
          <div className="action-bar">
            <Button type="primary" onClick={save}>
              发布
            </Button>
          </div>
          {user.login ? <Logined user={user} /> : null}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({ user: state.user });
export default connect(mapStateToProps)(Nav);