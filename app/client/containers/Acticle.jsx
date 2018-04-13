import React from 'react';
import { connect } from 'react-redux';
import Navigator from '../components/common/Navigator';
import Footer from '../components/common/Footer';
import Advertisement from '../components/common/Advertisement';
import ActicleContent from '../components/acticle/ActicleContent';
import SuspendedPanel from '../components/acticle/SuspendedPanel';
import RecomendedBox from '../components/common/RecomendedBox';
import SideUser from '../components/common/SideUser';
import { Link } from 'react-router-dom';
import { Icon, BackTop, Affix, message } from 'antd'
import axios from 'axios';
import './styles/Acticle.less';

class Acticle extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [],
      result: {
        article: {
          id: null,
          title: null,
          content: null,
          lable: null,
          check: null,
          heats: null,
          UserId: null,
          createdAt: null,
          updatedAt: null
        },
        user: {
          id: null,
          name: null,
          username: null,
          portrait: null,
          email: null,
          authentication_token: null,
          profile: {}
        }
      }
    }
  }
  componentDidMount() {
    let self = this;
    let { match } = this.props
    axios.get(`/article/get?id=${match.params.id}`)
      .then(function (response) {
        if (response.data.status) {
          self.setState({
            result: response.data.result
          });
        }
      })
      .catch(function (error) {
        message.error(error);
      });
    axios.get(`/article/recommended`)
      .then(function (response) {
        if (response.data.status) {
          self.setState({
            list: response.data.result
          });
        }
      })
      .catch(function (error) {
        message.error(error);
      });
  }

  render() {
    let { match } = this.props
    let { user, article } = this.state.result
    return (
      <div className="main">
        <Navigator />
        <div className="center article">
          <section className="article-container">
            <ActicleContent user={user} article={article} match={match} />
            <div className="aside">
              <Affix offsetTop={10}>
                <SideUser user={user} />
                {this.state.list.length > 0 ? <RecomendedBox title="你可能还感兴趣的文章" type="article" list={this.state.list} /> : null}
              </Affix>
            </div>
            <SuspendedPanel match={match}/>
          </section>
        </div>
        <BackTop />
        <Footer />
      </div>
    )
  }
}

export default connect()(Acticle);
