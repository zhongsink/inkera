import React, { PureComponent } from 'react';
import ReactMarkdown from 'react-markdown';
import './styles/Markdown.less'

class Markdown extends PureComponent {
  render() {
    let { markdownObj } = this.props
    return (
      <ReactMarkdown source={ markdownObj.content } className="markdown-body" />
    )
  }
}

export default Markdown;
