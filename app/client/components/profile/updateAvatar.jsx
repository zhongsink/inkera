import React, { PureComponent } from 'react';
import { Upload, message, Button, Icon } from 'antd';
import Avatar from 'react-avatar';

class UpdateAvatar extends PureComponent {
  constructor() {
    super();
  }

  render() {
    let { user } = this.props
    const props = {
      name: 'file',
      action: '/upload.do',
      headers: {
        authorization: 'authorization-text',
      },
      data(file) {
        return {
          _csrf: document.querySelector("meta[name=csrf-token]").content,
          file
        }
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
      <div className="avatar-uploader">
        <Avatar
          name={user.name}
          size={72}
          textSizeRatio={1.3}
          src={user.portrait}
        />
        <div className="action-box">
          <p>支持 jpg、png 格式大小 5M 以内的图片</p>
          <Upload {...props}>
            <Button type="primary">点击上传</Button>
          </Upload>
        </div>
      </div>
    )
  }
}

export default UpdateAvatar;