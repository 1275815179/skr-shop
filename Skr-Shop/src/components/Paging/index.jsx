import React, { useState } from 'react';
import PubSub from "pubsub-js";
import { Pagination } from 'antd';

const Paging = (props) => {

  let {allLength,page} = props

  // 定义初始，current为当前页数，初始为1
  const [current, setCurrent] = useState(1);

  // 点击分页之后
  const onChange = (page) => {
    // 发布消息，页码改变
    PubSub.publish('pageChange',page)
    setCurrent(page);
  };

  return <Pagination current={current} onChange={onChange} total={allLength} showSizeChanger={false} pageSize={page} />;
};

export default Paging;
