import React, { PureComponent } from 'react';
import { Layout, Icon, message, Button } from 'antd';
import axios from 'axios';
import AdItem from './adItem';
const { Header, Content, Footer, Sider } = Layout;

class Ad extends PureComponent {
  constructor() {
    super();
    this.state = {
      data: []
    }
    this.renderList = this.renderList.bind(this);
    this.addAd = this.addAd.bind(this);
  }

  componentDidMount() {
    let self = this;
    axios.get(`/ad/list`)
      .then(function (response) {
        if (response.data.status) {
          self.setState({
            data: response.data.result,
          });
        }
      })
      .catch(function (error) {
        message.error(error);
      });
  }
  addAd() {
    axios.post(`/admin/ad/add`,{
      _csrf: document.querySelector("meta[name=csrf-token]").content,
      title: '腾讯云　容器服务 CCS-模板',
      url: 'https://cloud.tencent.com/product/ccs',
      imgUrl: '/public/img/6c80707.jpg'
    })
      .then(function (response) {
        if (response.data.status) {
          message.success('广告创建成功');
          location.reload();
        }
      })
      .catch(function (error) {
        message.error(error);
      });
  }
  renderList() {
    let { data } = this.state;
    return data.map((item, index) =>
      <AdItem key={index} ad={item} />
    );
  }

  render() {
    if (this.state.data.length == 0) {
      return (
        <Content className="jscode-list-container">
          加载中
        </Content>
      )
    }
    return (
      <Content className="jscode-list-container">
        <Button type="dashed" onClick={this.addAd}>
          <Icon type="plus" /> 投放广告
        </Button>
        {this.renderList()}
      </Content>
    )
  }
}

export default Ad;
