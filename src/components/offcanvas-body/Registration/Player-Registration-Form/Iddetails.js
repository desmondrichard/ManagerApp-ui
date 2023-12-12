import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import './KittingDetailsForm.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import './Iddetails.css';
function Iddetails() {
    return (
        <div>
            <Accordion>
                <Accordion.Item eventKey="3">
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
                                            <label htmlFor="aadharno" className='text-muted'>AADHAR NUMBER*</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col xs={12} lg={4} className='col'>
                                        <Form.Floating className="mb-2">
                                            <Form.Control
                                                id="panno"
                                                type="text"
                                                placeholder="panno"
                                            />
                                            <label htmlFor="panno" className='text-muted'>PANCARD NUMBER*</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col xs={12} lg={4} className='col'>
                                        <Form.Floating className="mb-2">
                                            <Form.Control
                                                id="passno"
                                                type="text"
                                                placeholder="passno"
                                            />
                                            <label htmlFor="passno" className='text-muted'>PASSPORT NUMBER*</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col xs={12} lg={4} className='col'>
                                        <Form.Floating className="mb-2">
                                            <Form.Control
                                                id="passexp"
                                                type="date"
                                                placeholder="passexp"
                                            />
                                            <label htmlFor="passexp" className='text-muted'>PASSPORT EXPIRY DATE*</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col xs={12} lg={4} className='col'>
                                        <Form.Floating className="mb-2">
                                            <Form.Control
                                                id="birth"
                                                type="text"
                                                placeholder="birth"
                                            />
                                            <label htmlFor="birth" className='text-muted' style={{fontSize:'13px'}}>BIRTH CERTIFICATE NUMBER*</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col xs={12} lg={4} className='col'>
                                        <label className='text-muted me-2' htmlFor="battingpads">DO YOU HAVE VISA</label>
                                        {['radio'].map((type) => (
                                            <div key={`inline-${type}`} >
                                                <Form.Check style={{
                                                    padding: '10px', marginLeft: '20px'
                                                }}
                                                    inline
                                                    label="Yes"
                                                    name="group1"
                                                    type={type}
                                                    id={`inline-${type}-provided`}
                                                />
                                                <Form.Check style={{ marginLeft: '20px' }}
                                                    inline
                                                    label="No"
                                                    name="group1"
                                                    type={type}
                                                    id={`inline-${type}-notprovided`}
                                                />
                                            </div>
                                        ))}
                                    </Col>
                                    <Col xs={12} lg={3} className='col'>
                                        <Form.Floating className="mb-2">
                                            <Form.Control
                                                id="address"
                                                type="text"
                                                placeholder="address"
                                            />
                                            <label htmlFor="address" className='text-muted'>ADDRESS*</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col xs={12} lg={3} className='col'>
                                        <Form.Floating className="mb-2">
                                            <Form.Control
                                                id="address1"
                                                type="text"
                                                placeholder="address1"
                                            />
                                            <label htmlFor="address1" className='text-muted'>ADDRESS LINE 1*</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col xs={12} lg={3} className='col'>
                                        <Form.Floating className="mb-2">
                                            <Form.Control
                                                id="address2"
                                                type="text"
                                                placeholder="address2"
                                            />
                                            <label htmlFor="address2" className='text-muted'>ADDRESS LINE 2</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col xs={12} lg={3} className='col'>
                                        <Form.Floating className="mb-2">
                                            <Form.Control
                                                id="address3"
                                                type="text"
                                                placeholder="address3"
                                            />
                                            <label htmlFor="address3" className='text-muted'>ADDRESS LINE 3</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col xs={12} lg={3} className='col'>
                                        <FloatingLabel className='mb-2'
                                            controlId="country"
                                            label="COUNTRY*"
                                        >
                                            <Form.Select aria-label="country">
                                                <option value="none">Select Country</option>
                                            </Form.Select>
                                        </FloatingLabel>
                                    </Col>
                                    <Col xs={12} lg={3} className='col'>
                                        <FloatingLabel className='mb-2'
                                            controlId="state"
                                            label="STATE*"
                                        >
                                            <Form.Select aria-label="state">
                                                <option value="none">Select State</option>
                                            </Form.Select>
                                        </FloatingLabel>
                                    </Col>
                                    <Col xs={12} lg={3} className='col'>
                                        <FloatingLabel className='mb-2'
                                            controlId="city"
                                            label="CITY*"
                                        >
                                            <Form.Select aria-label="city">
                                                <option value="none">Select State</option>
                                            </Form.Select>
                                        </FloatingLabel>
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

export default Iddetails