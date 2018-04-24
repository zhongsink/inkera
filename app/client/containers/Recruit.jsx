import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { BackTop, Affix } from 'antd'
import Navigator from '../components/common/Navigator';
import Footer from '../components/common/Footer';
import Advertisement from '../components/common/Advertisement';
import SideBar from '../components/recruit/SideBar';
import List from '../components/recruit/List';
import { adList } from '../models/actions/ad';
import './styles/Recruit.less';

class Recruit extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
    let { dispatch, ad } = this.props
    if (!ad.data.length)
      dispatch(adList());
  }
  render() {
    let data = this.props.ad.data,
        template = { title: '', url: '', imgUrl: ''},
        ad = data.length >= 1? data[0] : template,
        ad1 = data.length >= 1? data[1] : template;
    return (
      <div className="main">
        <Navigator current='recruit' />
        <div className="center recruit">
          <section className="list-container">
            <List />
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
export default connect(mapStateToProps)(Recruit);
