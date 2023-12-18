import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Dashboard.css';
import Calendar from './Calendar';
import ImagePlayer from 'react-bootstrap/Image';
import ImageManager from 'react-bootstrap/Image';
import ImageSponsor from 'react-bootstrap/Image';
import ImageSupportStaff from 'react-bootstrap/Image';
import ImageSponsorNew from 'react-bootstrap/Image';
import ImageOrganizor from 'react-bootstrap/Image';


function Dashboard() {
    return (
        <div>
            <Container fluid className="my-3 py-3">
                <Row className='row1'>
                    <Col lg={8} >
                        {/* ps-2 */}
                        <Card className='bg-light pb-4 boxShadow'>
                            <Row>
                                <Col lg={4} sm={6} xs={12} className='col'>
                                    <Card.Body style={{ borderRadius: '5px', height: '140px', margin: 'auto' }} className='mt-3 pt-4 boxShadow bg-light wrapper'>
                                        <div className='image'>
                                            <ImagePlayer className='img' style={{ height: '100px', width: '140px' }} src={require('../assets/playernew1.png')}></ImagePlayer>
                                            <div className='content'>
                                                <Card.Title className='a'>PLAYERS</Card.Title>
                                                <Card.Text className='b'>
                                                    21
                                                </Card.Text>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Col>
                                <Col lg={4} sm={6} xs={12} className='col'>
                                    <Card.Body style={{ borderRadius: '5px', height: '140px', margin: 'auto' }} className='mt-3 text-center pt-4 boxShadow bg-light wrapper'>
                                        <div className='image'>
                                            <ImageManager className='img' style={{ height: '100px', width: '100px' }} src={require('../assets/managericon.jpg')}></ImageManager>
                                            <div className='content'>
                                                <Card.Title className='a'>MANAGEMENT</Card.Title>
                                                <Card.Text className='b'>
                                                    5
                                                </Card.Text>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Col>
                                <Col lg={4} sm={6} xs={12} className='col'>
                                    <Card.Body style={{ borderRadius: '5px', height: '140px', margin: 'auto' }} className='mt-3 text-center pt-4 boxShadow bg-light wrapper'>
                                        <div className='image'>
                                            <ImageSponsorNew className='img' style={{ height: '100px', width: '120px' }} src={require('../assets/sponsornewicon.png')}></ImageSponsorNew>
                                            <div className='content'>
                                                <Card.Title className='a'>SPONSORS</Card.Title>
                                                <Card.Text className='b'>
                                                   5
                                                </Card.Text>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Col>
                                <Col lg={4} sm={6} xs={12} className='col'>
                                    <Card.Body style={{ borderRadius: '5px', height: '140px', margin: 'auto' }} className='mt-3 text-center pt-4 boxShadow bg-light wrapper'>
                                        <div className='image'>
                                            <ImageSupportStaff className='img' style={{ height: '100px', width: '150px' }} src={require('../assets/supportstaffsicon.png')}></ImageSupportStaff>
                                            <div className='content'>
                                                <Card.Title className='a'>SUPPORT STAFFS</Card.Title>
                                                <Card.Text className='b'>
                                                  15
                                                </Card.Text>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Col>
                                <Col lg={4} sm={6} xs={12} className='col'>
                                    <Card.Body style={{ borderRadius: '5px', height: '140px', margin: 'auto' }} className=' mt-3 text-center pt-4 boxShadow bg-light wrapper'>
                                        <div className='image'>
                                            <ImageSponsor className='img' style={{ height: '105px', width: '200px' }} src={require('../assets/sponsoricon.png')}></ImageSponsor>
                                            <div className='contentPartners'>
                                                <Card.Title className='a'>PARTNERS</Card.Title>
                                                <Card.Text className='b'>
                                                  5
                                                </Card.Text>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Col>
                                <Col lg={4} sm={6} xs={12} className='col'>
                                    <Card.Body style={{ borderRadius: '5px', height: '140px', margin: 'auto' }} className=' mt-3 text-center pt-4 boxShadow bg-light wrapper'>
                                        <div className='image'>
                                            <ImageOrganizor className='img' style={{ height: '105px', width: '120px' }} src={require('../assets/organizoricon.jpg')}></ImageOrganizor>
                                            <div className='content'>
                                                <Card.Title className='a'>ORGANIZERS</Card.Title>
                                                <Card.Text className='b'>
                                                    10
                                                </Card.Text>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                    </Col>

                    <Col lg={4} className='mt-4'>
                        <Card className='boxShadow'>
                            <Calendar />
                        </Card>
                    </Col>
                </Row>

                <Card className='my-2 px-3 py-3 boxShadow'>
                    <Row className='ms-3'>
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
                                    <Card.Title ><mark><span className='accessorriesFont text-dark'>ACCESSORIES DISTRIBUTION</span></mark></Card.Title>
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

        </div>
    )
}

export default Dashboard