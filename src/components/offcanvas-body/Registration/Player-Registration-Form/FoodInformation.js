import React from 'react';
import './FoodInformation.css';
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

function FoodInformation() {
    return (
        <div>
            <Accordion>
                <Accordion.Item eventKey="5">
                    <Accordion.Header><i className="bi bi-info-circle-fill me-1"></i><span style={{ fontWeight: '700' }}>FOOD INFORMATION</span></Accordion.Header>
                    <Accordion.Body>
                        <Container >
                            <Form style={{ paddingRight: '60px' }}>
                                <Row>
                                    <Col xs={12} lg={4} className='col'>
                                        <label className='text-muted me-2' htmlFor="foodtype">Food Type</label>
                                        {['radio'].map((type) => (
                                            <div key={`inline-${type}`} >
                                                <Form.Check style={{
                                                    padding: '20px', marginLeft: '20px'
                                                }}
                                                    inline
                                                    label="Veg"
                                                    name="group1"
                                                    type={type}
                                                    id={`inline-${type}-veg`}
                                                />
                                                <Form.Check style={{ marginLeft: '10px' }}
                                                    inline
                                                    label="Non Veg"
                                                    name="group1"
                                                    type={type}
                                                    id={`inline-${type}-nonveg`}
                                                />
                                            </div>
                                        ))}
                                    </Col>
                                    <Col xs={12} lg={4} className='col'>
                                        <label className='text-muted me-2' htmlFor="foodtype">Eggiterian</label>
                                        {['radio'].map((type) => (
                                            <div key={`inline-${type}`} >
                                                <Form.Check style={{
                                                    padding: '20px', marginLeft: '20px'
                                                }}
                                                    inline
                                                    label="Yes"
                                                    name="group1"
                                                    type={type}
                                                    id={`inline-${type}-yes`}
                                                />
                                                <Form.Check style={{ marginLeft: '10px' }}
                                                    inline
                                                    label="No"
                                                    name="group1"
                                                    type={type}
                                                    id={`inline-${type}-no`}
                                                />
                                            </div>
                                        ))}
                                    </Col>
                                    <Col xs={12} lg={4} className='col'>
                                        <label className='text-muted me-2' htmlFor="foodtype">Sea Food</label>
                                        {['radio'].map((type) => (
                                            <div key={`inline-${type}`} >
                                                <Form.Check style={{
                                                    padding: '20px', marginLeft: '20px'
                                                }}
                                                    inline
                                                    label="Yes"
                                                    name="group1"
                                                    type={type}
                                                    id={`inline-${type}-yes`}
                                                />
                                                <Form.Check style={{ marginLeft: '10px' }}
                                                    inline
                                                    label="No"
                                                    name="group1"
                                                    type={type}
                                                    id={`inline-${type}-no`}
                                                />
                                            </div>
                                        ))}
                                    </Col>
                                    <Col xs={12} lg={4} className='col'>
                                        <label className='text-muted me-2' htmlFor="foodtype">Red Meat</label>
                                        {['radio'].map((type) => (
                                            <div key={`inline-${type}`} >
                                                <Form.Check style={{
                                                    padding: '20px', marginLeft: '20px'
                                                }}
                                                    inline
                                                    label="Yes"
                                                    name="group1"
                                                    type={type}
                                                    id={`inline-${type}-yes`}
                                                />
                                                <Form.Check style={{ marginLeft: '10px' }}
                                                    inline
                                                    label="No"
                                                    name="group1"
                                                    type={type}
                                                    id={`inline-${type}-no`}
                                                />
                                            </div>
                                        ))}
                                    </Col>
                                    <Col xs={12} lg={4} className='col'>
                                        <label className='text-muted me-2' htmlFor="foodtype">Allergy if any</label>
                                        {['radio'].map((type) => (
                                            <div key={`inline-${type}`} >
                                                <Form.Check style={{
                                                    padding: '20px', marginLeft: '20px'
                                                }}
                                                    inline
                                                    label="Yes"
                                                    name="group1"
                                                    type={type}
                                                    id={`inline-${type}-yes`}
                                                />
                                                <Form.Check style={{ marginLeft: '10px' }}
                                                    inline
                                                    label="No"
                                                    name="group1"
                                                    type={type}
                                                    id={`inline-${type}-no`}
                                                />
                                            </div>
                                        ))}
                                    </Col>
                                    <Col xs={12} lg={4} className='col'>
                                        <Form.Floating className="mb-2">
                                            <Form.Control
                                                id="allergy"
                                                type="text"
                                                placeholder="allergy"
                                            />
                                            <label htmlFor="allergy" className='text-muted'>Allergy</label>
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

export default FoodInformation