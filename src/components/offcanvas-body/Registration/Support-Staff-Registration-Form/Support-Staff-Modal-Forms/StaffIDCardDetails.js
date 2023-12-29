import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { useFormik } from 'formik';
import { useRef } from 'react';
// import StaffAddressDynamicFocus from './StaffAddressDynamicFocus';
import DynamicTextFields from '../DynamicTextFields';
// validation:
const validate = values => {
    const errors = {};

    if (!values.staffAadharNo) {
        errors.staffAadharNo = "*Required";
    }
    else if (!/^[0-9]{4}[ -]?[0-9]{4}[ -]?[0-9]{4}$/.test(values.staffAadharNo)) {
        errors.staffAadharNo = "Enter Valid Aadhar Number"
    }

    if (!values.staffPanNo) {
        errors.staffPanNo = "*Required";
    }
    else if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(values.staffPanNo)) {
        errors.staffPanNo = "Enter Valid Pan Card Number"
    }

    if (!values.staffPassNo) {
        errors.staffPassNo = "*Required";
    }
    else if (!/^[a-zA-Z0-9]{10}$/.test(values.staffPassNo)) {
        errors.staffPassNo = "Enter Valid Passport Number"
    }

    if (!values.staffPassExp) {
        errors.staffPassExp = "*Required";
    }

    if (!/^[0-9]{6,14}$/.test(values.staffBirth)) {
        errors.staffBirth = "Enter Valid Birth Certificate Number"
    }

    if (!/^4[0-9]{12}(?:[0-9]{3})?$/.test(values.staffVisaNo)) {
        errors.staffVisaNo = "Enter Valid Visa Number"
    }


    if (!values.staffAddress) {
        errors.staffAddress = "*Required";
    }
    return errors;
}
function StaffIDCardDetails() {
    //reset address:
    const [clearValue, setClearValue] = useState(false);

    //reset country:
    const [selectCountry, setSelectCountry] = useState(false);
    const [selectState, setSelectState] = useState(false);
    const [selectCity, setSelectCity] = useState(false);

    // reset form start: 
    const aadharno1 = useRef("");
    const panno1 = useRef("");
    const passno1 = useRef("");
    const passexp1 = useRef("");
    const birth1 = useRef("");
    const visaYes = useRef(false);
    const visaNo = useRef(false);
    const visaValid = useRef("");
    const visaNumber = useRef("");
    // const addressRef0 = useRef("");

    // for npm custom component dont use useRef instead use useState i.e for phone component
    function handleReset() {
        aadharno1.current.value = "";
        panno1.current.value = "";
        passno1.current.value = "";
        passexp1.current.value = "";
        birth1.current.value = "";
        visaYes.current.checked = false;
        visaNo.current.checked = false;
        visaNumber.current.value = "";
        visaValid.current.value = "";
        //reset address:
        setClearValue(true);
        // addressRef0.current.value = "";
        // reset country:
        setSelectCountry(true);
        setSelectState(true);
        setSelectCity(true);
        formik.resetForm();
    }


    const formik = useFormik({
        initialValues: {
            staffAadharNo: '',
            staffPanNo: '',
            staffPassNo: '',
            staffPassExp: '',
            staffBirth: '',
            staffVisaNo: '',
            staffAddress: '',
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
                <Accordion.Item eventKey="2">
                    <Accordion.Header><i className="bi bi-info-circle-fill me-1"></i><span style={{ fontWeight: '700' }}>ID CARD DETAILS</span></Accordion.Header>
                    <Accordion.Body>
                        <Container >
                            <Form style={{ paddingRight: '60px' }} onSubmit={formik.handleSubmit}>
                                <Row>
                                    <Col xs={12} lg={3} className='col'>
                                        <Form.Floating className="mb-2">
                                            <Form.Control
                                                id="staffAadharNo"
                                                type="text"
                                                placeholder="aadharno"
                                                name="staffAadharNo"
                                                ref={aadharno1}
                                                value={formik.values.staffAadharNo} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                            />
                                            {
                                                formik.touched.staffAadharNo && formik.errors.staffAadharNo ? <span className='span'>{formik.errors.staffAadharNo}</span> : null
                                            }
                                            <label htmlFor="staffAadharNo" className='text-muted'>AADHAR NO*</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col xs={12} lg={3} className='col'>
                                        <Form.Floating className="mb-2">
                                            <Form.Control
                                                id="staffPanNo"
                                                type="text"
                                                placeholder="panno"
                                                name="staffPanNo"
                                                ref={panno1}
                                                value={formik.values.staffPanNo} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                            />
                                            {
                                                formik.touched.staffPanNo && formik.errors.staffPanNo ? <span className='span'>{formik.errors.staffPanNo}</span> : null
                                            }
                                            <label htmlFor="staffPanNo" className='text-muted'>PANCARD NO*</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col xs={12} lg={3} className='col'>
                                        <Form.Floating className="mb-2">
                                            <Form.Control
                                                id="staffPassNo"
                                                type="text"
                                                placeholder="passno"
                                                name="staffPassNo"
                                                ref={passno1}
                                                value={formik.values.staffPassNo} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                            />
                                            {
                                                formik.touched.staffPassNo && formik.errors.staffPassNo ? <span className='span'>{formik.errors.staffPassNo}</span> : null
                                            }
                                            <label htmlFor="staffPassNo" className='text-muted'>PASSPORT NO*</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col xs={12} lg={3} className='col'>
                                        <Form.Floating className="mb-2">
                                            <Form.Control
                                                id="staffPassExp"
                                                type="date"
                                                placeholder="passexp"
                                                name="staffPassExp"
                                                ref={passexp1}
                                                value={formik.values.staffPassExp} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                            />
                                            {
                                                formik.touched.staffPassExp && formik.errors.staffPassExp ? <span className='span'>{formik.errors.staffPassExp}</span> : null
                                            }
                                            <label htmlFor="staffPassExp" className='text-muted'>PASSPORT EXP DATE*</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col xs={12} lg={3} className='col'>
                                        <Form.Floating className="mb-2">
                                            <Form.Control
                                                id="staffBirth"
                                                type="text"
                                                placeholder="birth"
                                                name="staffBirth"
                                                ref={birth1}
                                                value={formik.values.staffBirth} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                            />
                                            {
                                                formik.touched.staffBirth && formik.errors.staffBirth ? <span className='span'>{formik.errors.staffBirth}</span> : null
                                            }
                                            <label htmlFor="staffBirth" className='text-muted' style={{ fontSize: '13px' }}>BIRTH CERTIFICATE NO*</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col xs={12} lg={3} className='col'>
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
                                                    ref={visaYes}
                                                />
                                                <Form.Check
                                                    inline
                                                    label="No"
                                                    name="visa"
                                                    type={type}
                                                    id={`inline-${type}-notprovided`}
                                                    defaultChecked={true}
                                                    ref={visaNo}
                                                />
                                            </div>
                                        ))}
                                    </Col>
                                    <Col xs={12} lg={3} className='col'>
                                        <Form.Floating className="mb-2">
                                            <Form.Control
                                                id="staffVisaNo"
                                                type="text"
                                                placeholder="visano"
                                                name="staffVisaNo"
                                                ref={visaNumber}
                                                value={formik.values.staffVisaNo} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                            />
                                            {
                                                formik.touched.staffVisaNo && formik.errors.staffVisaNo ? <span className='span'>{formik.errors.staffVisaNo}</span> : null
                                            }
                                            <label htmlFor="staffVisaNo" className='text-muted' style={{ fontSize: '13px' }}>VISA NO</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col xs={12} lg={3} className='col'>
                                        <Form.Floating className="mb-2">
                                            <Form.Control
                                                id="staffVisaValidity"
                                                type="date"
                                                placeholder="visavalidity"
                                                name="staffVisaValidity"
                                                ref={visaValid}
                                            />
                                            <label htmlFor="staffVisaValidity" className='text-muted' style={{ fontSize: '13px' }}>VISA VALIDITY</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col xs={12}>
                                        <DynamicTextFields isClearAddress0={clearValue} isClearAddress1={clearValue} isClearAddress2={clearValue} isClearAddress3={clearValue} isClearCountry={selectCountry} isClearState={selectState} isClearCity={selectCity} />
                                    </Col>

                                    <Col xs={12} lg={12} className='my-4 col'>
                                        <Button variant="primary" className='me-1 mb-2 mx-1 ' style={{ width: "130px" }}>PREVIOUS</Button>
                                        <Button type="submit" variant="success" className='me-1 mb-2 mx-1 ' style={{ width: "130px" }}>Save and Next</Button>
                                        <Button variant="warning" className='text-white mb-2 mx-1 ' style={{ width: "130px" }} onClick={() => handleReset()}>CLEAR</Button>
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