import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import React from 'react';

import store from '../redux/store'


const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);

const onSearch = (value) => {
  
}

const Searchs = () => (
  <Space direction="vertical">
    <Search
      placeholder="标签搜索"
      style={{ width: 304 }}
      onSearch={onSearch} enterButton
    />
  </Space>
);

export default Searchs;