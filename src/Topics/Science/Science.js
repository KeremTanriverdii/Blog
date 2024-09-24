import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'

import catsPicture from '../../assets/cats/cat.jpeg'
import '../../css/Card.css'

const science = ({ navigate }) => {
    return (
        <div>
            <Card className='customCard'>
                <Card.Body >
                    <Row >
                        <Col xs={12} md={2} lg={2}  >
                            <Card.Img src={catsPicture} alt="..." className="img-fluid " />
                        </Col>
                        <Col xs={12} md={6} lg={6}  >
                            <div className='align-self-start'>
                                <Card.Title
                                    onClick={() => navigate('science')}
                                    className="cursor-pointer mb-3 align-self-start"
                                >
                                    Bilim
                                </Card.Title>
                            </div>
                            <Card.Link
                                onClick={() => navigate('cats')}
                            >
                                Kediler Neden Her Şeyi Pıt Diye Aşağı İter?
                            </Card.Link>
                        </Col>
                    </Row>
                </Card.Body>
            </Card >
        </div >
    )
}

export default science