import { Button, message, Space } from 'antd';
import React from 'react';

const warning = () => {
  message.warning('This is a warning message');
};

const App = () => (
  <Space>
    <Button onClick={warning}>申请</Button>
  </Space>
);

export default App;