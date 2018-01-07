import React from 'react';
import './styles/Languages.less';

const Languages = () => (
  <div className="languages">
    <dl>
      <dt>Languages</dt>
      <dd>
        <span className="language">Javascript</span>
        <span className="count">37524</span>
      </dd>
      <dd>
        <span className="language">CSS</span>
        <span className="count">2021</span>
      </dd>
      <dd>
        <span className="language">Typescript</span>
        <span className="count">1838</span>
      </dd>
      <dd>
        <span className="language">HTML</span>
        <span className="count">1192</span>
      </dd>
      <dd>
        <span className="language">Vue</span>
        <span className="count">792</span>
      </dd>
      <dd>
        <span className="language">Ruby</span>
        <span className="count">487</span>
      </dd>
      <dd>
        <span className="language">PHP</span>
        <span className="count">207</span>
      </dd>
      <dd>
        <span className="language">C#</span>
        <span className="count">133</span>
      </dd>
      <dd>
        <span className="language">CoffeeScript</span>
        <span className="count">133</span>
      </dd>
      <dd>
        <span className="language">Python</span>
        <span className="count">124</span>
      </dd>
    </dl>
  </div>
);

export default Languages;
