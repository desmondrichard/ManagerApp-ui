import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import './ProficiencyForm.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import './ProficiencyForm.css';
import Container from 'react-bootstrap/Container';
function ProficiencyForm() {
    return (
        <div>
            <Accordion>
                <Accordion.Item eventKey="1">
                    <Accordion.Header><i className="bi bi-info-circle-fill me-1"></i><span style={{ fontWeight: '700' }}>PROFICIENCY INFORMATION</span></Accordion.Header>
                    <Accordion.Body>
                        <Container>
                            <Form>
                                <Row>
                                    <Col xs={12} lg={4} className='col'>
                                        <FloatingLabel className='mb-2'
                                            controlId="specialization"
                                            label="Specialization*"
                                        >
                                            <Form.Select aria-label="specialization">
                                                <option>Select Type</option>
                                                <option value="batsman">BATSMAN</option>
                                                <option value="bowler">BOWLER</option>
                                                <option value="allrounder">ALL-ROUNDER</option>
                                                <option value="wicketkeeper">WICKETKEEPER</option>
                                            </Form.Select>
                                        </FloatingLabel>
                                    </Col>
                                    <Col xs={12} lg={4} className=' col'>
                                        <label className='text-muted me-2' htmlFor="gender">BATTING STYLE</label>
                                        {['radio'].map((type) => (
                                            <div key={`inline-${type}`} className="mb-3" style={{ whiteSpace: 'nowrap' }}>
                                                <Form.Check
                                                    inline
                                                    label="Left Hand"
                                                    name="BatHand"
                                                    type={type}
                                                    id={`inline-${type}-left`}
                                                />
                                                <Form.Check
                                                    inline
                                                    label="Right Hand"
                                                    name="BatHand"
                                                    type={type}
                                                    id={`inline-${type}-right`}
                                                />
                                            </div>
                                        ))}
                                    </Col>
                                    <Col xs={12} lg={4} className='col'>
                                        <FloatingLabel className='mb-2'
                                            controlId="battingorder"
                                            label="Batting order*"
                                        >
                                            <Form.Select aria-label="battingorder">
                                                <option>Select Type</option>
                                                <option value="top">TOP ORDER</option>
                                                <option value="middle">MIDDLE ORDER</option>
                                                <option value="lower">LOWER ORDER</option>
                                                <option value="tail">TAIL ENDER</option>
                                            </Form.Select>
                                        </FloatingLabel>
                                    </Col>
                                    <Col xs={12} lg={4} className='col'>
                                        <label className='text-muted me-2' htmlFor="bowlertype">BOWLER TYPE</label>
                                        {['radio'].map((type) => (
                                            <div key={`inline-${type}`} className="mb-3">
                                                <span style={{ whiteSpace: 'nowrap' }}>
                                                    <Form.Check
                                                        inline
                                                        label="Left Arm"
                                                        name="Arm"
                                                        type={type}
                                                        id={`inline-${type}-leftarm`}
                                                    />
                                                    <Form.Check
                                                        inline
                                                        label="Right Arm"
                                                        name="Arm"
                                                        type={type}
                                                        id={`inline-${type}-rightarm`}
                                                    />
                                                </span>
                                            </div>
                                        ))}

                                    </Col>
                                    <Col xs={12} lg={4} className='col'>
                                        <FloatingLabel className='mb-2'
                                            controlId="bowlingstyle"
                                            label="Bowling Style*"
                                        >
                                            <Form.Select aria-label="bowlingstyle">
                                                <option>Select Type</option>
                                                <option value="fast">FAST</option>
                                                <option value="spin">SPIN</option>
                                            </Form.Select>
                                        </FloatingLabel>
                                    </Col>
                                    <Col xs={12} lg={4} className='col'>
                                        <FloatingLabel className='mb-2'
                                            controlId="bowlingspecification"
                                            label="Bowling Specification*"
                                        >
                                            <Form.Select aria-label="bowlingspecification">
                                                <option>Select Type</option>
                                                <option value="sample1">sample1</option>
                                                <option value="sample2">sample2</option>
                                            </Form.Select>
                                        </FloatingLabel>
                                    </Col>
                                    <Col xs={12} lg={12} className='my-4 col'>
                                        <Button variant="primary" className='mb-2' style={{ width: "130px" }}>PREVIOUS</Button>
                                        <Button variant="success" className='mx-3 mb-2' style={{ width: "130px" }}>Save and Next</Button>
                                        <Button variant="warning" className='mx-1 text-white mb-2' style={{ width: "130px" }}>CLEAR</Button>
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

export default ProficiencyForm