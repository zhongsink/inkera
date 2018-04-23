import React, { PureComponent } from 'react';
import { Layout, Icon, Form, Input, Button,message } from 'antd';
import Advertisement from '../common/Advertisement';
import axios from 'axios';
const FormItem = Form.Item;
const { Content, Sider } = Layout;

class AdItem extends PureComponent {
  constructor() {
    super();
    this.state = {
      adv: {
        id: '',
        title: '',
        url: '',
        imgUrl: ''
      }
    }
    this.handleInput = this.handleInput.bind(this);
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state)
    let self = this;
    axios.post(`/admin/ad/update`,{
      _csrf: document.querySelector("meta[name=csrf-token]").content,
      ...self.state.adv
    })
      .then(function (response) {
        if (response.data.status) {
          message.success('广告更新成功');
        }else {
          message.success('广告更新失败');
        }
      })
      .catch(function (error) {
        message.error(error);
      });
  }
  handleInput(e) {
    let state = {};
    let self = this;
    state[`${e.target.name}`] = e.target.value;
    state = Object.assign( self.state.adv, state)
    self.setState({
      adv: {...state}
    });
  }
  componentDidMount () {
    let { ad } = this.props;
    this.setState({
      adv: ad
    });
  }
  render() {
    // let { ad } = this.props;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 20 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 20, offset: 4 },
      },
    };
    return (
      <Content className="advantisement">
        <div className="advantisement-form">
          <Form onSubmit={this.handleSubmit}>
            <FormItem
              {...formItemLayout}
              label="广告标题"
            >
              <Input type="text" name="title" placeholder="广告标题" value={this.state.adv.title} onChange={this.handleInput} />
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="广告链接地址">
              <Input type="text" name="url" placeholder="广告链接地址" value={this.state.adv.url} onChange={this.handleInput} />
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="图片链接地址">
              <Input type="text" name="imgUrl" placeholder="图片链接地址" value={this.state.adv.imgUrl} onChange={this.handleInput} />
            </FormItem>
            <FormItem {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit" className="login-form-button">
                保存
              </Button>
            </FormItem>
          </Form>
        </div>
        <div className="ad-preview">
          <h3>广告预览</h3>
          <Advertisement Ad={this.state.adv} />
        </div>
      </Content>
    )
  }
}

export default Form.create()(AdItem);
