import {
  Form,
  Input,
} from 'antd';
import React, { useState } from 'react';

const App = () => {
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
      <p>
      <span>支援区域：</span>
              <input type="radio" name="gender" value="男"  />产品计划(w概念频道MD)
              <input type="radio" name="gender" value="女" />营销
              <input type="radio" name="gender" value="女" />手术
              <input type="radio" name="gender" value="女" />设计
      </p>
      <Form.Item label="申请人姓名">
        <Input />
      </Form.Item>
      <Form.Item label="出生日期">
        <Input />
      </Form.Item>
       <p>
              性别:
              <input type="radio" name="gender" value="男"  />男
              <input type="radio" name="gender" value="女" />女
        </p>
    </Form>
  );
};

export default App;