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

    const { name, character, gameSeries, image, amiiboSeries } = showAmiibo

    const handleOk = () => {
        setShowModal(false);
    };
    
    const handleCancel = () => {
        setShowModal(false);
    };

  return (
    <Modal title={name} open={showModal} onOk={handleOk} onCancel={handleCancel}>
        <img alt="amiiboImg" src={image} />
        <h1>Character: {character}</h1>
        <h3>Game: {gameSeries}</h3>
        <h3>Amiibo series: {amiiboSeries}</h3>
    </Modal>
  )
}

export default AmiiboModal