// 返回顶部组件
import { BackTop } from 'antd';
import React from 'react';
const style = {
  height: 60,
  width: 60,
  lineHeight: '60px',
  borderRadius: 8,
  backgroundColor: '#000',
  color: '#fff',
  textAlign: 'center',
  fontSize: 18,
};

const BackTops = () => (
  <div>
    <BackTop>
      <div style={style}>UP</div>
    </BackTop>
  </div>
);

export default BackTops;