import React, { PureComponent } from 'react';
import classNames from 'classnames';
import { Button } from 'antd'
import './styles/TextInput.less';

class TextInput extends PureComponent {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
  }

  onChange(event) {
    const { onChange } = this.props;
    if (typeof onChange === 'function') {
      onChange(event);
    }
  }

  onKeyPress(event) {
    const { onEnter } = this.props;
    if (typeof onEnter === 'function' && event.key === 'Enter') {
      onEnter();
    }
  }

  render() {
    const { placeholder, value } = this.props;

    const className = classNames({
      'text-input': true
    });

    return (
      <div className="search">
        <div className="ant-input-group-wrap">
          <input
            type="text"
            className={className}
            placeholder={placeholder}
            value={value}
            onChange={this.onChange}
            onKeyPress={this.onKeyPress}
          />
          <Button icon="search" className="ant-search-btn" onClick={this.props.onEnter} />
        </div>
      </div>
    );
  }
}

export default TextInput;
