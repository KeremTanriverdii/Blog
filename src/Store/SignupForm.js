import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Card, CardBody, CardHeader, Col, Container, FormLabel, Row } from 'react-bootstrap';
import '../css/Login.css'

function SignupForm({ onSignup, navigate }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log('kullanıcı oluşturuldu', userCredential.user);
            onSignup(userCredential.user);
        } catch (error) {
            setError(error.message);
            console.log('Kullanıcı oluşturulamadı' + error.message);
        }
    }
    return (
        <Card className='login'>
            <CardHeader className='custom-header bg-white'>Kayıt Ol</CardHeader>
            <CardBody>
                <Form onSubmit={handleSubmit} className='d-flex flex-column'>
                    <FormLabel className='d-flex align-items-center'>E_Mail:
                        <Form.Control className='ms-2'
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </FormLabel>

                    <Col sm="12" md="4" lg="4" className='mt-2 w-100'>
                        <FormLabel className='d-flex align-items-center'>Şifre:
                            <Form.Control className='ms-4'
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            {error && <p>{error}</p>}
                        </FormLabel>
                    </Col>

                    <Row>
                        <Col sm="12" md="4" lg="4" className='d-flex w-100'>
                            <Button type="submit"
                                className='mt-2 w-100' >Kayıt ol</Button>
                        </Col>
                    </Row>


                    <Col sm="12" md="4" lg="4"
                        className='d-flex w-100 mt-3'>

                        <Card className='mx-auto w-100'>
                            <CardBody >
                                <div className='text-center'>
                                    <p >Zaten bir hesabın var mı ?</p>
                                    <Button
                                        className='w-100'
                                        onClick={() => navigate('login')}>Giriş Yap</Button>
                                </div>
                            </CardBody></Card>
                    </Col>
                </Form>
            </CardBody>
        </Card>
    );
};

export default SignupForm