
import { Select } from 'antd';
import { Radio } from 'antd';
import React, { useState } from 'react';

const App2 = () => {
  const [value, setValue] = useState(1);

  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  return (
    <Radio.Group onChange={onChange} value={value}>
      <Radio value={1}>已毕业</Radio>
      <Radio value={2}>参加</Radio>
      <Radio value={3}>休假</Radio>
      <Radio value={4}>辍学</Radio>
    </Radio.Group>
  );
};
const { Option, OptGroup } = Select;

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const Selected = (text) => (
  <Select
    defaultValue="直接输入"
    style={{
      width: 130,
    }}
    onChange={handleChange}
  >
    <OptGroup label="直接输入">
      <Option value="jack">直接输入</Option>
    </OptGroup>
  </Select>
);
const Selected2 = () => (
  <Select
    defaultValue="选择学术背景"
    style={{
      width: 130,
    }}
    onChange={handleChange}
  >
    <OptGroup label="直接输入">
      <Option value="jack">选择学术背景</Option>
    </OptGroup>
  </Select>
);
const Selected3 = () => (
  <Select
    defaultValue="021"
    style={{
      width: 130,
    }}
    onChange={handleChange}
  >
    <OptGroup label="直接输入">
      <Option value="jack">021</Option>
    </OptGroup>
  </Select>
);
export default function App1() {
  return (
    <div className='app1'>
      <div className='app1-list'>
        <span>电子邮件：</span>
        <input type="text" className='ipt1'/>
        <input type="text" className='ipt1'/>
        <Selected />
       
      </div>
      <div className='app1-list'>
        <span>手机号码：</span>
        <Selected3/>
        <input type="text" className='ipt2'/>
        <input type="text"className='ipt2' />
      </div>
      <div className='app1-list'>
        <span>电话号码：</span>
        <Selected3/>
         <input type="text" className='ipt2'/>
        <input type="text" className='ipt2'/>
      </div>
      <div className='app1-list'>
        <span>期末教育：</span>
        <Selected2/>
        <App2 />
      </div>
      
    </div>
  )
}
