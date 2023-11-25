import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Login.css';
import Image from 'react-bootstrap/Image'
function Login() {
    return (
        <div>
            <Card className='mx-3'>
                <Row>
                    <Col lg={7}>
                        <Image src={require ('../assets/mountain1.jpeg')}fluid className='borderRadius'></Image>
                    </Col>
                    <Col lg={5}>
                        <Container className='pt-4'>                      
                            <Form>
                                <legend className='text-center'>Login</legend>
                                <hr style={{border:'2px solid #198754'}}/>
                                <Form.Group className="mb-4" controlId="formGroupUsername">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="text" placeholder="Enter username" />
                                </Form.Group>
                                <Form.Group className="mb-4" controlId="formGroupPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <div className="d-grid gap-2 my-2">
                                    <Button variant="outline-success" className='mt-2' size="lg">
                                        Login
                                    </Button>
                                </div>
                            </Form>
                            <div className='text-center py-2'>
                                <p>Not Registered ? <span className='text-danger signUp'>Sign Up</span></p>
                            </div>
                        </Container>

                    </Col>
                </Row>
            </Card>
        </div>
    )
}

export default Login