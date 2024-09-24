import NavDropdown from 'react-bootstrap/NavDropdown';
import useAuth from '../Hooks/useAuth';
import { Button, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import '../App.css'
import { ThemeContext } from '../App';
import { useContext } from 'react';

function ProfileAdjustment({ navigate }) {
    const { toggleTheme } = useContext(ThemeContext);
    const { user, logout } = useAuth();

    return (
        <>
            {user ? (
                <Col sm="12" md="4" lg="4">
                    <div className="d-flex profileAd">
                        <NavDropdown
                            align='end'
                            title={(`Hoş Geldiniz, ${user.displayName || user.email}`)}>

                            <NavDropdown.Item
                                href="#action/3.1"
                                className="d-flex align-items-center"
                                onClick={logout}
                            >
                                Çıkış Yap
                                <FontAwesomeIcon
                                    icon={faArrowRightFromBracket}
                                    className="ms-auto"
                                />
                            </NavDropdown.Item>
                        </NavDropdown>
                    </div>
                </Col>
            ) : (
                <>
                    <Col sm="6" md="10" lg="10" className='navbarButton'>
                        <div className="p-2">
                            <Button onClick={() => navigate('login')}>Giriş Yap</Button>
                        </div>
                        <div className="p-2 ">
                            <Button onClick={() => navigate('signupform')}>Kayıt Ol</Button>
                            <label className="switch ms-2 p-1">
                                <input type="checkbox"
                                    onChange={toggleTheme}
                                />
                                <span className="slider round"></span>
                            </label>
                        </div>

                    </Col>
                </>)
            }
        </>
    );
}

export default ProfileAdjustment