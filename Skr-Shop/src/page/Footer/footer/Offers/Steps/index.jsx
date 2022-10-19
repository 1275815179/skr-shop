import { Steps } from 'antd';
import React from 'react';
const { Step } = Steps;

const App = () => (
  <Steps size="small" current={1}>
    <Step title="收到文件" />
    <Step title="面试" />
    <Step title="第二次面试" />
    <Step title="加入" />
  </Steps>
);
export default App;