import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Login.css';
import Image from 'react-bootstrap/Image';
import { NavLink, Link } from 'react-router-dom';
import Image1 from 'react-bootstrap/Image';
import Image2 from 'react-bootstrap/Image';


function Login() {
    const [email, setEmail] = useState();
    const [pwd, setPwd] = useState();

    // password show/hide:
    const [visible, setVisible] = useState(false);

    function handleLogin() {
        alert("You have logged in successfully");

    }
    return (
        <div>
            <Card className='mx-3'>
                <Row>
                    <Col lg={7}>
                        <Image style={{ height: '100%' }} src={require('../assets/mountain1.jpeg')} fluid className='borderRadius'></Image>
                    </Col>
                    <Col lg={5}>
                        <Container className='pt-4'>
                            <Form>
                                <legend className='text-center'>Login</legend>
                                <hr style={{ border: '2px solid #198754' }} />
                                <Form.Group className="mb-4" controlId="formGroupUsername">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="text" placeholder="Enter username" onChange={(e) => setEmail(e.target.value)} />
                                </Form.Group>
                                <Form.Group className="mb-4" controlId="formGroupPassword">
                                    <Form.Label>Password</Form.Label>
                                    <div className='pwd d-flex justigy-between items-center' >
                                        <Form.Control className='input' id='pwd' type={
                                            visible ? "password" : "text"}
                                            placeholder="Password" onChange={(e) => setPwd(e.target.value)} />
                                        <div className='p-2' onClick={()=>setVisible(!visible)}>
                                            {visible ? <Image1 className='img1' src={require('../assets/eye-close.png')}></Image1>
                                                : <Image2 className='img1' src={require('../assets/eye-open.png')}></Image2>}
                                        </div>
                                    </div>
                                </Form.Group>
                                <div className="d-grid gap-2 my-2">
                                    <NavLink to='/dashboard'> <Button variant="outline-success" className='mt-2' size="lg" onClick={() => handleLogin()}>
                                        Login
                                    </Button></NavLink>
                                </div>
                            </Form>
                            <div className='text-center py-2'>
                                <p>Not Registered ? <span className='text-danger signUp'><Link to='/signup'>Sign Up</Link>  </span></p>
                            </div>
                        </Container>

                    </Col>
                </Row>
            </Card>
        </div>
    )
}

export default Login