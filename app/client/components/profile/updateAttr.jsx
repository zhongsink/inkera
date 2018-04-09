import React, { PureComponent } from 'react';
import { Icon } from 'antd'

class UpdateAttr extends PureComponent {
  constructor() {
    super();
  }

  render() {
    let { placeholder, name, value } = this.props
    return (
      <div className="input-box">
        <input type="text" placeholder={ placeholder } name={name} value={value} />
        <div className="action-box">
          <a className="edit-btn">
            <Icon type="edit" />
            &nbsp;&nbsp;编辑
          </a>
        </div>
      </div>
    )
  }
}

export default UpdateAttr;