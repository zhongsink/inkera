import React, { PureComponent } from 'react';
import { Row, Col } from 'antd';
import './styles/Footer.less'
class Footer extends PureComponent {
  constructor(){
    super();
  }

  render() {
    return (
      <div className="footer">
        <Row>
          <Col span={6}>
            <h3>GitHub</h3>
            <div>
              <a target="_blank " href="https://github.com/zhongsink/inkera">仓库</a>
            </div>
            <div>
              <a target="_blank " href="https://github.com/ant-design/ant-design">ant design</a>
            </div>
          </Col>
          <Col span={6}>
            <h3>相关站点</h3>
            <div>
              <a target="_blank " href="http://inkera.cn">个人主页</a>
            </div>
            <div>
              <a target="_blank " href="http://ant.design">Ant Design</a>
            </div>
          </Col>
          <Col span={6}>
          <h3>社区</h3>
            <div>
              <a target="_blank " href="https://cnodejs.org/">Cnode</a>
            </div>
            <div>
              <a target="_blank " href="http://react-china.org/">React China</a>
            </div>
          </Col>
          <Col span={6}>
            <p> ©2018 inkera 体验技术部出品 </p>
            <p> Powered by inkera </p>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Footer