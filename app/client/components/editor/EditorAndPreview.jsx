import React, { PureComponent } from 'react';
import Input, { Upload, message, Button, Icon } from 'antd';
import { connect } from 'react-redux';
import Avatar from 'react-avatar';
import Markdown from '../common/Markdown'

const props = {
  name: 'file',
  action: '/upload',
  headers: {
    'csrf-token': document.querySelector("meta[name=csrf-token]").content,
  },
  showUploadList: false,
  supportServerRender: true,
  onChange(info) {
    if (info.file.status !== 'uploading') {
      message.success(`${info.file.name} 上传中`);
    }
    if (info.file.status === 'done') {
      if(info.file.response.status) {
        message.success('上传成功');
        let texaArea = document.querySelector('#my-input');
        texaArea.value = texaArea.value + `\n![${info.file.name}](${info.file.response.url})`;
      }else {
        message.error('上传失败');
      }
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} 上传失败。`);
    }
  },
};

class EditorAndPreview extends PureComponent {
  constructor() {
    super();
  }

  render() {
    let { type, lable, content, change } = this.props

    return (
      <div className="editor-container">
        <div className="editor-box">
          <textarea className="ace_text-input" id="my-input" autoCapitalize="off" onChange={change.contentChange}>
          </textarea>
          <div className="editor-action">
            <Upload {...props}>
              <Icon type="picture" />
            </Upload>
            {type === "article" ? <input className="article-lable" placeholder="输入文章标签..." 　value={lable} onChange={change.labelChange} /> : null}
          </div>
        </div>
        <div className="editor-preview">
          <Markdown markdownObj={{ content }} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({ user: state.user });
export default connect(mapStateToProps)(EditorAndPreview);