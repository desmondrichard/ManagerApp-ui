import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './DashboardCard.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from './Header';
import { ListGroup } from 'react-bootstrap';
function DashboardCard() {
    //Data Binding:
    const [showData, setShowData] = useState(null);
    useEffect(() => {
        fetch('http://192.168.1.192/ManagerApi/GetAllDataAndImages')
            .then((data) => data.json())
            .then((data) => {
                // console.log("data",data);
                // console.log("Success in getting players data", data);
                setShowData(data);  // showData=data;
            })
    }, [])
    return (
        <div>
            <Header />
            <div className='text-center bg-primary my-3 p-2 text-white h4' style={{ width: '120px', borderRadius: '5px', margin: 'auto' }}>PLAYERS</div>
            <NavLink to='/dashboard' className='navLinks'><Button variant="primary" className='mt-3 addPlayers butn1'>
                Go Back
            </Button>
            </NavLink>

            {/* Card: */}
            <div className='my-3 p-2'>
                <Card style={{ width: '100%' }}>
                    <Card.Header style={{ fontWeight: 'bold', fontSize: '18px' }}>PLAYERS</Card.Header>
                    <ListGroup variant='flush'>
                        {
                            showData ?
                                (<Row>
                                    {
                                        showData.map((showData, i) => {
                                            return (
                                                <Col md={3} key={i}>
                                                    <Card style={{ width: '18rem', cursor: 'pointer' }} className='m-4 zoom'>
                                                        <Card.Img variant="top" src={showData.playerImage ? `data:image;base64,${showData.playerImage.imageData}` : require('./../assets/dummy_profile_img.png')} alt="img" style={{ width: 'auto', height: '300px' }} />
                                                        <Card.Body style={{ borderTop: '1px solid #DDDDDD' }}>
                                                            <Card.Text style={{ fontSize: '14px', fontWeight: '500' }}>Player ID: {showData.playerData.alldataplayerId ? showData.playerData.alldataplayerId : 'N/A'}</Card.Text>
                                                            <Card.Text style={{ fontSize: '14px', fontWeight: '500' }}>Player Name: {showData.playerData.playerName ? showData.playerData.playerName : 'N/A'}</Card.Text>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                            )
                                        })
                                    }


                                </Row>) : (<h4>Loading...</h4>)
                        }
                    </ListGroup>

                </Card>
            </div>



            {/*  */}

        </div>
    )
}

export default DashboardCard