import React, { useEffect, useContext } from 'react'
import {AmiiboContext} from '../context/amiiboContext'

// sử dụng Col và Row trong antd để tạo cột, hàng hiển thị card
import { Col, Row, Spin  } from 'antd';
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

  // chạy useEffect để load state, [] là phần điều kiện để useEffect chạy lại 
  //-> nếu searchString thay đổi, nó sẽ chạy function search và load lại trang
  useEffect(() => {
    if (searchString != null) {
      searchAmiibos(searchString)
  } else {
    getAmiibo()
  }}, [searchString])

  let body = null

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
          {amiibos && amiibos.map(amiibo => (
              <Col span={8} key={amiibo.head + amiibo.tail}>
                  <AmiiboCart amiibo={amiibo} />
              </Col>
          ))}
      </Row>
      </>
    )
  }

  return (
    <>
    <Searchbox/>
    {body}
    {amiibo !== null && <AmiiboModal/>}
    </>
  )
}

export default FetchApi