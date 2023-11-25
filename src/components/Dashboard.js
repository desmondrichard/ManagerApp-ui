import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Dashboard.css';
import Calendar from './Calendar';
import Login from './Login';
import Register from './Register';
function Dashboard() {
    return (
        <div>
            <Container fluid className="my-3 py-3">
                <Row>
                    <Col lg={8} >
                        <Card className='bg-light ps-3 pb-4 boxShadow'>
                            <Row>
                                <Col lg={4} sm={6}>
                                    <Card.Body style={{ maxWidth: '240px', borderRadius: '5px', height: '140px' }} className='mt-3 text-center pt-4 boxShadow bg-light'>
                                        <Card.Title>PLAYERS</Card.Title>
                                        <Card.Text>
                                            <h2>21</h2>
                                        </Card.Text>
                                    </Card.Body>
                                </Col>
                                <Col lg={4} sm={6}>
                                    <Card.Body style={{ maxWidth: '240px', borderRadius: '5px', height: '140px' }} className='mt-3 text-center pt-4 boxShadow bg-light'>
                                        <Card.Title>MANAGEMENT</Card.Title>
                                        <Card.Text>
                                            <h2>5</h2>
                                        </Card.Text>
                                    </Card.Body>
                                </Col>
                                <Col lg={4} sm={6}>
                                    <Card.Body style={{ maxWidth: '240px', borderRadius: '5px', height: '140px' }} className='mt-3 text-center pt-4 boxShadow bg-light'>
                                        <Card.Title>SPONSORS</Card.Title>
                                        <Card.Text>
                                            <h2>5</h2>
                                        </Card.Text>
                                    </Card.Body>
                                </Col>
                                <Col lg={4} sm={6}>
                                    <Card.Body style={{ maxWidth: '240px', borderRadius: '5px', height: '140px' }} className='mt-3 text-center pt-4 boxShadow bg-light'>
                                        <Card.Title>SUPPORT STAFFS</Card.Title>
                                        <Card.Text>
                                            <h2>15</h2>
                                        </Card.Text>
                                    </Card.Body>
                                </Col>
                                <Col lg={4} sm={6}>
                                    <Card.Body style={{ maxWidth: '240px', borderRadius: '5px', height: '140px' }} className=' mt-3 text-center pt-4 boxShadow bg-light'>
                                        <Card.Title>PARTNERS</Card.Title>
                                        <Card.Text>
                                            <h2>5</h2>
                                        </Card.Text>
                                    </Card.Body>
                                </Col>
                                <Col lg={4} sm={6} >
                                    <Card.Body style={{ maxWidth: '240px', borderRadius: '5px', height: '140px' }} className=' mt-3 text-center pt-4 boxShadow bg-light'>
                                        <Card.Title>ORGANIZERS</Card.Title>
                                        <Card.Text>
                                            <h2>10</h2>
                                        </Card.Text>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                    </Col>

                    <Col lg={4}>
                        <Card className='boxShadow'>
                            <Calendar />
                        </Card>
                    </Col>
                </Row>

                <Card className='my-2 px-3 py-3 boxShadow'>
                    <Row>
                        <Col lg={4}>
                            <Card border="dark" style={{ height: '200px' }} className='mb-2'>
                                <Card.Header className='bg-dark'><h4 className='text-center text-white'>DONE</h4></Card.Header>
                                <Card.Body>
                                    <Card.Title><mark>DUTY PASS</mark></Card.Title>
                                    <Card.Text>
                                        Duty Pass issued to All Players and Support Staffs
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4}>
                            <Card border='dark' style={{ height: '200px' }} className='mb-2'>
                                <Card.Header className='bg-dark'><h4 className='text-center text-white'>IN PROGRESS</h4></Card.Header>
                                <Card.Body>
                                    <Card.Title style={{ whiteSpace: 'nowrap' }}><mark>ACCESSORIES DISTRIBUTION</mark></Card.Title>
                                    <Card.Text>
                                        5 Players not Issued Accessories
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4}>
                            <Card border='dark' style={{ height: '200px' }} className='mb-2'>
                                <Card.Header className='bg-dark'><h4 className='text-center text-white'>ON HOLD</h4></Card.Header>
                                <Card.Body>
                                    <Card.Title><mark>TAG</mark></Card.Title>
                                    <Card.Text>
                                        This is a sample on hold card for future use
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Card>
            </Container>
            <div>
                <Login />
                <Register />
            </div>
        </div>
    )
}

export default Dashboard