import React from 'react';
import { connect } from 'react-redux';
import { message } from 'antd';
import axios from 'axios';
import { currentUser } from '../models/actions/user';
import Nav from '../components/editor/Nav';
import EditorAndPreview from '../components/editor/EditorAndPreview';
import './styles/Editor.less';

class EditorQuestion extends React.Component {

  constructor() {
    super();
    this.state = {
      content: '',
      title:'',
      preview: true
    }
    this.contentChange = this.contentChange.bind(this);
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
    let { content, title } = this.state;
    if(!user.authentication_token) {
      message.error("用户不存在");
      return ;
    }
    if (!content|| !title) {
      message.error("未填写完整");
      return ;
    }
    axios.post(`/question/add`, {
      _csrf: document.querySelector("meta[name=csrf-token]").content,
      content: self.state.content,
      title: self.state.title,
      authentication_token: user.authentication_token
    })
      .then(function (response) {
        if (response.data.status) {
          message.success("数据库成功插入一个问题")
          self.props.history.push('/');
        } else {
          message.error("数据库插入一个问题失败")
        }
      })
      .catch(function (error) {
        message.error(error.message);
      });
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
        <EditorAndPreview type="question" lable='' content={this.state.content} change={{ contentChange }} />
      </div>
    );
  }
}

const mapStateToProps = state => ({ user: state.user });
export default connect(mapStateToProps)(EditorQuestion);
