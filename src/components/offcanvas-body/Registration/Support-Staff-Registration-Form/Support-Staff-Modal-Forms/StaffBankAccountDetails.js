import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useFormik } from 'formik';
// validation:
const validate = values => {
    const errors = {};

    if (!values.StaffBeneficiaryname) {
        errors.StaffBeneficiaryname = "*Required";
    }
    else if (!/^[a-zA-Z]{3,20}$/.test(values.StaffBeneficiaryname)) {
        errors.StaffBeneficiaryname = "Beneficiary Name should be between 3 to 20 characters long or only letters allowed";
    }

    if (!values.staffBankName) {
        errors.staffBankName = "*Required";
    }
    else if (!/^[a-zA-Z]{2,15}$/.test(values.staffBankName)) {
        errors.staffBankName = "Bank Name should be between 2 to 15 characters long or only letters allowed";
    }

    if (!/^[^0-9]{0,12}$/.test(values.staffCurrencytype)) {
        errors.staffCurrencytype = "Invalid currency type";
    }


    if (!/^\d{9,18}$/.test(values.staffAccountno)) {
        errors.staffAccountno = "enter valid Account number";
    }


    if (!values.staffIfsc) {
        errors.staffIfsc = "*Required";
    }
    else if (!/^[A-Za-z]{4}\d{7}$/.test(values.staffIfsc)) {
        errors.staffIfsc = "enter valid Ifsc code";
    }


    if (!/^[0-9]{1,9}$/.test(values.staffMicr)) {
        errors.staffMicr = "enter valid micr code";
    }

    if (!/^[0-9a-zA-Z]{0,15}$/.test(values.staffGst)) {
        errors.staffGst = "enter valid GST number";
    }

    if (!/^[0-9]{0,10}$/.test(values.staffBankcontact)) {
        errors.staffBankcontact = "enter valid contact number";
    }

    if (!/^[a-zA-Z]{0,20}$/.test(values.staffBankcountry)) {
        errors.staffBankcountry = "Country Name should be between 3 to 20 characters long or only letters allowed";
    }

    return errors;
}

function StaffBankAccountDetails() {

    // 
    const formik = useFormik({
        initialValues: {
            StaffBeneficiaryname: '',
            staffBankName: '',
            staffCurrencytype: '',
            staffAccountno: '',
            staffIfsc: '',
            staffMicr: '',
            staffGst: '',
            staffBankcontact: '',
            staffBankcountry: ''

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
                <Accordion.Item eventKey="3">
                    <Accordion.Header><i className="bi bi-info-circle-fill me-1"></i><span style={{ fontWeight: '700' }}>BANK ACCOUNT DETAILS</span></Accordion.Header>
                    <Accordion.Body>
                        <Container >
                            <Form style={{ paddingRight: '60px' }} onSubmit={formik.handleSubmit}>
                                <Row>
                                    <Col xs={12} lg={3} className='col'>
                                        <Form.Floating className="mb-2">
                                            <Form.Control
                                                id="StaffBeneficiaryname"
                                                type="text"
                                                placeholder="beneficiaryname"
                                                name="StaffBeneficiaryname"
                                                value={formik.values.StaffBeneficiaryname} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                            />
                                            {
                                                formik.touched.StaffBeneficiaryname && formik.errors.StaffBeneficiaryname ? <span className='span'>{formik.errors.StaffBeneficiaryname}</span> : null
                                            }
                                            <label htmlFor="StaffBeneficiaryname" className='text-muted'>Beneficiary Name*</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col xs={12} lg={3} className='col'>
                                        <Form.Floating className="mb-2">
                                            <Form.Control
                                                id="staffBankName"
                                                type="text"
                                                placeholder="bankname"
                                                name="staffBankName"
                                                value={formik.values.staffBankName} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                            />
                                            {
                                                formik.touched.staffBankName && formik.errors.staffBankName ? <span className='span'>{formik.errors.staffBankName}</span> : null
                                            }
                                            <label htmlFor="staffBankName" className='text-muted'>Bank Name*</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col xs={12} lg={3}>
                                        <Form.Floating className="mb-2 col">
                                            <Form.Control
                                                id="staffCurrencytype"
                                                type="text"
                                                placeholder="currencytype"
                                                name="staffCurrencytype"
                                                value={formik.values.staffCurrencytype} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                            />
                                            {
                                                formik.touched.staffCurrencytype && formik.errors.staffCurrencytype ? <span className='span'>{formik.errors.staffCurrencytype}</span> : null
                                            }
                                            <label htmlFor="staffCurrencytype" className='text-muted'>Currency Type</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col xs={12} lg={3} className='col'>
                                        <Form.Floating className="mb-2">
                                            <Form.Control
                                                id="staffAccountno"
                                                type="text"
                                                placeholder="accountno"
                                                name="staffAccountno"
                                                value={formik.values.staffAccountno} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                            />
                                            {
                                                formik.touched.staffAccountno && formik.errors.staffAccountno ? <span className='span'>{formik.errors.staffAccountno}</span> : null
                                            }
                                            <label htmlFor="staffAccountno" className='text-muted'>Account No*</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col xs={12} lg={3} className='col'>
                                        <label className='text-muted' htmlFor="battingpads">Account Type*</label>
                                        {['radio'].map((type) => (
                                            <div key={`inline-${type}`} style={{ whiteSpace: 'nowrap' }}>
                                                <Form.Check style={{

                                                }}
                                                    inline
                                                    label="Savings"
                                                    name="type"
                                                    type={type}
                                                    id={`inline-${type}-savings`}
                                                    defaultChecked={true}
                                                />
                                                <Form.Check
                                                    inline
                                                    label="Current"
                                                    name="type"
                                                    type={type}
                                                    id={`inline-${type}-current`}
                                                />
                                            </div>
                                        ))}
                                    </Col>
                                    <Col xs={12} lg={3} className='col'>
                                        <Form.Floating className="mb-2">
                                            <Form.Control
                                                id="staffIfsc"
                                                type="text"
                                                placeholder="ifsc"
                                                name="staffIfsc"
                                                value={formik.values.staffIfsc} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                            />
                                            {
                                                formik.touched.staffIfsc && formik.errors.staffIfsc ? <span className='span'>{formik.errors.staffIfsc}</span> : null
                                            }
                                            <label htmlFor="staffIfsc" className='text-muted'>IFSC Code*</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col xs={12} lg={3} className='col'>
                                        <Form.Floating className="mb-2">
                                            <Form.Control
                                                id="staffSwiftbic"
                                                type="text"
                                                placeholder="swiftbic"
                                                name="staffSwiftbic"
                                            />

                                            {/*  */}
                                            <label htmlFor="staffSwiftbic" className='text-muted '>Swift/Bic No Type</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col xs={12} lg={3} className='col'>
                                        <Form.Floating className="mb-2">
                                            <Form.Control
                                                id="staffMicr"
                                                type="text"
                                                placeholder="micr"
                                                name="staffMicr"
                                                value={formik.values.staffMicr} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                            />
                                            {
                                                formik.touched.staffMicr && formik.errors.staffMicr ? <span className='span'>{formik.errors.staffMicr}</span> : null
                                            }
                                            <label htmlFor="staffMicr" className='text-muted'>MICR Code</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col xs={12} lg={3} className='col'>
                                        <Form.Floating className="mb-2">
                                            <Form.Control
                                                id="staffIban"
                                                type="text"
                                                placeholder="iban"
                                                name="staffIban"
                                            />

                                            <label htmlFor="staffIban" className='text-muted'>IBAN Code</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col xs={12} lg={3} className='col'>
                                        <Form.Floating className="mb-2">
                                            <Form.Control
                                                id="staffGst"
                                                type="text"
                                                placeholder="gst"
                                                name="staffGst"
                                                value={formik.values.staffGst} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                            />
                                            {
                                                formik.touched.staffGst && formik.errors.staffGst ? <span className='span'>{formik.errors.staffGst}</span> : null
                                            }
                                            <label htmlFor="staffGst" className='text-muted'>GST Number</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col xs={12} lg={3} className='col'>
                                        <Form.Floating className="mb-2">
                                            <Form.Control
                                                id="staffBankcontact"
                                                type="text"
                                                placeholder="bankcontact"
                                                name="staffBankcontact"
                                                value={formik.values.staffBankcontact} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                            />
                                            {
                                                formik.touched.staffBankcontact && formik.errors.staffBankcontact ? <span className='span'>{formik.errors.staffBankcontact}</span> : null
                                            }
                                            {/*  */}
                                            <label htmlFor="staffBankcontact" className='text-muted '>Bank Contact No</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col xs={12} lg={3} className='col'>
                                        <Form.Floating className="mb-2">
                                            <Form.Control
                                                id="staffBankaddress"
                                                type="text"
                                                placeholder="bankaddress"
                                                name="staffBankaddress"
                                            />
                                            <label htmlFor="staffBankaddress" className='text-muted'>Bank Address</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col xs={12} lg={3} className='col'>
                                        <Form.Floating className="mb-2">
                                            <Form.Control
                                                id="staffBankcountry"
                                                type="text"
                                                placeholder="bankcountry"
                                                name="staffBankcountry"
                                                value={formik.values.staffBankcountry} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                            />
                                            {
                                                formik.touched.staffBankcountry && formik.errors.staffBankcountry ? <span className='span'>{formik.errors.staffBankcountry}</span> : null
                                            }
                                            <label htmlFor="staffBankcountry" className='text-muted'>Bank Country</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col lg={12} className='my-4 col'>
                                        <Button variant="primary" className='me-1 mb-2 mx-1 ' style={{ width: "130px" }}>PREVIOUS</Button>
                                        <Button type="submit" variant="success" className='me-1 mb-2 mx-1 ' style={{ width: "130px" }}>Save and Next</Button>
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

export default StaffBankAccountDetails