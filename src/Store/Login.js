import React, { useState } from 'react'
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { auth, provider, appleProvider } from './firebase'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Card, CardBody, Col, Row } from 'react-bootstrap';
import GooglePic from '../assets/google.png'
import ApplePic from '../assets/Programming/apple/apple.jpeg'
import '../css/Login.css'

const Login = ({ onLogin, navigate }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log('kullanıcı Giriş yaptı', userCredential.user);
            onLogin(userCredential.user);
        } catch (error) {
            setError(error.message);
            console.log('Kullanıcı girerken hata oluştu ' + " " + error.message);
        }
    }

    const handleLoginGoogle = async () => {
        try {
            const userCredential = await signInWithPopup(auth, provider);
            console.log(userCredential.user);
            onLogin(userCredential)
        } catch (error) {
            error = "Hatalı işlem";
            console.log(error);
        };
    };
    const handleLoginApple = async () => {
        try {
            const userCredential = await signInWithPopup(auth, appleProvider);
            console.log(userCredential);
            onLogin(userCredential)
        } catch (error) {
            error = "Hatalı işlem";
            console.log(error);
        };
    };

    return (

        <Card className='login'>
            <Card.Header className='custom-header'>
                Giriş Yap</Card.Header>
            <Card.Body >
                <Form onSubmit={handleSubmit} >
                    <Form.Label className='d-flex align-items-center'>E_Mail:
                        <Form.Control className='ms-2'
                            required
                            type="e-mail"
                            placeholder="E-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Label>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Col sm="12" md="4" lg="4" className='mt-2 w-100'>
                        <div>
                            <Form.Label className='d-flex align-items-center'>Şifre:
                                <Form.Control className='ms-4'
                                    required
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </Form.Label>
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </div>
                    </Col>

                    <Row>
                        <Col sm="12" md="4" lg="4" className='d-flex w-100'>
                            <Button type="submit"
                                className='mt-2 w-100'
                            >Giriş Yap</Button>
                        </Col>


                        <Col sm="12" md="4" lg="4"
                            className='d-flex w-100 mt-2'>
                            <Card className='mx-auto w-100'>
                                <CardBody >
                                    <div className='text-center'>
                                        <p >Hesabın yok mu?</p>
                                        <Button
                                            className='w-100'
                                            onClick={() => navigate('signupform')}>Hesap oluştur</Button>
                                    </div>
                                </CardBody></Card>

                        </Col></Row>
                    <p className='text-center mt-2'>Ya da</p>

                    <div className='d-flex gap-3 justify-content-center'>
                        <div>
                            <Button
                                variant='white'
                                onClick={handleLoginGoogle}>
                                <img src={GooglePic}
                                    width={50} />
                            </Button>
                        </div>
                        <div>
                            <Button
                                variant='white'
                                onClick={handleLoginApple}>
                                <img src={ApplePic} width={50} />
                            </Button>
                        </div>
                    </div>
                    {error && <p>{error}</p>}
                </Form>
            </Card.Body>
        </Card>


    );
}

export default Login