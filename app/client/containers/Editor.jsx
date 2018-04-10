import React from 'react';
import { connect } from 'react-redux';
import { message } from 'antd';
import axios from 'axios';
import { currentUser } from '../models/actions/user';
import Nav from '../components/editor/Nav';
import EditorAndPreview from '../components/editor/EditorAndPreview';
import './styles/Editor.less';

class Editor extends React.Component {

  constructor() {
    super();
    this.state = {
      content: '',
      label: '',
      title:'',
      preview: true
    }
    this.contentChange = this.contentChange.bind(this);
    this.labelChange = this.labelChange.bind(this);
    this.titleChange = this.titleChange.bind(this);
    this.save = this.save.bind(this);
  }
  titleChange(e) {
    this.setState({
      title: e.target.value
    })
  }
  contentChange(e) {
    this.setState({
      content: e.target.value
    })
  }
  save() {
    let { name, user } = this.props
    let self = this;
    let { content, label, title } = this.state;
    if(!user.authentication_token) {
      message.error("用户不存在");
      return ;
    }
    if (!content|| !label|| !title) {
      message.error("未填写完整");
      return ;
    }
    axios.post(`/article/add`, {
      _csrf: document.querySelector("meta[name=csrf-token]").content,
      content: self.state.content,
      label: self.state.label,
      title: self.state.title,
      authentication_token: user.authentication_token
    })
      .then(function (response) {
        if (response.data.status) {
          message.success("数据库成功插入一篇文章")
          self.props.history.push('/');
        } else {
          message.error("数据库插入一篇文章失败")
        }
      })
      .catch(function (error) {
        message.error(error.message);
      });
  }
  labelChange(e) {
    this.setState({
      label: e.target.value
    })
  }
  componentDidMount() {
    const { dispatch, user } = this.props;
    if (!user.login)
      dispatch(currentUser());
  }

  render() {
    const { user } = this.props;
    let contentChange = this.contentChange, labelChange = this.labelChange;
    return (
      <div className="main editor">
        <Nav user={user} placeholder={'输入文章标题...'} title={this.state.title} change={this.titleChange} save={this.save}/>
        <EditorAndPreview type="article" lable={this.state.label} content={this.state.content} change={{ contentChange, labelChange }} />
      </div>
    );
  }
}

const mapStateToProps = state => ({ user: state.user });
export default connect(mapStateToProps)(Editor);
