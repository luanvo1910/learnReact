import { useState, useEffect } from 'react'
import axios from 'axios'

// sử dụng Col và Row trong antd để tạo cột, hàng hiển thị card
import { Col, Row } from 'antd';
// import components card 
import AmiiboCart from './card';


const FetchApi = () => {
  // tạo fetchdata và hàm thay đổi giá trị của nó với useState
  let [fetchdata, setFetchdata] = useState('');

  // fetch API = axios và set giá trị trả về vào fetchdata
  const fetchApi = async () => {
    try {
      const response = await axios.get('https://amiiboapi.com/api/amiibo/')
      console.log(response)
      if (response.status === 200) {
        setFetchdata(response.data);
      }
    } catch (error) {
      console.log(error)
    }
  }

  // chạy useEffect để load state, [] là phần điều kiện để useEffect chạy lại 
  useEffect(() => {
    fetchApi();
  }, []);

  const amiibos = fetchdata.amiibo;
  console.log(amiibos)

  let body = (
        <>
        <div>
            <p>........</p>
        </div>
        </>
    )

  if (amiibos) {
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
    {body}
    </>
  )
}

export default FetchApi