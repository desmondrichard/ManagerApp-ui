import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Image1 from 'react-bootstrap/Image'

function Register() {
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
                                    <Form.Control type="text" placeholder="Enter Your Full Name" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGroupEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGroupPassword">
                                    <Form.Label>D.O.B</Form.Label>
                                    <Form.Control type="date" placeholder="Enter Date of Birth" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGroupPassword">
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control type="number" placeholder="Enter Phone Number" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGroupPassword">
                                    <Form.Label>Password </Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGroupConfirmPassword">
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control type="password" placeholder="Confirm Password" />
                                </Form.Group>
                                <div className="d-grid gap-2 my-2">
                                    <Button variant="outline-success" className='mt-2' size="lg">
                                        Sign Up
                                    </Button>
                                </div>

                            </Form>
                            <div className='text-center py-2'>
                                <p>Not Have an Account ? <span className='text-danger signUp'>Login</span></p>
                            </div>
                        </Container>
                    </Col>
                </Row>
            </Card>
        </div>
    )
}

export default Register