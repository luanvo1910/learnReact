import React from 'react';
import products from '../jsonData/product.json'

// sử dụng Table trong UI library antd
import { Table } from 'antd';

function importJson() {
  // tạo cột trong bảng 
    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          render: (text) => <a>{text}</a>,
        },
        {
          title: 'Code',
          dataIndex: 'productId',
          key: 'productId',
        },
        {
          title: 'Price',
          dataIndex: 'price',
          key: 'price',
        },
      ];

  return (
    <>
        <Table columns={columns} dataSource={products} />
    </>
  );
}

export default importJson