import React from 'react';
import Card from 'react-bootstrap/Card';
import './ThingsToDoViewCard.css';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import Header from '../Header';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ExploreOptions from '../ModalComponents/ExploreOptions';
function ThingsToDoViewCard() {
    return (
        <div>
            <Header />
            <div className='headerBtn my-3'>
                <h5>THINGS TODO DETAILS-LIST</h5>
            </div>
            <div>
                <Row>
                    <Col lg={3} className='mb-2'>
                        <NavLink to='/thingstodo' className='navLinks'><Button variant="primary" style={{ fontWeight: 'bold' }}>Go Back</Button></NavLink>
                    </Col>
                    <Col lg={{span:3,offset:6}} ><ExploreOptions /></Col>
                </Row>
            </div>

            <Card className='my-3 m-auto' style={{ width: '90%', border: '2px outset #2E83D8'}}>
                <Card.Body>
                    {/* Card:1 */}
                    <Card style={{ width: '100%' }} className='todoSubCard'>
                        <Card.Header className='todoHeader'>REPRESENTATIVES FORM</Card.Header>
                        <Card.Body>
                            <Row>
                                <Col md={4} className='todoCol'><div className='divCard'>ID: </div></Col>
                                <Col md={4} className='todoCol'><div className='divCard'>Representatives Name: </div></Col>
                                <Col md={4} className='todoCol'><div className='divCard'>Team Name: </div></Col>
                                <Col md={4} className='todoCol'><div className='divCard'>Team Tshirt: </div></Col>
                                <Col md={4} className='todoCol'><div className='divCard'>Team Uniform: </div></Col>
                            </Row>
                        </Card.Body>
                    </Card>
                    {/* Card:2 */}
                    <Card style={{ width: '100%' }} className='mt-3 todoSubCard'>
                        <Card.Header className='todoHeader'>BRANDING FORM</Card.Header>
                        <Card.Body>
                            <Row>
                                <Col md={4} className='todoCol'><div className='divCard'>ID: </div></Col>
                                <Col md={4} className='todoCol'><div className='divCard'>Team Logo: </div></Col>
                                <Col md={4} className='todoCol'><div className='divCard'>Team Flage: </div></Col>
                                <Col md={4} className='todoCol'><div className='divCard'>Standees: </div></Col>
                                <Col md={4} className='todoCol'><div className='divCard'>Side Flages: </div></Col>
                                <Col md={4} className='todoCol'><div className='divCard'>Bus Item: </div></Col>
                                <Col md={4} className='todoCol'><div className='divCard'>Bus Booking: </div></Col>
                            </Row>
                        </Card.Body>
                    </Card>
                    {/* Card:3 */}
                    <Card style={{ width: '100%' }} className='mt-3 todoSubCard'>
                        <Card.Header className='todoHeader'>COACH THERAPIST FORM</Card.Header>
                        <Card.Body>
                            <Row>
                                <Col md={4} className='todoCol'><div className='divCard'>ID: </div></Col>
                                <Col md={4} className='todoCol'><div className='divCard'>Item Name: </div></Col>
                                <Col md={4} className='todoCol'><div className='divCard'>Designation: </div></Col>
                            </Row>
                        </Card.Body>
                    </Card>
                    {/* Card:4 */}
                    <Card style={{ width: '100%' }} className='mt-3 todoSubCard' >
                        <Card.Header className='todoHeader'>FIXTURES FORM</Card.Header>
                        <Card.Body>
                            <Row>
                                <Col md={4} className='todoCol'><div className='divCard'>ID: </div></Col>
                                <Col md={4} className='todoCol'><div className='divCard'>Ground Name: </div></Col>
                                <Col md={4} className='todoCol'><div className='divCard'>Team A: </div></Col>
                                <Col md={4} className='todoCol'><div className='divCard'>Team B: </div></Col>
                                <Col md={4} className='todoCol'><div className='divCard'>Date: </div></Col>
                            </Row>
                        </Card.Body>
                    </Card>
                    {/* Card:5 */}
                    <Card style={{ width: '100%' }} className='mt-3 todoSubCard' >
                        <Card.Header className='todoHeader'>HOTEL ACCOMODATION FORM</Card.Header>
                        <Card.Body>
                            <Row>
                                <Col md={4} className='todoCol'><div className='divCard'>ID: </div></Col>
                                <Col md={4} className='todoCol'><div className='divCard'>Item Name: </div></Col>
                                <Col md={4} className='todoCol'><div className='divCard'>No Of Rooms: </div></Col>
                                <Col md={4} className='todoCol'><div className='divCard'>No Of People: </div></Col>
                                <Col md={4} className='todoCol'><div className='divCard'>Check In: </div></Col>
                                <Col md={4} className='todoCol'><div className='divCard'>Check Out: </div></Col>
                                <Col md={4} className='todoCol'><div className='divCard'>City Name: </div></Col>
                                <Col md={4} className='todoCol'><div className='divCard'>Days Stayed: </div></Col>
                            </Row>
                        </Card.Body>
                    </Card>
                    {/* Card:6 */}
                    <Card style={{ width: '100%' }} className='mt-3 todoSubCard'>
                        <Card.Header className='todoHeader'>MATCH EQUIPMENT FORM</Card.Header>
                        <Card.Body>
                            <Row>
                                <Col md={4} className='todoCol'><div className='divCard'>ID: </div></Col>
                                <Col md={4} className='todoCol'><div className='divCard'>Name: </div></Col>
                                <Col md={4} className='todoCol'><div className='divCard'>Items: </div></Col>
                                <Col md={4} className='todoCol'><div className='divCard'>Items Type: </div></Col>
                            </Row>
                        </Card.Body>
                    </Card>
                    {/* Card:7 */}
                    <Card style={{ width: '100%' }} className='mt-3 todoSubCard'>
                        <Card.Header className='todoHeader'>TRANSPORT FORM</Card.Header>
                        <Card.Body>
                            <Row>
                                <Col md={4} className='todoCol'><div className='divCard'>ID: </div></Col>
                                <Col md={4} className='todoCol'><div className='divCard'>Bus Type: </div></Col>
                                <Col md={4} className='todoCol'><div className='divCard'>Date Of Journey: </div></Col>
                                <Col md={4} className='todoCol'><div className='divCard'>Going To: </div></Col>
                                <Col md={4} className='todoCol'><div className='divCard'>Leaving From: </div></Col>
                                <Col md={4} className='todoCol'><div className='divCard'>Seats Booked: </div></Col>
                                <Col md={4} className='todoCol'><div className='divCard'>Return Date: </div></Col>
                                <Col md={4} className='todoCol'><div className='divCard'>Seat No: </div></Col>
                                <Col md={4} className='todoCol'><div className='divCard'>Time Slot: </div></Col>
                                <Col md={4} className='todoCol'><div className='divCard'>Item Type: </div></Col>
                                <Col md={4} className='todoCol'><div className='divCard'>Travel Type: </div></Col>
                            </Row>
                        </Card.Body>
                    </Card>

                </Card.Body>
            </Card>
        </div>
    )
}

export default ThingsToDoViewCard