import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

function StaffIDCardDetails() {
  return (
    <div>
         <Accordion>
                <Accordion.Item eventKey="2">
                    <Accordion.Header><i className="bi bi-info-circle-fill me-1"></i><span style={{ fontWeight: '700' }}>ID CARD DETAILS</span></Accordion.Header>
                    <Accordion.Body>
                        <Container >
                            <Form style={{ paddingRight: '60px' }}>
                                <Row>
                                    <Col xs={12} lg={4} className='col'>
                                        <Form.Floating className="mb-2">
                                            <Form.Control
                                                id="aadharno"
                                                type="text"
                                                placeholder="aadharno"
                                            />
                                            <label htmlFor="aadharno" className='text-muted'>AADHAR NO*</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col xs={12} lg={4} className='col'>
                                        <Form.Floating className="mb-2">
                                            <Form.Control
                                                id="panno"
                                                type="text"
                                                placeholder="panno"
                                            />
                                            <label htmlFor="panno" className='text-muted'>PANCARD NO*</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col xs={12} lg={4} className='col'>
                                        <Form.Floating className="mb-2">
                                            <Form.Control
                                                id="passno"
                                                type="text"
                                                placeholder="passno"
                                            />
                                            <label htmlFor="passno" className='text-muted'>PASSPORT NO*</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col xs={12} lg={4} className='col'>
                                        <Form.Floating className="mb-2">
                                            <Form.Control
                                                id="passexp"
                                                type="date"
                                                placeholder="passexp"
                                            />
                                            <label htmlFor="passexp" className='text-muted'>PASSPORT EXP DATE*</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col xs={12} lg={4} className='col'>
                                        <Form.Floating className="mb-2">
                                            <Form.Control
                                                id="birth"
                                                type="text"
                                                placeholder="birth"
                                            />
                                            <label htmlFor="birth" className='text-muted' style={{fontSize:'13px'}}>BIRTH CERTIFICATE NO*</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col xs={12} lg={4} className='col'>
                                        <label className='text-muted' htmlFor="battingpads">DO YOU HAVE VISA</label>
                                        {['radio'].map((type) => (
                                            <div key={`inline-${type}`} >
                                                <Form.Check style={{
                                                 
                                                }}
                                                    inline
                                                    label="Yes"
                                                    name="visa"
                                                    type={type}
                                                    id={`inline-${type}-provided`}
                                                />
                                                <Form.Check 
                                                    inline
                                                    label="No"
                                                    name="visa"
                                                    type={type}
                                                    id={`inline-${type}-notprovided`}
                                                />
                                            </div>
                                        ))}
                                    </Col>
                                    <Col xs={12} lg={4} className='col'>
                                        <Form.Floating className="mb-2">
                                            <Form.Control
                                                id="visano"
                                                type="text"
                                                placeholder="visano"
                                            />
                                            <label htmlFor="visano" className='text-muted' style={{fontSize:'13px'}}>VISA NO</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col xs={12} lg={4} className='col'>
                                        <Form.Floating className="mb-2">
                                            <Form.Control
                                                id="visavalidity"
                                                type="date"
                                                placeholder="visavalidity"
                                            />
                                            <label htmlFor="visavalidity" className='text-muted' style={{fontSize:'13px'}}>VISA VALIDITY</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col xs={12} lg={4} className='col'>
                                        <Form.Floating className="mb-2">
                                            <Form.Control
                                                id="address"
                                                type="text"
                                                placeholder="address"
                                            />
                                            <label htmlFor="address" className='text-muted'>ADDRESS*</label>
                                        </Form.Floating>
                                    </Col>
                                   
                                    <Col xs={12} lg={12} className='my-4 col'>
                                        <Button variant="primary" className='me-1 mb-2 mx-1 ' style={{width:"130px"}}>PREVIOUS</Button>
                                        <Button variant="success" className='me-1 mb-2 mx-1 ' style={{width:"130px"}}>Save and Next</Button>
                                        <Button variant="warning" className='text-white mb-2 mx-1 ' style={{width:"130px"}}>CLEAR</Button>
                                    </Col>
                                </Row>

                            </Form>
                        </Container>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
    </div>
  )
}

export default StaffIDCardDetails