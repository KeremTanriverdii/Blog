import React from "react"
import { Col, Row, Nav, Container } from 'react-bootstrap'
import '../App.css'

function Footer({ navigate }) {
    return (

        <footer className="footer" >
            <Container>
                <Row>
                    <Col sm="12" md="4" lg="4" className="text-center">
                        <h5>Logo</h5>
                    </Col>

                    <Col sm="12" md="4" lg="4" className="d-flex justify-content-center" >
                        <Nav >
                            <Nav.Link onClick={() => navigate('about')}>Hakkımızda</Nav.Link>
                            <Nav.Link onClick={() => navigate('contact')} >Contact</Nav.Link>
                        </Nav>
                    </Col>
                    <Col sm="12" md="4" lg="4" className="mt-3 text-center">
                        <address >
                            <h6>İletişim</h6>
                            E-Mail: <a href="mailto:ahmetk.tanriverdi@gmail.com">
                                ahmetk.tanriverdi@gmail.com
                            </a>
                            <p>Phone: (XXX) XXX-XX90</p>
                        </address>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer