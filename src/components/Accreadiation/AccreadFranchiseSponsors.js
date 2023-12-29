import React, { useRef, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import Phone from './../offcanvas-body/Phone';

function AccreadFranchiseSponsors() {
    const [mobValue,setMobValue]=useState(false);
    //reset:
    const name1=useRef("");
    const desig1=useRef("");
    const email1=useRef("");
    const dutypass1=useRef("");

    function handleReset(){
        name1.current.value="";
        desig1.current.value="";
        email1.current.value="";
        dutypass1.current.value="";
        setMobValue(true);
    }
    return (
        <div>
            <Card className='bg-light p-4'>
                <Row className='fw-bold' style={{ fontSize: '16px' }}>
                    <Col xs={12} md={{ span: 4 }} className='py-3 c1'>
                        <Form.Floating className="mb-2">
                            <Form.Control
                                id="name"
                                type="text"
                                placeholder="name"
                                ref={name1}
                            />
                            <label htmlFor="name" className='text-muted'>Name</label>
                        </Form.Floating>
                    </Col>
                    <Col xs={12} md={4} className='py-3 c1'>
                        <FloatingLabel className='mb-2 c1'
                            controlId="designation"
                            label="Designation"
                        >
                            <Form.Select aria-label="designation" ref={desig1}>
                                <option>Select Type</option>
                                <option value="year1">Player</option>
                            </Form.Select>
                        </FloatingLabel>
                    </Col>
                    <Col xs={12} md={4} className='py-3 c1'>
                        <Phone isClear={mobValue}/>
                    </Col>
                    <Col xs={12} md={4} className='py-3 c1'>
                        <Form.Floating className="mb-2">
                            <Form.Control
                                id="email"
                                type="email"
                                placeholder="email"
                                ref={email1}
                            />
                            <label htmlFor="email" className='text-muted'>Email ID</label>
                        </Form.Floating>
                    </Col>
                    <Col xs={12} md={4} className='py-3 c1'>
                        <FloatingLabel className='mb-2 c1'
                            controlId="dutypass"
                            label="Duty Pass*"
                        >
                            <Form.Select aria-label="dutypass" ref={dutypass1}>
                                <option>Select Type</option>
                                <option value="year1">Yes</option>
                                <option value="year2">No</option>
                            </Form.Select>
                        </FloatingLabel>
                    </Col>
                   
                </Row>
                <Row>
                    <Col className='text-end btns'>
                        <Button variant="dark" className='mx-2'>BACK</Button>
                        <Button variant="warning" className='mx-2' style={{ color: 'white' }} onClick={() => handleReset()}>CLEAR</Button>
                        <Button variant="success" className='mx-2'>SAVE</Button>
                        <Button variant="primary">NEXT</Button>
                    </Col>

                </Row>
            </Card>
        </div>
    )
}

export default AccreadFranchiseSponsors