import React, { PureComponent } from 'react';

class Aside extends PureComponent {
  render() {
    return (
      <div className="sticky-wrap">
        <div className="follow-block">
          <div className="item">
            <div className="item-title">喜欢了</div>
            <div className="item-content">0</div>
          </div>
          <div className="item">
            <div className="item-title">分享了</div>
            <div className="item-content">0</div>
          </div>
        </div>
        <div className="more-block">
          <div className="item">
            <div className="item-title">提问了</div>
            <div className="item-content">0</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Aside