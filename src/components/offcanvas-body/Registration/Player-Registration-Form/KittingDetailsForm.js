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
import DynamicFields from './DynamicFields';
import { useRef } from 'react';
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
    

    if (!values.jerseysize) {
        errors.jerseysize = "*Required";
    }

    if (!values.trowsersize) {
        errors.trowsersize = "*Required";
    }

    if (!values.trowserlength) {
        errors.trowserlength = "*Required";
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
     // reset form start: 
     const JerseyName1=useRef("");
     const JerseyNo1=useRef("");
     const jerseysize1=useRef("");
     const trowsersize1=useRef("");
     const trowserlength1=useRef("");
     const shortssize1=useRef("");
     const tracksuit1=useRef("");
     const circkethelmet1=useRef("");
     const travelpolo1=useRef("");
     const familyjerseyno1=useRef("");
     const bowlerA=useRef(false);
     const bowlerB=useRef(false);
 
 
     // for npm custom component dont use useRef instead use useState i.e for phone component
     function handleReset() {
        JerseyName1.current.value = "";
        JerseyNo1.current.value = "";
        jerseysize1.current.value = "none";
        trowsersize1.current.value = "none";
        trowserlength1.current.value = "";
        shortssize1.current.value = "none";
        tracksuit1.current.value = "none";
        circkethelmet1.current.value = "none";
        travelpolo1.current.value = "none";
        familyjerseyno1.current.value = "";
        bowlerA.current.checked=false;
        bowlerB.current.checked=false;
         formik.resetForm();
     }
     // reset form end: 
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
                                                ref={JerseyName1}
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
                                                type="number"
                                                min="0" max="999"
                                                placeholder="JerseyNo"
                                                name="JerseyNo"
                                                ref={JerseyNo1}
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

                                            <Form.Select aria-label="jerseysize" ref={jerseysize1}>
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
                                            min="0" max="999"   
                                            value={formik.values.trowsersize} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                        >
                                            <Form.Select aria-label="trowsersize" ref={trowsersize1}>
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
                                                type="number"
                                                placeholder="Trowser Length"
                                                name="trowserlength"
                                                min="0" max="999"
                                                ref={trowserlength1}
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
                                            <Form.Select aria-label="shortssize"    ref={shortssize1}>
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
                                            <Form.Select aria-label="tracksuit" ref={tracksuit1}>
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
                                            <Form.Select aria-label="circkethelmet" ref={circkethelmet1}>
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
                                            <Form.Select aria-label="travelpolo" ref={travelpolo1}>
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
                                                min="0" max="999"
                                                ref={familyjerseyno1}
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
                                                    label="Yes"
                                                    name="group1"
                                                    type={type}
                                                    id={`inline-${type}-yes`}
                                                    ref={bowlerA}
                                                />
                                                <Form.Check
                                                    inline
                                                    label="No"
                                                    name="group1"
                                                    type={type}
                                                    id={`inline-${type}-no`}
                                                    defaultChecked={true}
                                                    ref={bowlerB}
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
                                    {/* Dynamic Form: */}
                                    <Col xs={12} lg={12} className='col'>
                                        <DynamicFields />
                                    </Col>
                                </Row>
                                {/* <Row> */}
                               
                                <Col lg={12} className='my-4 col'>
                                    <Button variant="primary" className='me-1 mb-2 mx-1 ' style={{ width: "130px" }}>PREVIOUS</Button>
                                    <Button variant="success" type="submit" value="submit" className='me-1 mb-2 mx-1 ' style={{ width: "130px" }}>Save and Next</Button>
                                    <Button variant="warning" type="button" className='text-white mb-2 ' style={{ width: "130px" }} onClick={() => handleReset()}>CLEAR</Button>
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