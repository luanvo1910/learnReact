import { useState, useEffect } from 'react'
import axios from 'axios'
import { Col, Row } from 'antd';
import AmiiboCart from './card'

const FetchApi = () => {
  let [fetchdata, setFetchdata] = useState('');

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