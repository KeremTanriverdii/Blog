import React, { useContext, useState } from 'react'
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Col, Row, Navbar } from 'react-bootstrap';
import '../App.css'
import ProfileAdjustment from './ProfileAdjustment';

function CustomNavbar({ navigate }) {

    return (
        <Navbar className='border-bottom'>
            <Container >
                <Row className='w-100 align-items-center'>
                    <Col className='navbar-row-response'>
                        <Navbar.Brand onClick={() => navigate('home')}
                        >Blog
                        </Navbar.Brand>
                        <NavDropdown title="Konular"
                            id="basic-nav-dropdown "
                            className='ms-5'>
                            <NavDropdown.Item onClick={() => navigate('technology')}>Teknoloji
                            </NavDropdown.Item>
                            <NavDropdown.Item onClick={() => navigate('ai')}>
                                Yapay Zeka
                            </NavDropdown.Item>
                            <NavDropdown.Item onClick={() => navigate('programming')}>Yazılım
                            </NavDropdown.Item>
                            <NavDropdown.Item onClick={() => navigate('science')}>
                                Bilim
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Col>
                    <Col className='navbar-response'>
                        <ProfileAdjustment navigate={navigate} />
                    </Col>
                </Row>

            </Container>
        </Navbar>
    )
}

export default CustomNavbar