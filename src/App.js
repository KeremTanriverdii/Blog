import React, { createContext, useEffect, useState } from 'react';
import Footer from './Components/Footer';
import './App.css'

import AboutUs from './Components/AboutUs';
import Home from './Components/Home';
import Contact from './Components/Contact';
import NotFound from './Components/NotFound';

import SignupForm from './Store/SignupForm';
import Login from './Store/Login';

import Technology from './Topics/Technology';
import carThing from './Topics/Technology/CarThing'
import Ipad from './Topics/Technology/Ipad'

import Science from './Topics/Science/Science';
import AI from './Topics/AI';
import Euro from './Topics/AI/Euro'
import Sora from './Topics/AI/Sora'

import Programming from '../src/Topics/Programming/Programming';

import Cats from './Topics/Science/article/kediler-neden-her-seyi-asagi-iter';
import Microsoft from './Topics/Programming/Microsoft'
import Apple from './Topics/Programming/Apple';
import { Col, Container, Row } from 'react-bootstrap';
import CustomNavbar from './Components/CustomNavbar';

export const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
function App() {

  const [page, setPage] = useState(window.location.pathname.slice(1) || 'home');
  const componentMap = {
    home: Home,
    about: AboutUs,
    contact: Contact,
    science: Science,
    cats: Cats,

    technology: Technology,
    ipad: Ipad,
    carThing: carThing,
    programming: Programming,
    ai: AI,
    euro: Euro,
    sora: Sora,

    login: Login,
    signupform: SignupForm,
    microsoft: Microsoft,
    apple: Apple,
    // diğer bileşenler
  };

  useEffect(() => {
    const handlePopState = () => {
      setPage(window.location.pathname.slice(1) || 'home');
    };
    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    }
  }, []);

  const navigate = (pageName) => {
    setPage(pageName);
    const url = `${pageName}`;
    window.history.pushState(null, '', url);
    window.dispatchEvent(new Event('popstate'));
  }

  const handleLogin = () => {
    navigate('home')
  }

  const PageComponent = componentMap[page] || NotFound;
  return (
    <>
      <ThemeProvider>
        <ThemeContext.Consumer>
          {({ theme }) => (
            <div className={`d-flex flex-column ${theme}`} style={{ minHeight: "100vh" }}>
              <nav>
                <CustomNavbar navigate={navigate} />
              </nav>
              <div className='flex-grow-1 '>
                <Container className='d-flex justify-content-center'>
                  <Row className='mt-4 justify-content-center'>
                    <Col sm='12' md='10' lg='12'>
                      <PageComponent navigate={navigate} onLogin={handleLogin} />
                    </Col>
                  </Row>

                </Container>
              </div>
              <Footer navigate={navigate} />
            </div>
          )}
        </ThemeContext.Consumer>
      </ThemeProvider>
    </>
  );
}

export default App;
