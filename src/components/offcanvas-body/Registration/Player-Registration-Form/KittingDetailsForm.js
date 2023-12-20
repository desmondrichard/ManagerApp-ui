import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import './KittingDetailsForm.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useFormik } from 'formik';

const validate = values => {
    const errors = {};

    if (!values.JerseyName) {
        errors.JerseyName = "*Required";
    }
    else if (!/^[a-zA-Z]{2,10}$/.test(values.JerseyName)) {
        errors.JerseyName = "Jersey Name should be between 2 to 10 characters long or only letters allowed";
    }

    if (!values.JerseyNo) {
        errors.JerseyNo = "*Required";
    }
    else if (!/[0-9]$/.test(values.JerseyNo)) {
        errors.JerseyNo = "Jersey Name should contain only digits";
    }

    if (!values.jerseysize) {
        errors.jerseysize = "*Required";
    }

    if (!values.trowsersize) {
        errors.trowsersize = "*Required";
    }

    if (!values.trowserlength) {
        errors.trowserlength = "*Required";
    }
    else if (!/[0-9]$/.test(values.trowserlength)) {
        errors.trowserlength = "Jersey Name should contain only digits";
    }

    if (!values.shortssize) {
        errors.shortssize = "*Required";
    }

    if (!values.tracksuit) {
        errors.tracksuit = "*Required";
    }

    if (!values.circkethelmet) {
        errors.circkethelmet = "*Required";
    }

    if (!values.travelpolo) { 
        errors.travelpolo = "*Required";
    }


    return errors
}


function KittingDetailsForm() {
    const formik = useFormik({
        initialValues: {
            JerseyName: '',
            JerseyNo: '',
            jerseysize: '',
            trowsersize: '',
            trowserlength: '',
            shortssize: '',
            tracksuit: '',
            circkethelmet: '',
            travelpolo: '',
            familyjerseyno: '',


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
                    <Accordion.Header><i className="bi bi-info-circle-fill me-1"></i><span style={{ fontWeight: '700' }}>KITTING DETAILS</span></Accordion.Header>
                    <Accordion.Body>
                        <Container >
                            <Form style={{ paddingRight: '60px' }} onSubmit={formik.handleSubmit}>
                                <Row>
                                    <Col xs={12} lg={3} className='col'>
                                        <Form.Floating className="mb-2">
                                            <Form.Control
                                                id="JerseyName"
                                                type="text"
                                                placeholder="JerseyName"
                                                name="JerseyName"
                                                value={formik.values.JerseyName} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                            />
                                            {
                                                formik.touched.JerseyName && formik.errors.JerseyName ? <span className='span'>{formik.errors.JerseyName}</span> : null
                                            }
                                            <label htmlFor="JerseyName" className='text-muted'>Name on Jersey*</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col xs={12} lg={3} className='col'>
                                        <Form.Floating className="mb-2">
                                            <Form.Control
                                                id="JerseyNo"
                                                type="text"
                                                placeholder="JerseyNo"
                                                name="JerseyNo"
                                                value={formik.values.JerseyNo} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                            />
                                            {
                                                formik.touched.JerseyNo && formik.errors.JerseyNo ? <span className='span'>{formik.errors.JerseyNo}</span> : null
                                            }
                                            <label htmlFor="JerseyNo" className='text-muted'>Jersey No*</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col xs={12} lg={3} className='col'>
                                        <FloatingLabel className='mb-2'
                                            controlId="jerseysize"
                                            label="Jersey Size*"
                                            name="jerseysize"
                                            value={formik.values.jerseysize} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                        >

                                            <Form.Select aria-label="jerseysize">
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
                                                formik.touched.jerseysize && formik.errors.jerseysize ? <span className='span'>{formik.errors.jerseysize}</span> : null
                                            }
                                        </FloatingLabel>
                                    </Col>
                                    <Col xs={12} lg={3} className='col'>
                                        <FloatingLabel className='mb-2'
                                            controlId="trowsersize"
                                            label="Trowser Size*"
                                            name="trowsersize"
                                            value={formik.values.trowsersize} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                        >
                                            <Form.Select aria-label="trowsersize">
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
                                                formik.touched.trowsersize && formik.errors.trowsersize ? <span className='span'>{formik.errors.trowsersize}</span> : null
                                            }
                                        </FloatingLabel>
                                    </Col>
                                    <Col xs={12} lg={3} className='col'>
                                        <Form.Floating className="mb-2">
                                            <Form.Control
                                                id="trowserlength"
                                                type="text"
                                                placeholder="Trowser Length"
                                                name="trowserlength"
                                                value={formik.values.trowserlength} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                            />
                                            {
                                                formik.touched.trowserlength && formik.errors.trowserlength ? <span className='span'>{formik.errors.trowserlength}</span> : null
                                            }
                                            <label htmlFor="trowserlength" className='text-muted'>Trowser Length</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col xs={12} lg={3} className='col'>
                                        <FloatingLabel className='mb-2'
                                            controlId="shortssize"
                                            label="Shorts Size*"
                                            name="shortssize"
                                            value={formik.values.trowserlength} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                        >
                                            <Form.Select aria-label="shortssize">
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
                                                formik.touched.shortssize && formik.errors.shortssize ? <span className='span'>{formik.errors.shortssize}</span> : null
                                            }
                                        </FloatingLabel>
                                    </Col>
                                    <Col xs={12} lg={3} className='col'>
                                        <FloatingLabel className='mb-2'
                                            controlId="tracksuit"
                                            label="Track suit*"
                                            name="tracksuit"
                                            value={formik.values.tracksuit} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                        >
                                            <Form.Select aria-label="tracksuit">
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
                                                formik.touched.tracksuit && formik.errors.tracksuit ? <span className='span'>{formik.errors.tracksuit}</span> : null
                                            }
                                        </FloatingLabel>
                                    </Col>
                                    <Col xs={12} lg={3} className='col'>
                                        <FloatingLabel className='mb-2'
                                            controlId="circkethelmet"
                                            label="Cricket Helmet*"
                                            name="circkethelmet"
                                            value={formik.values.circkethelmet} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                        >
                                            <Form.Select aria-label="circkethelmet">
                                                <option value="none">Select Type</option>
                                                <option value="Junior">Junior (52-54 cm)</option>
                                                <option value="Youth">Youth (54-57 cm)</option>
                                                <option value="small">small (55-58 cm)</option>
                                                <option value="Medium">Medium (58-61 cm)</option>
                                                <option value="Large">Large (60-63 cm)</option>
                                            </Form.Select>
                                            {
                                                formik.touched.circkethelmet && formik.errors.circkethelmet ? <span className='span'>{formik.errors.circkethelmet}</span> : null
                                            }
                                        </FloatingLabel>
                                    </Col>
                                    <Col xs={12} lg={3} className='col'>
                                        <FloatingLabel className='mb-2'
                                            controlId="travelpolo"
                                            label="Travel Polo"
                                            name="travelpolo"
                                            value={formik.values.travelpolo} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                        >
                                            <Form.Select aria-label="travelpolo">
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
                                                formik.touched.travelpolo && formik.errors.travelpolo ? <span className='span'>{formik.errors.travelpolo}</span> : null
                                            }
                                        </FloatingLabel>
                                    </Col>
                                    <Col xs={12} lg={3} className='col'>
                                        <Form.Floating className="mb-2">
                                            <Form.Control
                                                id="familyjerseyno"
                                                type="number"
                                                placeholder="familyjerseyno"
                                                name="familyjerseyno"
                                            />
                                            {
                                                formik.touched.familyjerseyno && formik.errors.familyjerseyno ? <span className='span'>{formik.errors.familyjerseyno}</span> : null
                                            }
                                            <label htmlFor="familyjerseyno" className='text-muted'>Family Jersey No</label>
                                        </Form.Floating>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12} lg={6} className='col'>
                                        <label className='text-muted' htmlFor="battingpads">BOWLER TYPE</label>
                                        {['radio'].map((type) => (
                                            <div key={`inline-${type}`} style={{ whiteSpace: 'nowrap' }}>
                                                <Form.Check style={{
                                                    padding: '20px'
                                                }}
                                                    inline
                                                    label="Provided"
                                                    name="group1"
                                                    type={type}
                                                    id={`inline-${type}-provided`}
                                                />
                                                <Form.Check
                                                    inline
                                                    label="Not Provided"
                                                    name="group1"
                                                    type={type}
                                                    id={`inline-${type}-notprovided`}
                                                />
                                            </div>
                                        ))}
                                    </Col>
                                    <Col xs={12} lg={6} className='col' >
                                        <div>
                                            <Form.Label htmlFor="qty" style={{ color: '#7C7F81' }}>QUANTITY</Form.Label>
                                            <Form.Control size="sm"
                                                type="number"
                                                id="qty"
                                            />
                                        </div>
                                    </Col>
                                </Row>
                                {/* <Row> */}
                                <Col className='text-center'>
                                    <Button variant="primary" className='rounded-circle'><i className="bi bi-plus fa-8x" style={{ fontSize: '20px' }}></i></Button>
                                </Col>
                                <Col lg={12} className='my-4 col'>
                                    <Button variant="primary" className='me-1 mb-2 mx-1 ' style={{ width: "130px" }}>PREVIOUS</Button>
                                    <Button variant="success" type="submit" value="submit" className='me-1 mb-2 mx-1 ' style={{ width: "130px" }}>Save and Next</Button>
                                    <Button variant="warning" className='text-white mb-2 ' style={{ width: "130px" }}>CLEAR</Button>
                                </Col>
                            </Form>
                        </Container>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}

export default KittingDetailsForm