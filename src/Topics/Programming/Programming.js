import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import microsoft from '../../assets/Programming/microsoft/microsoft.png'
import apple from '../../assets/Programming/apple/apple.jpeg'
import '../../css/Card.css'

const programming = ({ navigate }) => {
    return (
        <div>
            <Card className='customCard'>
                <Card.Body className='d-flex'>
                    <Row >
                        <Col xs={12} md={4} lg={2} >
                            <Card.Img src={microsoft} alt="..." className="img-fluid " />
                        </Col>
                        <Col xs={12} md={6} lg={5} className='w-75'>
                            <div className='align-self-start'>
                                <Card.Title
                                    onClick={() => navigate('programming')}
                                    className="cursor-pointer mb-3 align-self-start"
                                >
                                    #Yazılım
                                </Card.Title>
                            </div>
                            <Card.Link
                                onClick={() => navigate('microsoft')}
                            >
                                Microsoft’un Yeni Çıkan Bilgisayar Hızlandırma Aracı, Tam Aksine Bilgisayarınızı Yavaşlatabilir
                            </Card.Link>
                        </Col>
                    </Row>
                </Card.Body>
            </Card >

            <Card className='customCard'>
                <Card.Body className='d-flex'>
                    <Row >
                        <Col xs={12} md={3} lg={2} >
                            <Card.Img src={apple} alt="..." className="img-fluid" />
                        </Col>
                        <Col xs={12} md={5} lg={5} className='w-75'>
                            <div className='align-self-start'>
                                <Card.Title
                                    onClick={() => navigate('programming')}
                                    className="cursor-pointer mb-3 align-self-start"
                                >
                                    #Yazılım
                                </Card.Title>
                            </div>
                            <Card.Link
                                onClick={() => navigate('apple')}
                            >
                                Apple'ın CEO'su Tim Cook, Üretken Yapay Zekânın iPhone'lara Ne Zaman Geleceğini Açıkladı
                            </Card.Link>
                        </Col>
                    </Row>
                </Card.Body>
            </Card >
        </div>
    )
}

export default programming