import { Pagination } from 'antd';
import React from 'react';

const Paginations = () => <Pagination pageSize={20} defaultCurrent={1} total={50} />;

export default Paginations;