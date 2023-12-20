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
import { useFormik } from 'formik';
import { Country, State, City } from 'country-state-city';
import { useEffect, useState } from "react";
import Select from "react-select";

// validation:
const validate = values => {
    const errors = {};

    if (!values.aadharno) {
        errors.aadharno = "*Required";
    }
    else if (!/^[0-9]{4}[ -]?[0-9]{4}[ -]?[0-9]{4}$/.test(values.aadharno)) {
        errors.aadharno = "Enter Valid Aadhar Number"
    }

    if (!values.panno) {
        errors.panno = "*Required";
    }
    else if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(values.panno)) {
        errors.panno = "Enter Valid Pan Card Number"
    }

    if (!values.passno) {
        errors.passno = "*Required";
    }
    else if (!/^[a-zA-Z0-9]{10}$/.test(values.passno)) {
        errors.passno = "Enter Valid Passport Number"
    }

    if (!values.passexp) {
        errors.passexp = "*Required";
    }

    if (!values.birth) {
        errors.birth = "*Required.";
    }
    else if (!/^[0-9]{6,14}$/.test(values.birth)) {
        errors.birth = "Enter Valid Birth Certificate Number"
    }

    if (!values.address) {
        errors.address = "*Required";
    }


    return errors;
}
function Iddetails() {
    const formik = useFormik({
        initialValues: {
            aadharno: '',
            panno: '',
            passno: '',
            passexp: '',
            birth: '',
            address: '',
        },
        validate,
        onSubmit: values => {
            alert(`Hello! ,${values.fNamelNamemName}you have successfully signed up`);
            // navigate("/playerproficiencyinformation");
        }
    });
    // country-state-city:
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [selectedState, setSelectedState] = useState(null);
    const [selectedCity, setSelectedCity] = useState(null);
    useEffect(() => {
        console.log(selectedCountry);
        console.log(selectedCountry?.isoCode);
        console.log(State?.getStatesOfCountry(selectedCountry?.isoCode));
    }, [selectedCountry]);

    return (
        <div>
            <Accordion>
                <Accordion.Item eventKey="3">
                    <Accordion.Header><i className="bi bi-info-circle-fill me-1"></i><span style={{ fontWeight: '700' }}>ID CARD DETAILS</span></Accordion.Header>
                    <Accordion.Body>
                        <Container >
                            <Form style={{ paddingRight: '60px' }} onSubmit={formik.handleSubmit}>
                                <Row>
                                    <Col xs={12} lg={4} className='col'>
                                        <Form.Floating className="mb-2">
                                            <Form.Control
                                                id="aadharno"
                                                type="text"
                                                placeholder="aadharno"
                                                name="aadharno"
                                                value={formik.values.aadharno} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                            />
                                            {
                                                formik.touched.aadharno && formik.errors.aadharno ? <span className='span'>{formik.errors.aadharno}</span> : null
                                            }
                                            <label htmlFor="aadharno" className='text-muted'>AADHAR NO*</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col xs={12} lg={4} className='col'>
                                        <Form.Floating className="mb-2">
                                            <Form.Control
                                                id="panno"
                                                type="text"
                                                placeholder="panno"
                                                name="panno"
                                                value={formik.values.panno} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                            />
                                            {
                                                formik.touched.panno && formik.errors.panno ? <span className='span'>{formik.errors.panno}</span> : null
                                            }
                                            <label htmlFor="panno" className='text-muted'>PANCARD NO*</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col xs={12} lg={4} className='col'>
                                        <Form.Floating className="mb-2">
                                            <Form.Control
                                                id="passno"
                                                type="text"
                                                placeholder="passno"
                                                name="passno"
                                                value={formik.values.passno} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                            />
                                            {
                                                formik.touched.passno && formik.errors.passno ? <span className='span'>{formik.errors.passno}</span> : null
                                            }
                                            <label htmlFor="passno" className='text-muted'>PASSPORT NO*</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col xs={12} lg={4} className='col'>
                                        <Form.Floating className="mb-2">
                                            <Form.Control
                                                id="passexp"
                                                type="date"
                                                placeholder="passexp"
                                                name="passexp"
                                                value={formik.values.passexp} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                            />
                                            {
                                                formik.touched.passexp && formik.errors.passexp ? <span className='span'>{formik.errors.passexp}</span> : null
                                            }
                                            <label htmlFor="passexp" className='text-muted'>PASSPORT EXP DATE*</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col xs={12} lg={4} className='col'>
                                        <Form.Floating className="mb-2">
                                            <Form.Control
                                                id="birth"
                                                type="text"
                                                placeholder="birth"
                                                name="birth"
                                                value={formik.values.birth} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                            />
                                            {
                                                formik.touched.birth && formik.errors.birth ? <span className='span'>{formik.errors.birth}</span> : null
                                            }
                                            <label htmlFor="birth" className='text-muted' style={{ fontSize: '13px' }}>BIRTH CERTIFICATE NO*</label>
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

                                    <Col xs={12} lg={3} className='col'>
                                        <Form.Floating className="mb-2">
                                            <Form.Control
                                                id="address"
                                                type="text"
                                                placeholder="address"
                                                name="address"
                                                value={formik.values.address} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                            />
                                            {
                                                formik.touched.address && formik.errors.address ? <span className='span'>{formik.errors.address}</span> : null
                                            }
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
                                        <label for="country">Country:</label>
                                        <Select style={{zIndex:100}}
                                            options={Country.getAllCountries()}
                                            getOptionLabel={(options) => {
                                                return options["name"];
                                            }}
                                            getOptionValue={(options) => {
                                                return options["name"];
                                            }}
                                            value={selectedCountry}
                                            onChange={(item) => {
                                                setSelectedCountry(item);
                                            }}
                                        
                                        />

                                    </Col>
                                    <Col xs={12} lg={3} className='col'>
                                        <label for="state">State:</label>
                                        <Select style={{zIndex:100}}
                                            options={State?.getStatesOfCountry(selectedCountry?.isoCode)}
                                            getOptionLabel={(options) => {
                                                return options["name"];
                                            }}
                                            getOptionValue={(options) => {
                                                return options["name"];
                                            }}
                                            value={selectedState}
                                            onChange={(item) => {
                                                setSelectedState(item);
                                            }}
                                        />

                                    </Col>
                                    <Col xs={12} lg={3} className='col'>
                                        <label for="city">City:</label>
                                        <Select style={{zIndex:100}}
                                            options={City.getCitiesOfState(
                                                selectedState?.countryCode,
                                                selectedState?.isoCode
                                            )}
                                            getOptionLabel={(options) => {
                                                return options["name"];
                                            }}
                                            getOptionValue={(options) => {
                                                return options["name"];
                                            }}
                                            value={selectedCity}
                                            onChange={(item) => {
                                                setSelectedCity(item);
                                            }}
                                        />

                                    </Col>
                                    <Col xs={12} lg={12} className='my-4 col'>
                                        <Button variant="primary" className='me-1 mb-2 mx-1 ' style={{ width: "130px" }}>PREVIOUS</Button>
                                        <Button variant="success" type="submit" value="submit" className='me-1 mb-2 mx-1 ' style={{ width: "130px" }}>Save and Next</Button>
                                        <Button variant="warning" className='text-white mb-2 mx-1 ' style={{ width: "130px" }}>CLEAR</Button>
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