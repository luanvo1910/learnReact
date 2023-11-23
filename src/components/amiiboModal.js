import React, { useEffect, useState, useContext } from 'react'
import {AmiiboContext} from '../context/amiiboContext'
import { Modal } from 'antd';

const AmiiboModal = () => {
    const {
        amiiboState: {amiibo},
        showModal,
        setShowModal
    } = useContext(AmiiboContext)

    const [showAmiibo, setShowAmiibo] = useState(amiibo)
    useEffect(() => setShowAmiibo(amiibo), [amiibo])

    const { character, gameSeries, image, amiiboSeries } = showAmiibo

    const handleOk = () => {
        setShowModal(false);
    };
    
    const handleCancel = () => {
        setShowModal(false);
    };

  return (
    <Modal title="Basic Modal" open={showModal} onOk={handleOk} onCancel={handleCancel}>
        <img alt="amiiboImg" src={image} />
        <p>Character: {character}</p>
        <p>Game: {gameSeries}</p>
        <p>Amiibo series: {amiiboSeries}</p>
    </Modal>
  )
}

export default AmiiboModal