import { Select } from 'antd';
import React from 'react';
const { Option, OptGroup } = Select;

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const Selected = () => (
  <Select
    defaultValue="选择查询类型"
    style={{
      width: 180,
    }}
    onChange={handleChange}
  >
    <OptGroup label="直接输入">
      <Option value="jack">选择查询类型</Option>
    </OptGroup>
  </Select>
);
export default function App1() {
  return (
    <div className='app1'>
      <div className='app1-list'>
        <span>查询分类：</span>
        <div>
           <Selected/> 
        </div>
        
      </div>
      <div className='app1-list'>
        <span>类别分类：</span>
        <div>
             <Selected/>
             <Selected/>
        </div>
       
      </div>
    </div>
  )
}
