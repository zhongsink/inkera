import React from 'react';
import { connect } from 'react-redux';
import Navigator from '../components/common/Navigator';
import Footer from '../components/common/Footer';
import Advertisement from '../components/common/Advertisement';
import RecruitContent from '../components/recruit/RecruitContent';
import SideBar from '../components/recruit/SideBar';
import { Link } from 'react-router-dom';
import { Icon, BackTop, Affix, message } from 'antd'
import axios from 'axios';
import { adList } from '../models/actions/ad';
import './styles/RecruitDetail.less';

class RecruitDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      result: {
        id: null,
        title: null,
        content: null,
        from: null,
        check: null,
        url: null,
        createdAt: null,
        updatedAt: null
      }
    }
  }
  componentDidMount() {
    let self = this;
    let { match, dispatch, ad } = this.props
    if (!ad.data.length)
      dispatch(adList());

    axios.get(`/recruit/get?id=${match.params.id}`)
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
  }

  render() {
    let data = this.props.ad.data,
        template = { title: '', url: '', imgUrl: ''},
        ad = data.length >= 1? data[0] : template,
        ad1 = data.length >= 1? data[1] : template;
    return (
      <div className="main">
        <Navigator />
        <div className="center recruit-detail">
          <section className="recruit-container">
            <RecruitContent recruit={this.state.result} />
            <div className="aside">
              <Affix offsetTop={10}>
                <Advertisement Ad={ad} />
                <Advertisement Ad={ad1} />
                <SideBar />
              </Affix>
            </div>
          </section>
        </div>
        <BackTop />
        <Footer />
      </div>
    )
  }
}
const mapStateToProps = state => ({ ad: state.ad });
export default connect(mapStateToProps)(RecruitDetail);
