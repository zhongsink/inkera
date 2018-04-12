import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import Nothing from './Nothing'
import { Icon, Tabs } from 'antd';
import Item from './Item';

const TabPane = Tabs.TabPane;
class Tab extends PureComponent {
  constructor() {
    super();
  }

  renderList(objects, title, type) {
    if(!objects.length) {
      return <Nothing />
    }
    return (
      <div className="user-list-container">
         {
           objects.map((item, index) =>
            <Item title={title} object={item} key={index} type={type}/>)
         }
      </div>
    )
  }


  render() {
    let { like, articles, questions } = this.props;
    return (
      <div className="tab-container">
        <Tabs defaultActiveKey="1">
          <TabPane tab={<span className="tab-text"><Icon type="heart" />喜欢</span>} key="1">
            {this.renderList(like, "喜欢了文章", "article")}
          </TabPane>
          <TabPane tab={<span className="tab-text"><Icon type="file-text" />分享</span>} key="2">
            {this.renderList(articles, "分享了文章", "article")}
          </TabPane>
          <TabPane tab={<span className="tab-text"><Icon type="question-circle-o" />问答</span>} key="3">
            {this.renderList(questions, "提了这个问题", "question")}
          </TabPane>
        </Tabs>
      </div>
    )
  }
}

export default Tab