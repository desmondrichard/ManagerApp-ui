import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Image0 from 'react-bootstrap/Image'
import { Link, NavLink } from 'react-router-dom';
import Image1 from 'react-bootstrap/Image';
import Image2 from 'react-bootstrap/Image';
import InputGroup from 'react-bootstrap/InputGroup';
import './Register.css';
function Register() {
    const [email, setEmail] = useState();
    const [pwd, setPwd] = useState();
    const [name, setName] = useState();
    const [dob, setDob] = useState();
    const [number, setNumber] = useState();

    // password show/hide:
    const [visible, setVisible] = useState(true);
    const [visible1, setVisible1] = useState(true);


    function handleSignup() {
        // e.preventDefault();
        alert('signup success');
    }
    return (
        <div className='pt-1 '>
            <Card className='mx-3 cardBg'>
                <Row>
                    <Col lg={7}>
                        <Image0 src={require('../assets/mountain2.jpg')} fluid className='borderRadius' style={{ height: '100%' }}></Image0>
                    </Col>
                    <Col lg={5}>
                        <Container className='pt-1'>
                            <Form>
                                <legend className='text-center ' style={{ fontWeight: 'bold' }}>Register</legend>
                                <hr style={{ border: '2px solid #198754' }} />
                                <Form.Group className="mb-1" controlId="Name">
                                    <Form.Label>Full Name</Form.Label>
                                    <Form.Control size="sm" className='shadow-none' type="text" placeholder="Enter Your Full Name" onChange={(e) => setName(e.target.value)} />
                                </Form.Group>
                                <Form.Group className="mb-1" controlId="formGroupEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control size="sm" className='shadow-none' type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="DOB">
                                    <Form.Label>D.O.B</Form.Label>
                                    <Form.Control size="sm" className='shadow-none' type="date" placeholder="Enter Date of Birth" onChange={(e) => setDob(e.target.value)} />
                                </Form.Group>

                                <Form.Group className="mb-1" controlId="Phone">
                                    <Form.Label>Phone Number</Form.Label>
                                    <InputGroup className='number'>
                                        <InputGroup.Text id="inputGroup-sizing-sm">+91
                                            <Form.Control size="sm" className='paddingStyle shadow-none' type="text" placeholder="Enter Phone Number" onChange={(e) => setNumber(e.target.value)} />
                                        </InputGroup.Text>
                                    </InputGroup>

                                </Form.Group>
                                <Form.Group className="mb-1" controlId="Password">
                                    <Form.Label>Password </Form.Label>
                                    <div className='pwd' >
                                        <Form.Control size="sm" className='shadow-none' type={
                                            visible ? "password" : "text"}
                                            placeholder="Password" onChange={(e) => setPwd(e.target.value)} />
                                        <div className='p-2 pwd-toggle' onClick={() => setVisible(!visible)}>
                                            {visible ? <Image1 className='img1' style={{ height: '18px' }} src={require('../assets/eye-close.png')}></Image1> :
                                                <Image2 className='img1' style={{ height: '14px' }} src={require('../assets/eye-open.png')}></Image2>}
                                        </div>
                                    </div>
                                </Form.Group>
                                <Form.Group className="mb-1" controlId="ConfirmPassword">
                                    <Form.Label>Confirm Password</Form.Label>
                                    <div className='pwd' >
                                        <Form.Control size="sm" className='shadow-none' type={
                                            visible1 ? "password" : "text"} placeholder="Confirm Password" />
                                        <div className='p-2 pwd-toggle' onClick={() => setVisible1(!visible1)}>
                                            {visible1 ? <Image1 className='img1' style={{ height: '18px' }} src={require('../assets/eye-close.png')}></Image1>
                                                : <Image2 className='img1' style={{ height: '14px' }} src={require('../assets/eye-open.png')}></Image2>
                                            }
                                        </div>
                                    </div>
                                </Form.Group>
                                <div className="d-grid gap-2 my-2">
                                    <NavLink to='/'> <Button variant="outline-success" className='mt-2 w-100' size="sm" onClick={() => handleSignup()}>
                                        Sign Up
                                    </Button>
                                    </NavLink>
                                </div>
                            </Form>
                            <div className='text-center py-2'>
                                <p>Already Have an Account ? <span className='text-danger signUp'><Link to='/'>Login</Link> </span></p>
                            </div>
                        </Container>
                    </Col>
                </Row>
            </Card>
        </div>
    )
}

export default Register