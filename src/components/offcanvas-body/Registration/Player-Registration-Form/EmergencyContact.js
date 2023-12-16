import React from 'react';
import './EmergencyContact.css';
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Phone from '../../Phone';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
function EmergencyContact() {
    return (
        <div>
            <Accordion>
                <Accordion.Item eventKey="8">
                    <Accordion.Header><i className="bi bi-info-circle-fill me-1"></i><span style={{ fontWeight: '700' }}>EMERGENCY CONTACT INFORMATION</span></Accordion.Header>
                    <Accordion.Body>
                        <Container >
                            <Form style={{ paddingRight: '60px' }}>
                                <Row>
                                    <Col xs={12} lg={4} className='col'>
                                        <Form.Floating className="mb-2">
                                            <Form.Control
                                                id="emgcontactperson"
                                                type="text"
                                                placeholder="emgcontactperson"
                                            />
                                            <label htmlFor="emgcontactperson" className='text-muted fontSize'>Emg.Contact*</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col xs={12} lg={4} className='col'>
                                        <FloatingLabel className='mb-2'
                                            controlId="emgcontactrel"
                                            label="Emg.Contact Relation*"
                                        >
                                            <Form.Select aria-label="Emg.Contact Relation*">
                                                <option>Select Type</option>
                                                <option value="batsman">PARENTS</option>
                                                <option value="bowler">GUARDIAN</option>
                                                <option value="allrounder">SPONSORS</option>
                                                <option value="wicketkeeper">FRIENDS</option>
                                                <option value="wicketkeeper">FAMILY MEMBER</option>
                                                <option value="wicketkeeper">NEIGHBOUR</option>
                                            </Form.Select>
                                        </FloatingLabel>
                                    </Col>
                                    <Col xs={12} lg={4} className='col '>
                                        <Phone />
                                    </Col>
                                </Row>

                                <Col lg={12} className='my-4 col'>
                                    <Button variant="primary" className='me-1 mb-2 mx-1 ' style={{ width: "130px" }}>PREVIOUS</Button>
                                    <Button variant="success" className='me-1 mb-2 mx-1 ' style={{ width: "130px" }}>Save and Next</Button>
                                    <Button variant="warning" className='text-white mb-2 mx-1 ' style={{ width: "130px" }}>CLEAR</Button>
                                </Col>
                            </Form>
                        </Container>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}

export default EmergencyContact