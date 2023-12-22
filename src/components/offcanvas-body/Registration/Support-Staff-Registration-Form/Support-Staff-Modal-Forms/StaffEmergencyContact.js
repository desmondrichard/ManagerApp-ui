import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Phone from '../../../Phone';
import { useFormik } from 'formik';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

// validation:
const validate = values => {
    const errors = {};

    if (!values.staffEmgcontactperson) {
        errors.staffEmgcontactperson = "*Required";
    }
    else if (!/^[a-zA-Z]{3,15}$/.test(values.staffEmgcontactperson)) {
        errors.staffEmgcontactperson = "Name should be between 3 to 15 characters long or only letters allowed";
    }

    if (!values.StaffEmgContactRel) {
        errors.StaffEmgContactRel = "*Required";
    }
    else if (!/^[a-zA-Z]{3,15}$/.test(values.StaffEmgContactRel)) {
        errors.StaffEmgContactRel = "Name should be between 3 to 15 characters long or only letters allowed";
    }

    return errors;
}
function StaffEmergencyContact() {
    const formik = useFormik({
        initialValues: {
            staffEmgcontactperson: '',
            StaffEmgContactRel: '',
        },
        validate,
        onSubmit: values => {
            alert(`Hello! ,${values.fNamelNamemName}you have successfully signed up`);
            // navigate("/playerproficiencyinformation");
        }
    });
    return (
        <div>
            <Accordion>
                <Accordion.Item eventKey="7">
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
                                                name="staffEmgcontactperson"
                                                value={formik.values.staffEmgcontactperson} onBlur={formik.handleBlur} onChange={formik.handleChange}

                                            />
                                            {
                                                formik.touched.staffEmgcontactperson && formik.errors.staffEmgcontactperson ? <span className='span'>{formik.errors.staffEmgcontactperson}</span> : null
                                            }
                                            <label htmlFor="staffEmgcontactperson" className='text-muted fontSize'>Emg.Contact Name*</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col xs={12} lg={4} className='col'>
                                        <FloatingLabel className='mb-2'
                                            controlId="StaffEmgContactRel"
                                            label="Emg.Contact Relation*"
                                            name="StaffEmgContactRel"
                                            value={formik.values.StaffEmgContactRel} onBlur={formik.handleBlur} onChange={formik.handleChange}
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

                                        {
                                            formik.touched.StaffEmgContactRel && formik.errors.StaffEmgContactRel ? <span className='span'>{formik.errors.StaffEmgContactRel}</span> : null
                                        }

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

export default StaffEmergencyContact