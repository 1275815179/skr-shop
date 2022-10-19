import React, { Component } from 'react'
import { Select } from 'antd';
import Model from './data';
import 'antd/dist/antd.css';

const Option = Select.Option;
export default class SelectCity extends Component {
  state = {
    capitals: [], // 省份
    city: [], // 市
    areaList: [], // 区
  }  

  componentDidMount() {
    this.handleAddressData();
  }
  handleAddressData = () => {
    const da = Model.get();
    if (da && da.length > 0) {
      this.setState({
        capitals: da,
      })
    }
  }
  // 区
  handleChange(value) {
    // console.log(value);
  }
  // 省份
  getCity = (value) => {
    const { capitals } = this.state;
    let da = [];
    capitals.map(item => {
      if (item.name === value) {
        da = item.cityList
      }
    })
    this.setState({
      city: da,
    })
  }
  // 市级
  getSreaList = (value) => {
    const { city } = this.state;
    let ci = [];
    city.map(item => {
      if (item.name === value) {
        ci = item.areaList
      }
    })
    this.setState({
      areaList: ci,
    })
  }
  getData = (value) => {
    // console.log(`selected ${value}`);
  }
  render() {
    return (
      <div style={{ padding: '20px' }}>
        <Select
          showSearch
          style={{ width: 128, marginRight: '5px' }}
          placeholder="省份"
          optionFilterProp="children"
          onChange={this.getCity}
          filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
        >
          {this.state.capitals.map((item) => {
            // eslint-disable-next-line no-unused-expressions
            return (
                <Option value={item.name} key={item.name}>{item.name}</Option>
            )
          })}
        </Select>
        <Select
          showSearch
          style={{ width: 128, marginRight: '5px' }}
          placeholder="市"
          optionFilterProp="children"
          onChange={this.getSreaList}
          filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
        >
          {this.state.city.map(item => {
            return (
              <Option value={item.name} key={item.name}>{item.name}</Option>
            )
          })}
        </Select>
        <Select
          showSearch
          style={{ width: 128 }}
          placeholder="区"
          optionFilterProp="children"
          onChange={this.getData}
          filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
        >
          {this.state.areaList.map(item => {
            return (
              <Option value={item} key={item}>{item}</Option>
            )
          })}
        </Select>
      </div>
    )
  }
}
