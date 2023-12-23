import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useFormik } from 'formik';
import { useRef } from 'react';
// validation:
const validate = values => {
    const errors = {};

    if (!values.staffCity) {
        errors.staffCity = "*Required";
    }
    else if (!/^[a-zA-Z]{3,15}$/.test(values.staffCity)) {
        errors.staffCity = "City name should be between 3 to 15 characters long or only letters allowed";
    }

    if (!values.staffClub) {
        errors.staffClub = "*Required";
    }
    else if (!/^[a-zA-Z]{3,15}$/.test(values.staffClub)) {
        errors.staffClub = "Club name should be between 3 to 15 characters maximum or only letters allowed";
    }

    if (!values.staffDivision) {
        errors.staffDivision = "*Required";
    }
    else if (!/^[a-zA-Z1-9]{0,10}$/.test(values.staffDivision)) {
        errors.staffDivision = "Division name should be between 10 characters maximum";
    }
    return errors;
}
function StaffPreviousRepresentation() {
     // reset form start: 
     const city1 = useRef("");
     const club1 = useRef("");
     const division1 = useRef("");
 
 
     // for npm custom component dont use useRef instead use useState i.e for phone component
     function handleReset() {
         city1.current.value = "";
         club1.current.value = "";
         division1.current.value = "";
         formik.resetForm();
     }
    const formik = useFormik({
        initialValues: {
            staffCity: '',
            staffClub: '',
            staffDivision: '',

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
                <Accordion.Item eventKey="6">
                    <Accordion.Header><i className="bi bi-info-circle-fill me-1"></i><span style={{ fontWeight: '700' }}>REPRESENTATION INFORMATION</span></Accordion.Header>
                    <Accordion.Body>
                        <Container >
                            <Form style={{ paddingRight: '60px' }}  onSubmit={formik.handleSubmit}>
                                <Row>
                                    <Col xs={12} lg={4} className='col'>
                                        <Form.Floating className="mb-2">
                                            <Form.Control
                                                id="city"
                                                type="text"
                                                placeholder="city"
                                                name="staffCity"
                                                ref={city1}
                                                value={formik.values.staffCity} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                                />
                                                {
                                                    formik.touched.staffCity && formik.errors.staffCity ? <span className='span'>{formik.errors.staffCity}</span> : null
                                                }
                                            <label htmlFor="staffCity" className='text-muted'>State/City/District*</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col xs={12} lg={4} className='col'>
                                        <Form.Floating className="mb-2">
                                            <Form.Control
                                                id="club"
                                                type="text"
                                                placeholder="club"
                                                name="staffClub"
                                                ref={club1}
                                                value={formik.values.staffClub} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                                />
                                                {
                                                    formik.touched.staffClub && formik.errors.staffClub ? <span className='span'>{formik.errors.staffClub}</span> : null
                                                }
                                            <label htmlFor="staffClub" className='text-muted'>Club/Franchise*</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col xs={12} lg={4} className='col'>
                                        <Form.Floating className="mb-2">
                                            <Form.Control
                                                id="division"
                                                type="text"
                                                placeholder="division"
                                                ref={division1}
                                                name="staffDivision"
                                                value={formik.values.staffDivision} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                                />
                                                {
                                                    formik.touched.staffDivision && formik.errors.staffDivision ? <span className='span'>{formik.errors.staffDivision}</span> : null
                                                }
                                            <label htmlFor="staffDivision" className='text-muted'>Past Team Name*</label>
                                        </Form.Floating>
                                    </Col>
                                </Row>

                                <Col lg={12} className='my-4 col'>
                                    <Button variant="primary" className='me-1 mb-2 mx-1 ' style={{width:"130px"}}>PREVIOUS</Button>
                                    <Button type="submit" variant="success" className='me-1 mb-2 mx-1 ' style={{width:"130px"}}>Save and Next</Button>
                                    <Button variant="warning" className='text-white mb-2 mx-1 ' style={{width:"130px"}} onClick={() => handleReset()}>CLEAR</Button>
                                </Col>
                            </Form>
                        </Container>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
    </div>
  )
}

export default StaffPreviousRepresentation