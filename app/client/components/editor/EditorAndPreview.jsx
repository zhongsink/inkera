import React, { PureComponent } from 'react';
import Input, { Upload, message, Button, Icon } from 'antd';
import { connect } from 'react-redux';
import Avatar from 'react-avatar';
import Markdown from '../common/Markdown'

class EditorAndPreview extends PureComponent {
  constructor() {
    super();
  }

  render() {
    let { type, lable, content, change } = this.props
    const props = {
      name: 'file',
      action: '/upload.do',
      headers: {
        authorization: 'authorization-text',
      },
      onChange(info) {
        if (info.file.status !== 'uploading') {
          console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
          message.success(`${info.file.name} 上传成功。`);
        } else if (info.file.status === 'error') {
          message.error(`${info.file.name} 上传失败。`);
        }
      },
    };

    return (
      <div className="editor-container">
        <div className="editor-box">
          <textarea className="ace_text-input" autoCapitalize="off" onChange={change.contentChange}>
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