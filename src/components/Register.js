import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Image1 from 'react-bootstrap/Image'
import { Link,NavLink } from 'react-router-dom';
function Register() {
    const [email, setEmail] = useState();
    const [pwd, setPwd] = useState();
    const [name, setName] = useState();
    const [dob, setDob] = useState();
    const [number, setNumber] = useState();

    function handleSignup() {
        alert('signup success')
    }
    return (
        <div>
            <Card className='mx-3'>
                <Row>
                    <Col lg={7}>
                        <Image1 src={require('../assets/mountain2.jpg')} fluid className='borderRadius' style={{ height: '100%' }}></Image1>
                    </Col>
                    <Col lg={5}>
                        <Container className='pt-3'>
                            <Form>
                                <legend className='text-center'>Register</legend>
                                <hr style={{ border: '2px solid #198754' }} />
                                <Form.Group className="mb-3" controlId="formGroupName">
                                    <Form.Label>Full Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Your Full Name" onChange={(e) => setName(e.target.value)} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGroupEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGroupPassword">
                                    <Form.Label>D.O.B</Form.Label>
                                    <Form.Control type="date" placeholder="Enter Date of Birth" onChange={(e) => setDob(e.target.value)} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGroupPassword">
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control type="number" placeholder="Enter Phone Number" onChange={(e) => setNumber(e.target.value)} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGroupPassword">
                                    <Form.Label>Password </Form.Label>
                                    <Form.Control type="password" placeholder="Password" onChange={(e) => setPwd(e.target.value)} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGroupConfirmPassword">
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control type="password" placeholder="Confirm Password" />
                                </Form.Group>
                                <div className="d-grid gap-2 my-2">
                                    <NavLink to='/'> <Button variant="outline-success" className='mt-2' size="lg" onClick={() => handleSignup()}>
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