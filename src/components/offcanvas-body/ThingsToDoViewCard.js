import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import './ThingsToDoViewCard.css';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import Header from '../Header';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ExploreOptions from '../ModalComponents/ExploreOptions';
//
import { useParams } from 'react-router-dom';
import axios from 'axios';
function ThingsToDoViewCard() {
    //ID
    // const param = useParams();
    // console.log(param);
    // const [showData, setShowData] = useState({});
    // const postId = 1; // replace this with the actual post id

    // useEffect(() => {
    //     axios.get(`http://192.168.1.192/ManagerApi/register/AllDataThingsToDo/${postId}`)
    //         .then(response => {
    //             setShowData(response.data);
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         });
    // }, [postId]);


    // Data Binding:
    const [showData, setShowData] = useState(null);
    useEffect(() => {
        fetch('http://192.168.1.192/ManagerApi/register/AllDataThingsToDo')
            .then((data) => data.json())
            .then((data) => {
                // console.log("data",data);
                setShowData(data);  // showData=data;
            })
    }, [])


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
                    <Col lg={{ span: 3, offset: 6 }} ><ExploreOptions /></Col>
                </Row>
            </div>

            <Card className='my-3 m-auto' style={{ width: '90%', border: '2px outset #2E83D8' }}>
                <Card.Body>
                    {/* Card:1 */}
                    <Card style={{ width: '100%' }} className='todoSubCard'>
                        <Card.Header className='todoHeader'>REPRESENTATIVES FORM</Card.Header>
                        <Card.Body>
                            {
                                showData ?
                                    (
                                        <Row>
                                            {
                                                showData.map((showData, i) => {
                                                    return (
                                                        <React.Fragment key={i}>
                                                            <Col md={4} className='todoCol'><div className='divCard'>ID: <span style={{ fontWeight: '400' }}>{showData.alldataThingsId ? showData.alldataThingsId : 'N/A'}</span></div></Col>
                                                            <Col md={4} className='todoCol'><div className='divCard' style={{ whiteSpace: 'nowrap' }}>Representatives Name: <span style={{ fontWeight: '400' }}>{showData.representatives ? showData.representatives : 'N/A'}</span></div></Col>
                                                            <Col md={4} className='todoCol'><div className='divCard'>Team Name: <span style={{ fontWeight: '400' }}>{showData.representatives ? showData.representatives : 'N/A'}</span></div></Col>
                                                            <Col md={4} className='todoCol'><div className='divCard'>Team Tshirt: <span style={{ fontWeight: '400' }}>{showData.teamTshirt ? showData.teamTshirt : 'N/A'}</span></div></Col>
                                                            <Col md={4} className='todoCol'><div className='divCard'>Team Uniform: <span style={{ fontWeight: '400' }}>{showData.teamUniform ? showData.teamUniform : 'N/A'}</span></div></Col>
                                                        </React.Fragment>
                                                    )
                                                })
                                            }
                                        </Row>
                                    ) : (<h4>Loading...</h4>)
                            }

                        </Card.Body>
                    </Card>
                    {/* Card:2 */}
                    <Card style={{ width: '100%' }} className='mt-3 todoSubCard'>
                        <Card.Header className='todoHeader'>BRANDING FORM</Card.Header>
                        <Card.Body>
                            {
                                showData ?
                                    (<Row>
                                        {
                                            showData.map((showData, i) => {
                                                return (
                                                    <React.Fragment key={i}>
                                                        <Col md={4} className='todoCol'><div className='divCard'>ID: {showData.alldataThingsId}</div></Col>
                                                        <Col md={4} className='todoCol'><div className='divCard'>Team Logo: {showData.teamLogo}</div></Col>
                                                        <Col md={4} className='todoCol'><div className='divCard'>Team Flage: {showData.teamFlage}</div></Col>
                                                        <Col md={4} className='todoCol'><div className='divCard'>Standees: {showData.standees}</div></Col>
                                                        <Col md={4} className='todoCol'><div className='divCard'>Side Flages: {showData.sideFlages}</div></Col>
                                                        <Col md={4} className='todoCol'><div className='divCard'>Bus Item: </div></Col>
                                                        <Col md={4} className='todoCol'><div className='divCard'>Bus Booking: {showData.busBooking}</div></Col>
                                                    </React.Fragment>
                                                )

                                            })
                                        }

                                    </Row>) : (<h4>Loading...</h4>)
                            }

                        </Card.Body>
                    </Card>
                    {/* Card:3 */}
                    <Card style={{ width: '100%' }} className='mt-3 todoSubCard'>
                        <Card.Header className='todoHeader'>COACH THERAPIST FORM</Card.Header>
                        <Card.Body>
                            {
                                showData ?
                                    (
                                        <Row>
                                            {
                                                showData.map((showData, i) => {
                                                    return (
                                                        <React.Fragment key={i}>
                                                            <Col md={4} className='todoCol'><div className='divCard'>ID: {showData.alldataThingsId}</div></Col>
                                                            <Col md={4} className='todoCol'><div className='divCard'>Item Name: {showData.name}</div></Col>
                                                            <Col md={4} className='todoCol'><div className='divCard'>Designation: {showData.designation}</div></Col>
                                                        </React.Fragment>
                                                    )
                                                })
                                            }

                                        </Row>
                                    ) : (<h4>Loading...</h4>)
                            }

                        </Card.Body>
                    </Card>
                    {/* Card:4 */}
                    <Card style={{ width: '100%' }} className='mt-3 todoSubCard' >
                        <Card.Header className='todoHeader'>FIXTURES FORM</Card.Header>
                        <Card.Body>
                            {
                                showData ?
                                    (
                                        <Row>
                                            {
                                                showData.map((showData, i) => {
                                                    return (
                                                        <React.Fragment key={i}>
                                                            <Col md={4} className='todoCol'><div className='divCard'>ID: {showData.alldataThingsId}</div></Col>
                                                            <Col md={4} className='todoCol'><div className='divCard'>Ground Name: {showData.groundName}</div></Col>
                                                            <Col md={4} className='todoCol'><div className='divCard'>Team A: {showData.teamA}</div></Col>
                                                            <Col md={4} className='todoCol'><div className='divCard'>Team B: {showData.teamB}</div></Col>
                                                            <Col md={4} className='todoCol'><div className='divCard'>Date: </div></Col>
                                                        </React.Fragment>
                                                    )
                                                })
                                            }

                                        </Row>
                                    ) : (<h4>Loading...</h4>)
                            }

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