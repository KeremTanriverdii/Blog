import React, { useState } from 'react';
import Login from '../Store/Login';
import SignupForm from '../Store/SignupForm';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function DisplayForm() {

    const [showSignupForm, setShowSignupForm] = useState(false);

    const handleShowSignupForm = () => {
        setShowSignupForm(true);
    };
    const handleShowLoginForm = () => {
        setShowSignupForm(false);
    };

    const handleLogin = (userData) => {
        if (userData) {
            setShowSignupForm(false);
        }
    };

    return (
        <div>

            {!showSignupForm ? (
                <div className='d-flex'>
                    <Form.Group controlId="validationCustom01">
                        <Form.Label >Giriş Yap</Form.Label>
                        <Login onLogin={handleLogin} />
                        <p className="text-center mt-2">
                            Hesabınız yok mu?{' '}
                            <Button onClick={handleShowSignupForm}>Kayıt Ol</Button>
                        </p>
                    </Form.Group>
                </div>
            ) : (
                <div >
                    <Form.Group controlId="validationCustom01">
                        <Form.Label>Kayıt</Form.Label>
                        <SignupForm onSignup={handleLogin} />
                        <p className="mt-3 text-center">
                            Zaten bir hesabınız var mı?{' '}
                            <Button onClick={handleShowLoginForm}>Giriş Yap</Button>
                        </p>
                    </Form.Group>
                </div>
            )}
        </div>
    );
}

export default DisplayForm;