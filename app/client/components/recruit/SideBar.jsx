import React, { PureComponent } from 'react';

class SideBar extends PureComponent {
  constructor() {
    super()
  }
  render() {
    return (
      <div className="sidebar-block">
        <div className="recuit-title">
          招聘相关链接
        </div>
        <ul className="more-list">
          <li className="item">
            <a href="http://react-china.org/c/jobs" target="_blank">react 中文</a>
          </li>
          <li className="item">
            <a href="https://www.vue-js.com/?tab=job" target="_blank">Vue.js专业中文社区</a>
          </li>
          <li className="item">
            <a href="https://cnodejs.org/?tab=job" target="_blank">CNode：Node.js专业中文社区</a>
          </li>
        </ul>
      </div>
    )
  }
}

export default SideBar;
