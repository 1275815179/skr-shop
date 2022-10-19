
import { Select } from 'antd';
import { Radio } from 'antd';
import React, { useState } from 'react';
const { Option, OptGroup } = Select;

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const Selected = (text) => (
  <Select
    defaultValue="02"
    style={{
      width: 130,
    }}
    onChange={handleChange}
  >
    <OptGroup label="直接输入">
      <Option value="jack">02</Option>
    </OptGroup>
  </Select>
);
export default function App1() {
  return (
    <div className='app1'>
      <div className='app1-list'>
        <span>电话号码：</span>
        <div>
          <Selected/>
         <input type="text" className='ipt2'/>
        <input type="text" className='ipt2'/>
        </div>
      </div>
      <div className='app1-list'>
        <span>负责人手机号码：</span>
        <div>
          <Selected/>
        <input type="text" className='ipt2'/>
        <input type="text"className='ipt2' />
        </div>
      </div>
      <div className='app1-list'>
        <span>联系电子邮件：</span>
        <div>
        <input type="text" className='ipt1'/>
        @<input type="text" className='ipt1'/>
        <Selected />
        </div>
      
       
      </div>
    </div>
  )
}
