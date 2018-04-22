import React, { PureComponent } from 'react';
import { Layout, Table, Icon, Divider, message, Input, Button } from 'antd';
import axios from 'axios';
import { Link } from 'react-router-dom';
const { Header, Content, Footer, Sider } = Layout;


class Recuit extends PureComponent {
  constructor() {
    super();
    this.state = {
      data: [],
      filterData: [],
      filterDropdownVisible: false,
      searchText: '',
      filtered: false,
    }
    this.onInputChange = this.onInputChange.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }

  componentDidMount() {
    let self = this;
    axios.get(`/admin/list?obj=Recruit`)
      .then(function (response) {
        if (response.data.status) {
          self.setState({
            data: response.data.list,
            filterData: response.data.list
          });
        }
      })
      .catch(function (error) {
        message.error(error);
      });
  }

  onInputChange = (e) => {
    this.setState({ searchText: e.target.value });
  }
  onSearch = () => {
    const { searchText } = this.state;
    const reg = new RegExp(searchText, 'gi');
    this.setState({
      filterDropdownVisible: false,
      filtered: !!searchText,
      filterData: this.state.data.map((record) => {
        const match = record.title.toString().match(reg);
        if (!match) {
          return null;
        }
        return {
          ...record,
          title: (
            <span>
              {record.title.toString().split(reg).map((text, i) => (
                i > 0 ? [<span>{match[0]}</span>, text] : text
              ))}
            </span>
          ),
        };
      }).filter(record => !!record),
    });
  }

  render() {
    const columns = [
      {
        title: '招聘 id',
        dataIndex: 'key',
        key: 'key',
        render: (text, row, index) => <Link to={`/recruit/${text}`}>{text}</Link>,
      },
      {
        title: '招聘标题',
        dataIndex: 'title',
        key: 'title',
        render: (text, row, index) => <Link to={`/recruit/${row.key}`}>{text}</Link>,
        filterDropdown: (
          <div className="custom-filter-dropdown">
            <Input
              ref={ele => this.searchInput = ele}
              placeholder="Search name"
              value={this.state.searchText}
              onChange={this.onInputChange}
              onPressEnter={this.onSearch}
            />
            <Button type="primary" onClick={this.onSearch}>Search</Button>
          </div>
        ),
        filterIcon: <Icon type="smile-o" style={{ color: this.state.filtered ? '#108ee9' : '#aaa' }} />,
        filterDropdownVisible: this.state.filterDropdownVisible,
        onFilterDropdownVisibleChange: (visible) => {
          this.setState({
            filterDropdownVisible: visible,
          }, () => this.searchInput && this.searchInput.focus());
        },
      }, {
        title: '转载何处',
        dataIndex: 'from',
        key: 'from',
        render: (text, row, index) => <a href={`${row.url}`} target="_blank">{text}</a>,
      }, {
        title: '操作',
        key: 'action',
        render: (text, record) => (
          <span>
            <a href="javascript:;">删除</a>
          </span>
        )
      }];
    return (
      <Content className="jscode-list-container">
        <Table
          columns={columns}
          dataSource={this.state.filterData} />
      </Content>
    )
  }
}

export default Recuit;
