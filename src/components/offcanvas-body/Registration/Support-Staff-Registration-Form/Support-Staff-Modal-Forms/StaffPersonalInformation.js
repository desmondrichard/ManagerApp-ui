import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import ImageUpload from '../../ImageUpload';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import './StaffPersonalInformation.css';
import Phone from '../../../Phone';

function StaffPersonalInformation() {
    return (
        <div>
            <Accordion defaultActiveKey="0" >
                <Accordion.Item eventKey="0">
                    <Accordion.Header><i className="bi bi-info-circle-fill me-1"></i><span style={{ fontWeight: '700' }}>PERSONAL INFORMATION</span></Accordion.Header>
                    <Accordion.Body>
                        <Container>
                            <Form >
                                <Row>
                                    <Col xs={12} lg={4} className='col'>
                                        <Form.Floating className="mb-2">
                                            <Form.Control
                                                id="fName"
                                                type="text"
                                                placeholder="first name"

                                            />
                                            <label htmlFor="fName" className='text-muted'>Staff First Name*</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col xs={12} lg={4} className='col'>
                                        <Form.Floating className="mb-2">
                                            <Form.Control
                                                id="mName"
                                                type="text"
                                                placeholder="second name"

                                            />
                                            <label htmlFor="mName" className='text-muted'>Staff Middle Name</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col xs={12} lg={4} className='col'>
                                        <Form.Floating className="mb-2">
                                            <Form.Control
                                                id="lName"
                                                type="text"
                                                placeholder="second name"

                                            />
                                            <label htmlFor="lName" className='text-muted'>Staff Last Name*</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col xs={12} lg={4} className='col'>
                                        <FloatingLabel className='mb-2'
                                            controlId="desig"
                                            label="Designation*"
                                        >
                                            <Form.Select aria-label="desig">
                                                <option value="none">Select Type</option>
                                                <option value="management">Management</option>                                            
                                            </Form.Select>
                                        </FloatingLabel>
                                    </Col>
                                    <Col xs={12} lg={4} className='col'>
                                        <FloatingLabel className='mb-2'
                                            controlId="spec"
                                            label="Specialization*"
                                        >
                                            <Form.Select aria-label="spec">
                                                <option value="none">Select Type</option>
                                                <option value="management">Management</option>                                            
                                            </Form.Select>
                                        </FloatingLabel>
                                    </Col>
                                    <Col xs={12} lg={4} className='col'>
                                        <Form.Floating className="mb-2">
                                            <Form.Control
                                                id="initials"
                                                type="text"
                                                placeholder="initials"

                                            />
                                            <label htmlFor="initials" className='text-muted'>Initials</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col xs={12} lg={4} className='col'>
                                        <Form.Floating className="mb-2">
                                            <Form.Control
                                                id="dName"
                                                type="text"
                                                placeholder="display name"

                                            />
                                            <label htmlFor="dName" className='text-muted'>Display Name*</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col xs={12} lg={4} className='col'>
                                        <Form.Floating className="mb-2">
                                            <Form.Control
                                                id="fatherName"
                                                type="text"
                                                placeholder="father name"

                                            />
                                            <label htmlFor="fatherName" className='text-muted'>Father's Name*</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col xs={12} lg={4} className='col'>
                                        <Form.Floating className="mb-2">
                                            <Form.Control
                                                id="motherName"
                                                type="text"
                                                placeholder="mother name"

                                            />
                                            <label htmlFor="motherName" className='text-muted'>Mother's Name</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col xs={12} lg={4} className='col'>
                                        <Form.Floating className="mb-2">
                                            <Form.Control
                                                id="dob1"
                                                type="date"
                                                placeholder="dob"

                                            />
                                            <label htmlFor="dob1" className='text-muted'>Date of Birth*</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col xs={12} lg={4} className='col'>
                                        <FloatingLabel className='mb-2'
                                            controlId="bloodGroup"
                                            label="BloodGroup*"

                                        >
                                            <Form.Select aria-label="bloodGroup">
                                                <option value="none">Select Type</option>
                                                <option value="O+">O+</option>
                                                <option value="O-">O-</option>
                                                <option value="A+">A+</option>
                                                <option value="A-">A-</option>
                                                <option value="B+">B+</option>
                                                <option value="B-">B-</option>
                                                <option value="AB+">AB+</option>
                                                <option value="AB-">AB-</option>
                                            </Form.Select>
                                        </FloatingLabel>
                                    </Col>
                                    <Col xs={12} lg={4} className='col'>
                                      <Phone />
                                    </Col>
                                    <Col xs={12} lg={4} className='col'>
                                        <Form.Floating className="mb-2">
                                            <Form.Control
                                                id="email"
                                                type="email"
                                                placeholder="email"

                                            />
                                            <label htmlFor="email" className='text-muted'>Email Address*</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col xs={12} lg={4} className='d-flex justify-content-center pt-3 col'>
                                        <label className='text-muted me-2' htmlFor="gender">Gender</label>
                                        {['radio'].map((type) => (
                                            <div key={`inline-${type}`} className="mb-3" style={{whiteSpace:'nowrap'}}>
                                                <Form.Check
                                                    inline
                                                    label="Male"
                                                    name="gender"
                                                    type={type}
                                                    id={`inline-${type}-male`}
                                                />
                                                <Form.Check
                                                    inline
                                                    label="Female"
                                                    name="gender"
                                                    type={type}
                                                    id={`inline-${type}-female`}
                                                />
                                            </div>
                                        ))}
                                    </Col>
                                    <Col xs={5} lg={2} className='col'>
                                        <ImageUpload />
                                    </Col>
                                    <Col xs={{ span: 6, offset: 1 }} lg={{ span: 9, offset: 1 }} className='d-flex align-items-center col'>
                                        <Button variant="warning" style={{ color: "white", width: "130px" }}>CLEAR</Button>
                                        <Button variant="success" className='mx-3' style={{ whiteSpace: 'nowrap', width: '130px' }} >Save and Next</Button>
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

export default StaffPersonalInformation