import React from 'react';
import './FoodInformation.css';
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useRef } from 'react';

function FoodInformation() {
    // reset form start: 
    const vegYes = useRef(false);
    const vegNo = useRef(false);
    const eggYes = useRef(false);
    const eggNo = useRef(false);
    const seaYes = useRef(false);
    const seaNo = useRef(false);
    const meatYes = useRef(false);
    const meatNo = useRef(false);
    const allergyYes = useRef(false);
    const allergyNo = useRef(false);
    const allergy1=useRef("");

    // for npm custom component dont use useRef instead use useState i.e for phone component
    function handleReset() {
        vegYes.current.checked = false;
        vegNo.current.checked = false;
        eggYes.current.checked = false;
        eggNo.current.checked = false;
        seaYes.current.checked = false;
        seaNo.current.checked = false;
        meatYes.current.checked = false;
        meatNo.current.checked = false;
        allergyYes.current.checked = false;
        allergyNo.current.checked = false;
        allergy1.current.value="";
    }

    
    // reset form end: 
    return (
        <div>
            <Accordion>
                <Accordion.Item eventKey="5">
                    <Accordion.Header><i className="bi bi-info-circle-fill me-1"></i><span style={{ fontWeight: '700' }}>FOOD INFORMATION</span></Accordion.Header>
                    <Accordion.Body>
                        <Container >
                            <Form style={{ paddingRight: '60px' }} >
                                <Row>
                                    <Col xs={12} lg={4} className='col'>
                                        <label className='text-muted me-2' htmlFor="foodtype">Food Type</label>
                                        <span style={{ whiteSpace: 'nowrap' }}>
                                            {['radio'].map((type) => (
                                                <div key={`inline-${type}`} >
                                                    <Form.Check style={{
                                                        padding: '20px'
                                                    }}
                                                        inline
                                                        label="Veg"
                                                        name="foodCateg"
                                                        type={type}
                                                        id={`inline-${type}-veg`}
                                                        defaultChecked={true}
                                                        ref={vegYes}
                                                    />
                                                    <Form.Check
                                                        style={{ marginRight: '5px' }}
                                                        inline
                                                        label="Non-Veg"
                                                        name="foodCateg"
                                                        type={type}
                                                        id={`inline-${type}-nonveg`}
                                                        ref={vegNo}
                                                    />
                                                </div>
                                            ))}
                                        </span>
                                    </Col>
                                    <Col xs={12} lg={4} className='col'>
                                        <label className='text-muted' htmlFor="foodtype">Eggiterian</label>
                                        {['radio'].map((type) => (
                                            <div key={`inline-${type}`} >

                                                <Form.Check style={{
                                                    padding: '20px'
                                                }}
                                                    inline
                                                    label="Yes"
                                                    name="eggit"
                                                    type={type}
                                                    id={`inline-${type}-yes`}
                                                    defaultChecked={true}
                                                    ref={eggYes}
                                                />
                                                <Form.Check
                                                    inline
                                                    label="No"
                                                    name="eggit"
                                                    type={type}
                                                    id={`inline-${type}-no`}
                                                    ref={eggNo}
                                                />
                                            </div>
                                        ))}
                                    </Col>
                                    <Col xs={12} lg={4} className='col'>
                                        <label className='text-muted' htmlFor="foodtype">Sea Food</label>
                                        {['radio'].map((type) => (
                                            <div key={`inline-${type}`} >
                                                <Form.Check style={{
                                                    padding: '20px'
                                                }}
                                                    inline
                                                    label="Yes"
                                                    name="seaFood"
                                                    type={type}
                                                    id={`inline-${type}-yes`}
                                                    ref={seaYes}

                                                />
                                                <Form.Check
                                                    inline
                                                    label="No"
                                                    name="seaFood"
                                                    type={type}
                                                    id={`inline-${type}-no`}
                                                    ref={seaNo}
                                                />
                                            </div>
                                        ))}
                                    </Col>
                                    <Col xs={12} lg={4} className='col me-2'>
                                        <label className='text-muted' htmlFor="foodtype">Red Meat</label>
                                        {['radio'].map((type) => (
                                            <div key={`inline-${type}`} >
                                                <Form.Check style={{
                                                    padding: '20px'
                                                }}
                                                    inline
                                                    label="Yes"
                                                    name="redmeet"
                                                    type={type}
                                                    id={`inline-${type}-yes`}
                                                    ref={meatYes}
                                                />
                                                <Form.Check
                                                    inline
                                                    label="No"
                                                    name="redmeet"
                                                    type={type}
                                                    id={`inline-${type}-no`}
                                                    ref={meatNo}
                                                />
                                            </div>
                                        ))}
                                    </Col>
                                    <Col xs={12} lg={4} className='col'>
                                        <label className='text-muted me-2' htmlFor="foodtype">Allergy if any</label>
                                        {['radio'].map((type) => (
                                            <div key={`inline-${type}`} >
                                                <Form.Check style={{
                                                    padding: '20px'
                                                }}
                                                    inline
                                                    label="Yes"
                                                    name="allergy"
                                                    type={type}
                                                    id={`inline-${type}-yes`}
                                                    ref={allergyYes}
                                                />
                                                <Form.Check
                                                    inline
                                                    label="No"
                                                    name="allergy"
                                                    type={type}
                                                    id={`inline-${type}-no`}
                                                    defaultChecked={true}
                                                    ref={allergyNo}
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
                                                ref={allergy1}
                                            />
                                            <label htmlFor="allergy" className='text-muted'>Allergy</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col lg={12} className='my-4 col'>
                                        <Button variant="primary" className='me-1 mb-2 mx-1 ' style={{ width: "130px" }}>PREVIOUS</Button>
                                        <Button variant="success" className='me-1 mb-2 mx-1 ' style={{ width: "130px" }}>Save and Next</Button>
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

export default FoodInformation