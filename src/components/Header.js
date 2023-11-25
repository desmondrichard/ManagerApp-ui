import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './Header.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Menubar from './offcanvas-body/Menubar';
import Badge from 'react-bootstrap/Badge';

function Header() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <Card className='bg'>
                <Card.Body>
                    <Row>
                        <Col xs={7} sm={9} lg={10} >
                            <Row>
                                <Col xs={2}>
                                    <>
                                        <Button onClick={handleShow} className='btn1'>
                                            <i className="bi bi-list text-white" style={{ fontSize: '19px', fontWeight: '600' }}></i>
                                        </Button>

                                        <Offcanvas show={show} onHide={handleClose}>
                                            <Offcanvas.Header closeButton>
                                                <Offcanvas.Title></Offcanvas.Title>
                                            </Offcanvas.Header>
                                            <Offcanvas.Body className='bg1'>
                                                <Menubar />
                                            </Offcanvas.Body>
                                        </Offcanvas>
                                    </>
                                </Col>
                                <Col xs={10} className='text-white text-center text font'>MANAGER APPLICATION</Col>
                            </Row>
                        </Col>
                        <Col xs={5} sm={3} lg={2} className='text-end'>
                            <Button variant="primary " className='btn1'>
                                <i className="bi bi-bell-fill " style={{ fontSize: '20px' }}></i><sup><Badge bg="danger">9</Badge></sup>
                                <span className="visually-hidden">unread messages</span>
                            </Button>
                            <Button variant="text1" className='btn1'><i className="bi bi-box-arrow-right" style={{ fontSize: '22px' }}></i></Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Header