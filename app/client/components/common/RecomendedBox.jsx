import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import './styles/recomended.less';

class RecomendedBox extends PureComponent {
  constructor() {
    super()
  }

  renderList() {
    const { list, type } = this.props;
    return list.map((item, index) =>
      <div key={index} className="entry-list-item">
        <Link to={`/${type}/${item.id}`} className="body-item-title">
          {item.title}
        </Link>
      </div>
    )
  }
  render() {
    const { title } = this.props;
    return (
      <div className="recomended-box">
        <div className="block-title">
          {title}
        </div>
        <div className="block-body">
          {this.renderList()}
        </div>
      </div>
    )
  }
}

export default RecomendedBox
