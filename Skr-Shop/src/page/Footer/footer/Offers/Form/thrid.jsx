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
          span: 6,
        }}
        wrapperCol={{
          span: 10,
        }}
        layout="horizontal"
        initialValues={{
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
      >
        <Form.Item label="学校名">
          <Input />
        </Form.Item>
        <Form.Item label="主要的">
          <Input />
        </Form.Item>
        <Form.Item label="附上简历">
          <Input />
        </Form.Item>
      </Form>
    );
  };
  
  export default App3;