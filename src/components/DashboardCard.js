import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './DashboardCard.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from './Header';
function DashboardCard() {
    return (
        <div>
            <Header />
            <div className='text-center bg-primary my-3 p-2 text-white h4' style={{ width: '120px', borderRadius: '5px', margin: 'auto' }}>PLAYERS</div>
            <NavLink to='/dashboard' className='navLinks'><Button variant="primary" className='mt-3 addPlayers butn1'>
                Go Back
            </Button>
            </NavLink>

            {/* Card: */}
            <Row>
                <Col md={3}>
                    <Card style={{ width: '18rem', cursor: 'pointer' }} className='m-4 zoom'>
                        <Card.Img variant="top" src="https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/6.png" />
                        <Card.Body style={{ borderTop: '1px solid #DDDDDD' }}>
                            <Card.Text style={{ fontSize: '14px', fontWeight: '500' }}>Player ID: 1</Card.Text>
                            <Card.Text style={{ fontSize: '14px', fontWeight: '500' }}>Player Name: Rohit</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                {/* <Col md={3}>
                    <Card style={{ width: '18rem', cursor: 'pointer' }} className='m-4 zoom'>
                        <Card.Img variant="top" src="https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/6.png" />
                        <Card.Body style={{ borderTop: '1px solid #DDDDDD' }}>
                            <Card.Text style={{ fontSize: '14px', fontWeight: '500' }}>Player ID: 1</Card.Text>
                            <Card.Text style={{ fontSize: '14px', fontWeight: '500' }}>Player Name: Rohit</Card.Text>
                        </Card.Body>
                    </Card>
                </Col> */}
            </Row>

            {/*  */}

        </div>
    )
}

export default DashboardCard