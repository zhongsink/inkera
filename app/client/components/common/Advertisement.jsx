import React, { PureComponent } from 'react';
import './styles/ad.less';

class Advertisement extends PureComponent {
  constructor() {
    super()
  }

  render() {
    const { title, url, imgUrl } = this.props.Ad;
    const style = {
      backgroundImage: `url(${imgUrl})`,
      backgroundSize: 'cover',
      width: '240px',
      height: '200px'
    }
    return (
      <div className="ad-banner">
        <a href={url} title={title} target="_blank">
          <div className="advertisement" style={style}></div>
        </a>
        <div className="ad-ctrl">
          <span>广告</span>
        </div>
      </div>
    )
  }
}

export default Advertisement
