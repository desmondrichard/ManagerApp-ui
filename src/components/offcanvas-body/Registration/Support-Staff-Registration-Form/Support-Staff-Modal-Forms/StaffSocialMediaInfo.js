import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
function StaffSocialMediaInfo() {
  return (
    <div>
  <Accordion>
                <Accordion.Item eventKey="8">
                    <Accordion.Header><i className="bi bi-info-circle-fill me-1"></i><span style={{ fontWeight: '700' }}>SOCIAL MEDIA INFORMATION</span></Accordion.Header>
                    <Accordion.Body>
                        <Container >
                            <Form style={{ paddingRight: '60px' }}>
                                <Row>
                                    <Col xs={12} lg={6} className='col'>
                                        <Form.Floating className="mb-2">
                                            <Form.Control
                                                id="fbid"
                                                type="text"
                                                placeholder="fbid"
                                            />
                                            <label htmlFor="fbid" className='text-muted'>Facebook ID</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col xs={12} lg={6} className='col'>
                                        <Form.Floating className="mb-2">
                                            <Form.Control
                                                id="fblink"
                                                type="text"
                                                placeholder="fblink"
                                            />
                                            <label htmlFor="fblink" className='text-muted'>Facebook Link</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col xs={12} lg={6} className='col'>
                                        <Form.Floating className="mb-2">
                                            <Form.Control
                                                id="instagramid"
                                                type="text"
                                                placeholder="instagramid"
                                            />
                                            <label htmlFor="instagramid" className='text-muted'>Instagram ID</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col xs={12} lg={6} className='col'>
                                        <Form.Floating className="mb-2">
                                            <Form.Control
                                                id="instagramlink"
                                                type="text"
                                                placeholder="instagramlink"
                                            />
                                            <label htmlFor="instagramlink" className='text-muted'>Instagram Link</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col xs={12} lg={6} className='col'>
                                        <Form.Floating className="mb-2">
                                            <Form.Control
                                                id="twitterid"
                                                type="text"
                                                placeholder="twitterid"
                                            />
                                            <label htmlFor="twitterid" className='text-muted'>Twitter ID</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col xs={12} lg={6} className='col'>
                                        <Form.Floating className="mb-2">
                                            <Form.Control
                                                id="twitterlink"
                                                type="text"
                                                placeholder="twitterlink"
                                            />
                                            <label htmlFor="twitterlink" className='text-muted'>Twitter Link</label>
                                        </Form.Floating>
                                    </Col>
                                </Row>

                                <Col lg={12} className='my-4 col'>
                                    <Button variant="primary" className='me-1 mb-2 mx-1 ' style={{width:"130px"}}>PREVIOUS</Button>
                                    <Button variant="success" className='me-1 mb-2 mx-1 ' style={{width:"130px"}}>Save and Next</Button>
                                    <Button variant="warning" className='text-white mb-2 mx-1 ' style={{width:"130px"}}>CLEAR</Button>
                                </Col>
                            </Form>
                        </Container>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
    </div>
  )
}

export default StaffSocialMediaInfo