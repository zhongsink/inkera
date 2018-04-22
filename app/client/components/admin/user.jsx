import React, { PureComponent } from 'react';
import { Layout, Table, Icon, Divider, message,Input,Button } from 'antd';
import { Link } from 'react-router-dom';
import axios from 'axios';
const { Header, Content, Footer, Sider } = Layout;


class User extends PureComponent {
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
    axios.get(`/admin/list?obj=User`)
      .then(function (response) {
        if (response.data.status) {
          self.setState({
            data: response.data.list,
            filterData: response.data.list,
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
        const match = record.name.toString().match(reg);
        if (!match) {
          return null;
        }
        return {
          ...record,
          name: (
            <span>
              {record.name.toString().split(reg).map((text, i) => (
                i > 0 ? [<span>{match[0]}</span>, text] : text
              ))}
            </span>
          ),
        };
      }).filter(record => !!record),
    });
  }

  render() {
    const columns = [{
      title: '用户 id',
      dataIndex: 'key',
      key: 'key'
    }, {
      title: '昵称',
      dataIndex: 'name',
      key: 'name',
      render: (text, row, index) => <Link to={`/user/${row.token}`}>{text}</Link>,
      render: (text, row, index) => <Link to={`/article/${row.key}`} target="_blank">{text}</Link>,
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
      title: '用户名',
      dataIndex: 'username',
      key: 'username',
    }, {
      title: '邮箱',
      dataIndex: 'email',
      key: 'email',
    }, {
      title: '用户 token',
      dataIndex: 'token',
      key: 'token',
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

export default User;
