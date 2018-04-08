import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import Nothing from './Nothing'
import { Icon, Tabs } from 'antd';

const TabPane = Tabs.TabPane;
class Tab extends PureComponent {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="tab-container">
        <Tabs defaultActiveKey="1">
          <TabPane tab={<span className="tab-text"><Icon type="heart" />喜欢</span>} key="1">
            <Nothing />
          </TabPane>
          <TabPane tab={<span className="tab-text"><Icon type="file-text" />分享</span>} key="2">
            <Nothing />
          </TabPane>
          <TabPane tab={<span className="tab-text"><Icon type="question-circle-o" />问答</span>} key="3">
            <Nothing />
          </TabPane>
        </Tabs>
      </div>
    )
  }
}

export default Tab