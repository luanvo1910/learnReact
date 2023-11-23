import React from 'react';
import { Card } from 'antd';
const { Meta } = Card;



const AmiiboCard = ({amiibo: {character, gameSeries, image}}) => (
  <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="amiiboImg" src={image} />}
  >
    <Meta title={character} description={gameSeries} />
  </Card>
);

export default AmiiboCard;