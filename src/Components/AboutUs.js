import React from 'react'
import { Card } from 'react-bootstrap'
import Photo from '../assets/google.png'
import '../css/Login.css'

function AboutUs() {

    return (
        <main className='align-self-center mb-5'>
            <Card className='login' >
                <Card.Header className='text-center' >Hakkımda</Card.Header>
                <Card.Body className='d-flex'>
                    <Card.Img variant='left' src={Photo} width={150} />
                    <Card.Text className='ms-2 align-self-center'>
                        <p >5 Ocak 2001 doğumluyum. İlkokul ve ortaokulu İstanbul'da bitirdim ardından liseyi Şehit Büyükelçi İsmail Erez MTAL okulunda veritabanı bölümünde eğitim alıp 2019 senesinde mezun oldum. Şuan da Anadolu Üniversitesin'de yönetim bilişim sistemleri bölümünde eğitimim devam etmektedir. Eğitimim sürerken kendimi web programlama front-end alanında geliştiriyorum.</p>
                    </Card.Text></Card.Body>
            </ Card >
        </main>
    )
}

export default AboutUs