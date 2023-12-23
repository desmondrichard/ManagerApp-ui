import React from 'react';
import './StaffKittingDetails.css';
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useFormik } from 'formik';
import { useRef } from 'react';

const validate = values => {
    const errors = {};

    if (!values.staffJerseyName) {
        errors.staffJerseyName = "*Required";
    }
    else if (!/^[a-zA-Z]{2,10}$/.test(values.staffJerseyName)) {
        errors.staffJerseyName = "Jersey Name should be between 2 to 10 characters long or only letters allowed";
    }

    if (!values.staffJerseyNo) {
        errors.staffJerseyNo = "*Required";
    }
    else if (!/^[0-9]{0,3}$/.test(values.staffJerseyNo)) {
        errors.staffJerseyNo = "enter valid Digits";
    }


    if (!values.staffJerseysize) {
        errors.staffJerseysize = "*Required";
    }

    if (!/^[a-zA-Z]{0,1}$/.test(values.staffInitialprint)) {
        errors.staffInitialprint = "only one letter allowed";
    }
    
    
    if (!/^[0-9]{0,2}$/.test(values.staffTrowserlength)) {
        errors.staffTrowserlength = "only two Digits allowed";
    }
    

    if (!/^[0-9]{0,3}$/.test(values.staffFamilyjerseyno)) {
        errors.staffFamilyjerseyno = "upto 3 Digits allowed";
    }


    return errors
}

function StaffKittingDetails() {

     // reset form start: 
     const JerseyName1=useRef("");
     const JerseyNo1=useRef("");
     const jerseysize1=useRef("");
     const trowsersize1=useRef("");
     const trowserlength1=useRef("");
     const shortssize1=useRef("");
     const tracksuit1=useRef("");
     const travelpolo1=useRef("");
     const familyjerseyno1=useRef("");
    
 
 
     // for npm custom component dont use useRef instead use useState i.e for phone component
     function handleReset() {
        JerseyName1.current.value = "";
        JerseyNo1.current.value = "";
        jerseysize1.current.value = "none";
        trowsersize1.current.value = "none";
        trowserlength1.current.value = "";
        shortssize1.current.value = "none";
        tracksuit1.current.value = "none";
        travelpolo1.current.value = "none";
        familyjerseyno1.current.value = "";
         formik.resetForm();
     }
     // reset form end: 

    const formik = useFormik({
        initialValues: {
            staffJerseyName: '',
            staffJerseyNo: '',
            staffJerseysize: '',
            staffInitialprint:'',
            staffTrowserlength: '',
            staffFamilyjerseyno:''
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
                <Accordion.Item eventKey="1">
                    <Accordion.Header><i className="bi bi-info-circle-fill me-1"></i><span style={{ fontWeight: '700' }}>KITTING DETAILS</span></Accordion.Header>
                    <Accordion.Body>
                        <Container >
                            <Form style={{ paddingRight: '60px' }} onSubmit={formik.handleSubmit}>
                                <Row>
                                    <Col xs={12} lg={3} className='col'>
                                        <Form.Floating className="mb-2">
                                            <Form.Control
                                                id="staffJerseyName"
                                                type="text"
                                                placeholder="JerseyName"
                                                name='staffJerseyName'
                                                ref={JerseyName1}
                                                value={formik.values.staffJerseyName} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                            />
                                            {
                                                formik.touched.staffJerseyName && formik.errors.staffJerseyName ? <span className='span'>{formik.errors.staffJerseyName}</span> : null
                                            }
                                            <label htmlFor="staffJerseyName" className='text-muted'>Name on Jersey*</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col xs={12} lg={3} className='col'>
                                        <Form.Floating className="mb-2">
                                            <Form.Control
                                                id="staffJerseyNo"
                                                type="text"
                                                placeholder="JerseyNo"
                                                name="staffJerseyNo"
                                                ref={JerseyNo1}
                                                value={formik.values.staffJerseyNo} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                            />
                                            {
                                                formik.touched.staffJerseyNo && formik.errors.staffJerseyNo ? <span className='span'>{formik.errors.staffJerseyNo}</span> : null
                                            }
                                            <label htmlFor="staffJerseyNo" className='text-muted'>Jersey No*</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col xs={12} lg={3} className='col'>
                                        <FloatingLabel className='mb-2'
                                            controlId="staffJerseysize"
                                            label="Jersey Size"
                                            name="staffJerseysize"
                                            value={formik.values.staffJerseysize} onBlur={formik.handleBlur} onChange={formik.handleChange}

                                        >
                                            <Form.Select aria-label="staffJerseysize" ref={jerseysize1}>
                                                <option value="none">Select Type</option>
                                                <option value="S">S</option>
                                                <option value="M">M</option>
                                                <option value="L">L</option>
                                                <option value="XL">XL</option>
                                                <option value="XXL">XXL</option>
                                                <option value="3XL">3XL</option>
                                                <option value="4XL">4XL</option>
                                            </Form.Select>
                                            {
                                                formik.touched.staffJerseysize && formik.errors.staffJerseysize ? <span className='span'>{formik.errors.staffJerseysize}</span> : null
                                            }
                                        </FloatingLabel>
                                    </Col>
                                    <Col xs={12} lg={3} className='col'>
                                        <Form.Floating className="mb-2">
                                            <Form.Control
                                                id="staffInitialprint"
                                                type="text"
                                                placeholder="initialprint"
                                                name="staffInitialprint"
                                                
                                                value={formik.values.staffInitialprint} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                            />
                                            {
                                                formik.touched.staffInitialprint && formik.errors.staffInitialprint ? <span className='span'>{formik.errors.staffInitialprint}</span> : null
                                            }
                                            <label htmlFor="staffInitialprint" className='text-muted'>Initial Print</label>
                                        </Form.Floating>
                                    </Col>


                                    <Col xs={12} lg={3} className='col'>
                                        <FloatingLabel className='mb-2'
                                            controlId="staffIrowsersize"
                                            label="Trowser Size"
                                            name="staffIrowsersize"
                                        >
                                            
                                            <Form.Select aria-label="staffIrowsersize" ref={trowsersize1}>
                                                <option value="none">Select Type</option>
                                                <option value="S">S</option>
                                                <option value="M">M</option>
                                                <option value="L">L</option>
                                                <option value="XL">XL</option>
                                                <option value="XXL">XXL</option>
                                                <option value="3XL">3XL</option>
                                                <option value="4XL">4XL</option>
                                            </Form.Select>
                                            
                                        </FloatingLabel>
                                    </Col>
                                    <Col xs={12} lg={3} className='col'>
                                        <Form.Floating className="mb-2">
                                            <Form.Control
                                                id="staffTrowserlength"
                                                type="text"
                                                placeholder="Trowser Length"
                                                name="staffTrowserlength"
                                                ref={trowserlength1}
                                                value={formik.values.staffTrowserlength} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                            />
                                            {
                                                formik.touched.staffTrowserlength && formik.errors.staffTrowserlength ? <span className='span'>{formik.errors.staffTrowserlength}</span> : null
                                            }
                                            <label htmlFor="staffTrowserlength" className='text-muted'>Trowser Length</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col xs={12} lg={3} className='col'>
                                        <FloatingLabel className='mb-2'
                                            controlId="staffShortssize"
                                            label="Shorts Size"
                                            name="staffShortssize"
                                        >
                                            <Form.Select aria-label="staffShortssize" ref={shortssize1}>
                                                <option value="none">Select Type</option>
                                                <option value="S">S</option>
                                                <option value="M">M</option>
                                                <option value="L">L</option>
                                                <option value="XL">XL</option>
                                                <option value="XXL">XXL</option>
                                                <option value="3XL">3XL</option>
                                                <option value="4XL">4XL</option>
                                            </Form.Select>
                                         
                                        </FloatingLabel>
                                    </Col>
                                    <Col xs={12} lg={3} className='col'>
                                        <FloatingLabel className='mb-2'
                                            controlId="staffTracksuit"
                                            label="Track suit"
                                            name="staffTracksuit"
                                        >

                                            <Form.Select aria-label="staffTracksuit" ref={tracksuit1}>
                                                <option value="none">Select Type</option>
                                                <option value="S">S</option>
                                                <option value="M">M</option>
                                                <option value="L">L</option>
                                                <option value="XL">XL</option>
                                                <option value="XXL">XXL</option>
                                                <option value="3XL">3XL</option>
                                                <option value="4XL">4XL</option>
                                            </Form.Select>
                                           
                                        </FloatingLabel>
                                    </Col>
                                    <Col xs={12} lg={3} className='col'>
                                        <FloatingLabel className='mb-2'
                                            controlId="staffTravelpolo"
                                            label="Travel Polo"
                                            name="staffTravelpolo"
                                            >
                                           
                                            <Form.Select aria-label="staffTravelpolo" ref={travelpolo1}>
                                                <option value="none">Select Type</option>
                                                <option value="S">S</option>
                                                <option value="M">M</option>
                                                <option value="L">L</option>
                                                <option value="XL">XL</option>
                                                <option value="XXL">XXL</option>
                                                <option value="3XL">3XL</option>
                                                <option value="4XL">4XL</option>
                                            </Form.Select>
                                          
                                        </FloatingLabel>
                                    </Col>
                                    <Col xs={12} lg={3} className='col'>
                                        <Form.Floating className="mb-2">
                                            <Form.Control
                                                id="staffFamilyjerseyno"
                                                type="text"
                                                placeholder="familyjerseyno"
                                                name="staffFamilyjerseyno"
                                                ref={familyjerseyno1}
                                                value={formik.values.staffFamilyjerseyno} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                                />
                                                {
                                                    formik.touched.staffFamilyjerseyno && formik.errors.staffFamilyjerseyno ? <span className='span'>{formik.errors.staffFamilyjerseyno}</span> : null
                                                }
                                            <label htmlFor="staffFamilyjerseyno" className='text-muted'>Family Jersey No</label>
                                        </Form.Floating>
                                    </Col>
                                </Row>

                                <Col lg={12} className='my-4 col'>
                                    <Button variant="primary" className='me-1 mb-2 mx-1 ' style={{ width: "130px" }}>PREVIOUS</Button>
                                    <Button type="submit" variant="success" className='me-1 mb-2 mx-1 ' style={{ width: "130px" }}>Save and Next</Button>
                                    <Button variant="warning" className='text-white mb-2 ' style={{ width: "130px" }} onClick={() => handleReset()}>CLEAR</Button>
                                </Col>
                            </Form>
                        </Container>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}

export default StaffKittingDetails