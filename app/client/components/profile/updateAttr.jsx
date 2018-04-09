import React, { PureComponent } from 'react';
import { Icon, message } from 'antd'
import { connect } from 'react-redux';
import axios from 'axios';

class UpdateAttr extends PureComponent {
  constructor() {
    super();
    this.state = {
      editing: false,
      value: ''
    }
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.edit = this.edit.bind(this);
    this.save = this.save.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    let { name, user } = this.props
    this.setState({
      value: user[`${name}`] || ''
    })
  }

  edit(e) {
    if (e.target.nodeName !== 'INPUT') {
      document.querySelector(`input[name=${this.props.name}]`).focus();
    }
  }

  save() {
    let { name, user } = this.props
    let self = this;
    axios.post(`/updateProfile`, {
      _csrf: document.querySelector("meta[name=csrf-token]").content,
      field: name,
      value: this.state.value,
      authentication_token: user.authentication_token
    })
      .then(function (response) {
        if (response.data.status) {
          message.success("更新成功")
        } else {
          message.error("更新失败")
        }
        self.onBlur();
      })
      .catch(function (error) {
        message.error(error.message);
      });
  }

  onFocus(e) {
    this.setState({
      editing: true
    })
  }
  onBlur() {
    this.setState({
      editing: false
    })
  }

  onChange(e) {
    this.setState({
      value: e.target.value
    })
  }

  render() {
    let { placeholder, name, user } = this.props
    const Unedit = () => {
      return (
        <a className="edit-btn" onClick={this.edit}>
          <Icon type="edit" />
          &nbsp;&nbsp;编辑
        </a>
      )
    }
    const Editing = () => {
      return (
        <a className="edit-btn">
          <div className="save" onClick={this.save}>保存</div>
          <div className="cancel" onClick={this.onBlur}>取消</div>
        </a>
      )
    }
    return (
      <div className="input-box">
        <input type="text" placeholder={placeholder} name={name} value={this.state.value || user[`${name}`] || ''} onFocus={this.onFocus} onChange={this.onChange} />
        <div className="action-box">
          {this.state.editing ? <Editing /> : <Unedit />}
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => ({ user: state.user });
export default connect(mapStateToProps)(UpdateAttr);