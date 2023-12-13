import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
function StaffBankAccountDetails() {
  return (
    <div>
              <Accordion>
                <Accordion.Item eventKey="3">
                    <Accordion.Header><i className="bi bi-info-circle-fill me-1"></i><span style={{ fontWeight: '700' }}>BANK ACCOUNT DETAILS</span></Accordion.Header>
                    <Accordion.Body>
                        <Container >
                            <Form style={{ paddingRight: '60px' }}>
                                <Row>
                                    <Col xs={12} lg={3} className='col'>
                                        <Form.Floating className="mb-2">
                                            <Form.Control
                                                id="beneficiaryname"
                                                type="text"
                                                placeholder="beneficiaryname"
                                            />
                                            <label htmlFor="beneficiaryname" className='text-muted'>Beneficiary Name*</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col xs={12} lg={3} className='col'>
                                        <Form.Floating className="mb-2">
                                            <Form.Control
                                                id="bankname"
                                                type="text"
                                                placeholder="bankname"
                                            />
                                            <label htmlFor="bankname" className='text-muted'>Bank Name*</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col xs={12} lg={3}>
                                        <Form.Floating className="mb-2 col">
                                            <Form.Control
                                                id="currencytype"
                                                type="text"
                                                placeholder="currencytype"
                                            />
                                            <label htmlFor="currencytype" className='text-muted'>Currency Type</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col xs={12} lg={3} className='col'>
                                        <Form.Floating className="mb-2">
                                            <Form.Control
                                                id="accountno"
                                                type="text"
                                                placeholder="accountno"
                                            />
                                            <label htmlFor="accountno" className='text-muted'>Account No*</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col xs={12} lg={3} className='col'>
                                        <label className='text-muted' htmlFor="battingpads">Account Type*</label>
                                        {['radio'].map((type) => (
                                            <div key={`inline-${type}`}  style={{whiteSpace:'nowrap'}}>
                                                <Form.Check style={{
                                                  
                                                }}
                                                    inline
                                                    label="Savings"
                                                    name="type"
                                                    type={type}
                                                    id={`inline-${type}-savings`}
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
                                                id="ifsc"
                                                type="text"
                                                placeholder="ifsc"
                                            />
                                            <label htmlFor="ifsc" className='text-muted'>IFSC Code*</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col xs={12} lg={3} className='col'>
                                        <Form.Floating className="mb-2">
                                            <Form.Control
                                                id="swiftbic"
                                                type="text"
                                                placeholder="swiftbic"
                                            />
                                            {/*  */}
                                            <label htmlFor="swiftbic" className='text-muted '>Swift/Bic No Type</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col xs={12} lg={3} className='col'>
                                        <Form.Floating className="mb-2">
                                            <Form.Control
                                                id="micr"
                                                type="text"
                                                placeholder="micr"
                                            />
                                            <label htmlFor="micr" className='text-muted'>MICR Code</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col xs={12} lg={3} className='col'>
                                        <Form.Floating className="mb-2">
                                            <Form.Control
                                                id="iban"
                                                type="text"
                                                placeholder="iban"
                                            />
                                            <label htmlFor="iban" className='text-muted'>IBAN Code</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col xs={12} lg={3} className='col'>
                                        <Form.Floating className="mb-2">
                                            <Form.Control
                                                id="gst"
                                                type="text"
                                                placeholder="gst"
                                            />
                                            <label htmlFor="gst" className='text-muted'>GST Number</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col xs={12} lg={3} className='col'>
                                        <Form.Floating className="mb-2">
                                            <Form.Control
                                                id="bankcontact"
                                                type="text"
                                                placeholder="bankcontact"
                                            />
                                            {/*  */}
                                            <label htmlFor="bankcontact" className='text-muted '>Bank Contact No</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col xs={12} lg={3} className='col'>
                                        <Form.Floating className="mb-2">
                                            <Form.Control
                                                id="bankaddress"
                                                type="text"
                                                placeholder="bankaddress"
                                            />
                                            <label htmlFor="bankaddress" className='text-muted'>Bank Address</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col xs={12} lg={3} className='col'>
                                        <Form.Floating className="mb-2">
                                            <Form.Control
                                                id="bankcountry"
                                                type="text"
                                                placeholder="bankcountry"
                                            />
                                            <label htmlFor="bankcountry" className='text-muted'>Bank Country</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col lg={12} className='my-4 col'>
                                        <Button variant="primary" className='me-1 mb-2 mx-1 ' style={{width:"130px"}}>PREVIOUS</Button>
                                        <Button variant="success" className='me-1 mb-2 mx-1 ' style={{width:"130px"}}>Save and Next</Button>
                                        <Button variant="warning" className='text-white mb-2 mx-1 ' style={{width:"130px"}}>CLEAR</Button>
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