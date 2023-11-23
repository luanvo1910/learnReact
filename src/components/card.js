import React, { useContext } from 'react';
import { Card, Button } from 'antd';
import {AmiiboContext} from '../context/amiiboContext'
const { Meta } = Card;

// giá trị được truyền vào là amiibo, nó sẽ lấy các giá trị như character, gameSeries, image để truyền vào Card
const AmiiboCard = ({amiibo: {character, gameSeries, image, head, tail}}) => {
  const {
      setShowModal,
      findAmiibo
  } = useContext(AmiiboContext)

  const chooseAmiibo = amiiboId => {
      findAmiibo(amiiboId)
      setShowModal(true)
  }

  const amiiboId = head + tail;
  // console.log(amiiboId)

  return (
    <>
    <Card
      hoverable
      style={{
        width: 240,
      }}
      cover={<img alt="amiiboImg" src={image} />}
    >
      <Meta title={character} description={gameSeries} />
      <Button type="primary" onClick={() => chooseAmiibo(amiiboId)}>
        Details
      </Button>
    </Card>
    </>
  )
};

export default AmiiboCard;