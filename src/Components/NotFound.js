import React from 'react'
import { Button } from 'react-bootstrap'

const NotFound = ({ navigate }) => {
    return (
        <div>
            <h1>404 - Sayfa Bulunamadı</h1>
            <p>Üzgünüz, aradığınız sayfa bulunamadı.</p>
            <Button className='ms-auto'
                onClick={() => navigate('home')}>
                Ana sayfaya gitmek için tıklayınız</Button>
        </div>
    )
}
export default NotFound