import React, { useState, useEffect, useContext } from 'react'
import {AmiiboContext} from '../context/amiiboContext'

// sử dụng Col và Row trong antd để tạo cột, hàng hiển thị card
import { Col, Row, Spin, Pagination } from 'antd';
// import components card 
import AmiiboCart from './card';
// import components modal
import AmiiboModal from './amiiboModal' 
// import search box
import Searchbox from './SearchBox'

const FetchApi = () => {
  const {
    amiiboState: {amiibo, amiibos, isLoading},
    getAmiibo,
    searchString,
    searchAmiibos
  } = useContext(AmiiboContext);

  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(50);

  // chạy useEffect để load state, [] là phần điều kiện để useEffect chạy lại 
  //-> nếu searchString thay đổi, nó sẽ chạy function search và load lại trang
  useEffect(() => {
    if (searchString != null) {
      searchAmiibos(searchString)
  } else {
    const offset = (current - 1) * pageSize;
    const limit = pageSize;
    getAmiibo(offset, limit)
  }}, [searchString])

  // Tính toán vị trí bắt đầu và kết thúc của data trên mỗi trang
  const startIndex = (current - 1) * pageSize;
  const endIndex = current * pageSize;
  // Trả về một mảng con chứa data của trang hiện tại
  const dataAmiibo = amiibos.slice(startIndex, endIndex);

  let body = null;

  const handleChange = (page, size) => {
    setCurrent(page);
    setPageSize(size);
  };

  // nếu chưa load xong nó sẽ hiện spinner
  if (isLoading) {
    body = (
      <>
      <div className="spinner">
        <Spin />
      </div>
      </>
    )
  } else {
    body = (
      <>
      <Row gutter={16}>
        {/* check amiibos đã tồn tại hay chưa trước khi map giá trị và truyền vào component Card */}
          {amiibos && dataAmiibo.map(amiibo => (
              <Col span={8} key={amiibo.head + amiibo.tail}>
                  <AmiiboCart amiibo={amiibo} />
              </Col>
          ))}
      </Row>
      </>
    )
  }

  let pagi = (
    <>
    <Pagination
      total={amiibos.length}
      pageSize={pageSize}
      showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
      defaultCurrent={current}
      onChange={handleChange}
    />
    </>
  )

  return (
    <>
    <Searchbox/>
    {pagi}
    {body}
    {amiibo !== null && <AmiiboModal/>}
    </>
  )
}

export default FetchApi