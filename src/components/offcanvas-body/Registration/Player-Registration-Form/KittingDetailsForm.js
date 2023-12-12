import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import './KittingDetailsForm.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
function KittingDetailsForm() {
    return (
        <div>
            <Accordion>
                <Accordion.Item eventKey="2">
                    <Accordion.Header><i className="bi bi-info-circle-fill me-1"></i><span style={{ fontWeight: '700' }}>KITTING DETAILS</span></Accordion.Header>
                    <Accordion.Body>
                        <Container >
                            <Form style={{paddingRight:'60px'}}>
                                <Row>
                                    <Col xs={12} lg={3} className='col'>
                                        <Form.Floating className="mb-2">
                                            <Form.Control
                                                id="JerseyName"
                                                type="text"
                                                placeholder="JerseyName"
                                            />
                                            <label htmlFor="JerseyName" className='text-muted'>Name on Jersey*</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col xs={12} lg={3} className='col'>
                                        <Form.Floating className="mb-2">
                                            <Form.Control
                                                id="JerseyNo"
                                                type="text"
                                                placeholder="JerseyNo"
                                            />
                                            <label htmlFor="JerseyNo" className='text-muted'>Jersey No*</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col xs={12} lg={3} className='col'>
                                        <FloatingLabel className='mb-2'
                                            controlId="jerseysize"
                                            label="Jersey Size*"
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
                                        </FloatingLabel>
                                    </Col>
                                    <Col xs={12} lg={3} className='col'>
                                        <FloatingLabel className='mb-2'
                                            controlId="trowsersize"
                                            label="Trowser Size*"
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
                                        </FloatingLabel>
                                    </Col>
                                    <Col xs={12} lg={3} className='col'>
                                        <Form.Floating className="mb-2">
                                            <Form.Control
                                                id="trowserlength"
                                                type="text"
                                                placeholder="Trowser Length"
                                            />
                                            <label htmlFor="trowserlength" className='text-muted'>Trowser Length</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col xs={12} lg={3} className='col'>
                                        <FloatingLabel className='mb-2'
                                            controlId="shortssize"
                                            label="Shorts Size*"
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
                                        </FloatingLabel>
                                    </Col>
                                    <Col xs={12} lg={3} className='col'>
                                        <FloatingLabel className='mb-2'
                                            controlId="tracksuit"
                                            label="Track suit*"
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
                                        </FloatingLabel>
                                    </Col>
                                    <Col xs={12} lg={3} className='col'>
                                        <FloatingLabel className='mb-2'
                                            controlId="circkethelmet"
                                            label="Cricket Helmet*"
                                        >
                                            <Form.Select aria-label="circkethelmet">
                                                <option value="none">Select Type</option>
                                                <option value="Junior">Junior (52-54 cm)</option>
                                                <option value="Youth">Youth (54-57 cm)</option>
                                                <option value="small">small (55-58 cm)</option>
                                                <option value="Medium">Medium (58-61 cm)</option>
                                                <option value="Large">Large (60-63 cm)</option>
                                            </Form.Select>
                                        </FloatingLabel>
                                    </Col>
                                    <Col xs={12} lg={3} className='col'>
                                        <FloatingLabel className='mb-2'
                                            controlId="travelpolo"
                                            label="Travel Polo"
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
                                        </FloatingLabel>
                                    </Col>
                                    <Col xs={12} lg={3} className='col'>
                                        <Form.Floating className="mb-2">
                                            <Form.Control
                                                id="familyjerseyno"
                                                type="text"
                                                placeholder="familyjerseyno"
                                            />
                                            <label htmlFor="familyjerseyno" className='text-muted'>Family Jersey No</label>
                                        </Form.Floating>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12} lg={6} className='col'>
                                        <label className='text-muted me-2' htmlFor="battingpads">BOWLER TYPE</label>
                                        {['radio'].map((type) => (
                                            <div key={`inline-${type}`} >
                                                <Form.Check style={{
                                                    padding: '20px', marginLeft: '20px'
                                                }}
                                                    inline
                                                    label="Provided"
                                                    name="group1"
                                                    type={type}
                                                    id={`inline-${type}-provided`}
                                                />
                                                <Form.Check style={{ marginLeft: '20px' }}
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
                                            <Button variant="primary" className='me-1 mb-2 mx-1 ' style={{width:"130px"}}>PREVIOUS</Button>
                                            <Button variant="success" className='me-1 mb-2 mx-1 ' style={{width:"130px"}}>Save and Next</Button>
                                            <Button variant="warning" className='text-white mb-2 ' style={{width:"130px"}}>CLEAR</Button> 
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