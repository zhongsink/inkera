import React, { PureComponent } from 'react';
import { Upload, message, Button, Icon } from 'antd';
import Avatar from 'react-avatar';
import axios from 'axios';

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
      if (info.file.response.status) {
        axios.post(`/updateAvatar`, {
          _csrf: document.querySelector("meta[name=csrf-token]").content,
          url: info.file.response.url,
          token: document.querySelector("#avatar-uploader").getAttribute('data-user')
        })
          .then(function (response) {
            if (response.data.status) {
              message.success("更新成功")
              location.reload();
            } else {
              message.error("更新失败")
            }
          })
          .catch(function (error) {
            message.error(error.message);
          });
      } else {
        message.error('上传失败');
      }
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} 上传失败。`);
    }
  },
};

class UpdateAvatar extends PureComponent {
  render() {
    let { user } = this.props
    return (
      <div className="avatar-uploader" id="avatar-uploader" data-user={user.authentication_token}>
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