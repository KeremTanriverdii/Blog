import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import euro24 from '../assets/euro24.jpeg'
import openAi from '../assets/openAl.jpeg'
import '../css/Card.css'

const ai = ({ navigate }) => {
    return (
        <div>
            <Card className='customCard'>
                <Card.Body >
                    <Row >
                        <Col xs={12} md={2} lg={2} >
                            <Card.Img src={euro24} alt="..." className="img-fluid custom-img" />
                        </Col>
                        <Col xs={12} md={5} lg={5} className='w-75'>
                            <div className='align-self-start'>
                                <Card.Title
                                    onClick={() => navigate('ai')}
                                    className="cursor-pointer mb-3 align-self-start "
                                >
                                    #Yapay Zeka
                                </Card.Title>
                            </div>
                            <Card.Link
                                onClick={() => navigate('euro')}
                            >
                                EURO 2024'te Kazanan İspanya Oldu, Yapay Zekâ Yine Skoru Bildi
                            </Card.Link>
                        </Col>
                    </Row>
                </Card.Body>
            </Card >

            <Card className='customCard'>
                <Card.Body >
                    <Row >
                        <Col xs={12} md={2} lg={2} >
                            <Card.Img src={openAi} alt="..." className="custom-img" />
                        </Col>
                        <Col xs={12} md={5} lg={5} className='w-75'>
                            <div className='align-self-start'>
                                <Card.Title
                                    onClick={() => navigate('ai')}
                                    className="cursor-pointer mb-3 align-self-start"
                                >
                                    #Yapay Zeka
                                </Card.Title>
                            </div>
                            <Card.Link
                                onClick={() => navigate('sora')}
                            >
                                OpenAI'ın Sora Aracıyla Yapılan İlk Reklam Yayımlandı

                            </Card.Link>
                        </Col>
                    </Row>
                </Card.Body>
            </Card >
        </div>
    )
}

export default ai