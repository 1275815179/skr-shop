import {
  Form,
  Input,
} from 'antd';
import React, { useState } from 'react';

const App3 = () => {
  const [componentSize, setComponentSize] = useState('default');

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  return (
    <Form
      labelCol={{
        span: 1.5,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
      initialValues={{
        size: componentSize,
      }}
      onValuesChange={onFormLayoutChange}
      size={componentSize}
    >
      <div id='sever-item'>
        <Form.Item label="公司名称：">
          <Input />
        </Form.Item>
      </div>
      <div id='sever-item'>
        <Form.Item label="品牌：">
          <Input />
        </Form.Item>
      </div>
      <div id='sever-item'>
        <Form.Item label="负责人：">
          <Input />
        </Form.Item>
      </div>

    </Form>
  );
};

export default App3;