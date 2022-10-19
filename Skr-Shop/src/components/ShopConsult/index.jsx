import { Table } from 'antd';
import React from 'react';

const columns = [
    {
        title: 'Count',
        dataIndex: 'count',
        width:500
    },
    {
        title: 'Name',
        dataIndex: 'name',
        width:500
    },
    {
        title: 'Date',
        dataIndex: 'date',
    },
];
const data = [];

for (let i = 1; i <= 24; i++) {
    data.push({
        key: i,
        count: `完整回答:${i}`,
        name: 'hello***',
        date: `2022年${new Date().getMonth()+1}月${i}日`,
    });
}

const ShopConsult = () => (
    <Table
        columns={columns}
        dataSource={data}
        pagination={{
            pageSize: 8,
        }}
        
    />
);

export default ShopConsult;