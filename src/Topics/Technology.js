import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import ipadOled from '../assets/ipadO.jpeg'
import carThing from '../assets/Technology/Spotify/carthing.jpg'
import '../css/Card.css'

const technology = ({ navigate }) => {
    return (
        <div>
            <Card className='customCard'>
                <Card.Body className=''>
                    <Row >
                        <Col xs={12} md={2} lg={2} className="d-flex ">
                            <Card.Img src={carThing} alt="..." className="img-fluid custom-img" />
                        </Col>
                        <Col xs={12} md={5} lg={5} className='w-75' >
                            <div className='align-self-start'>
                                <Card.Title
                                    onClick={() => navigate('technology')}
                                    className="cursor-pointer mb-3 align-self-start">
                                    #Teknoloji
                                </Card.Title>
                            </div>
                            <Card.Link
                                onClick={() => navigate('carThing')}
                            >
                                Spotify, "Car Thing"
                                Adlı Araç Ekipmanını Çöpe Attıracak
                            </Card.Link>
                        </Col>
                    </Row>
                </Card.Body>
            </Card >
            <div>
                <Card className='customCard'>
                    <Card.Body className='d-flex'>
                        <Row >
                            <Col xs={12} md={2} lg={2} >
                                <Card.Img src={ipadOled} alt="..." className="img-fluid custom-img" />
                            </Col>
                            <Col xs={12} md={5} lg={5} className='w-75' >
                                <div className='align-self-start'>
                                    <Card.Title
                                        onClick={() => navigate('technology')}
                                        className="cursor-pointer mb-3 align-self-start"
                                    >
                                        #Teknoloji
                                    </Card.Title>
                                </div>
                                <Card.Link
                                    onClick={() => navigate('ipad')}
                                >
                                    OLED Ekranlı iPad Pro'nun Geliştirme Aşamasında Olduğu İddia Edildi
                                </Card.Link>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card >
            </div>
        </div>
    )
}

export default technology