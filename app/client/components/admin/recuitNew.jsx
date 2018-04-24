import React, { PureComponent } from 'react';
import { Layout, Icon, Button, message } from 'antd';
import EditorAndPreview from '../editor/EditorAndPreview';
import axios from 'axios';
const { Header, Content, Footer, Sider } = Layout;

class RecuitNew extends PureComponent {
  constructor() {
    super();
    this.state = {
      content: '',
      label: '',
      title: '',
      from: '',
      url: '',
    }
    this.contentChange = this.contentChange.bind(this);
    this.titleChange = this.titleChange.bind(this);
    this.fromChange = this.fromChange.bind(this);
    this.urlChange = this.urlChange.bind(this);
    this.save = this.save.bind(this);
  }
  titleChange(e) {
    this.setState({
      title: e.target.value
    })
  }
  fromChange(e) {
    this.setState({
      from: e.target.value
    })
  }
  urlChange(e) {
    this.setState({
      url: e.target.value
    })
  }
  contentChange(e) {
    this.setState({
      content: e.target.value
    })
  }
  save() {
    let self = this;
    axios.post(`/recruit/add`,{
      _csrf: document.querySelector("meta[name=csrf-token]").content,
      ...self.state
    })
      .then(function (response) {
        if (response.data.status) {
          message.success('招聘信息转载成功');
          location.href = '/jscode/admin/recuit';
        }else {
          message.success('招聘信息转载失败');
        }
      })
      .catch(function (error) {
        message.error(error);
      });
  }
  render() {
    let contentChange = this.contentChange, labelChange = function(){};
    return (
      <Content className="recuit-new">
        <div className="editor-nav">
          <input placeholder="输入标题" maxLength="80" className="title-input" value={this.state.title} onChange={this.titleChange}/>
          <input placeholder="转载:" maxLength="10"  value={this.state.from} onChange={this.fromChange}/>
          <input placeholder="url:" maxLength="80"  value={this.state.url} onChange={this.urlChange}/>
          <div className="right-box">
            <div className="action-bar">
              <Button type="primary" onClick={this.save}>
                发布
              </Button>
            </div>
          </div>
        </div>
        <EditorAndPreview type="recuilt" lable='' content={this.state.content} change={{ contentChange, labelChange }} />
      </Content>
    )
  }
}

export default RecuitNew;
