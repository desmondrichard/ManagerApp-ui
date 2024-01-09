import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
function ThingsToDoHotelAccomodation() {
    return (
        <div>
            <Row>
                <Col md={3} className='my-3'>
                    <Form.Floating className="mb-2">
                        <Form.Control
                            id="hotelname"
                            type="text"
                            placeholder="hotelname"
                            name="hotelname"
                        />
                        <label htmlFor="hotelname" className='text-muted'>Hotel Name*</label>
                    </Form.Floating>
                </Col>
                <Col md={3}  className='my-3'>
                    <Form.Floating className="mb-2">
                        <Form.Control
                            id="cityname"
                            type="text"
                            placeholder="cityname"
                            name="cityname"
                        />
                        <label htmlFor="cityname" className='text-muted'>City Name*</label>
                    </Form.Floating>
                </Col>
                <Col md={3} className='my-3'>
                    <Form.Floating className="mb-2">
                        <Form.Control
                            id="noofrroms"
                            type="number"
                            placeholder="noofrroms"
                            name="noofrroms"
                            min="0"
                        />
                        <label htmlFor="noofrroms" className='text-muted'>No Of Rooms</label>
                    </Form.Floating>
                </Col>
                <Col md={3} className='my-3'>
                    <Form.Floating className="mb-2">
                        <Form.Control
                            id="roomno"
                            type="text"
                            placeholder="roomno"
                            name="roomno"
                        />
                        <label htmlFor="roomno" className='text-muted'>Room Number</label>
                    </Form.Floating>
                </Col>
                <Col md={3} className='my-3'>
                    <Form.Floating className="mb-2">
                        <Form.Control
                            id="checkin"
                            type="date"
                            min={new Date().toISOString().split('T')[0]}
                            placeholder='DD-MM-YYYY'
                            name="checkin"
                        />

                        <label htmlFor="checkin" className='text-muted'>Check In</label>
                    </Form.Floating>
                </Col>
                <Col md={3} className='my-3'>
                    <Form.Floating className="mb-2">
                        <Form.Control
                            id="checkout"
                            type="date"
                            min={new Date().toISOString().split('T')[0]}
                            placeholder='DD-MM-YYYY'
                            name="checkout"
                        />

                        <label htmlFor="checkout" className='text-muted'>Check Out</label>
                    </Form.Floating>
                </Col>
                <Col md={3} className='my-3'>
                    <Form.Floating className="mb-2">
                        <Form.Control
                            id="daysstayed"
                            type="number"
                            placeholder="daysstayed"
                            name="daysstayed"
                            min="0"
                        />
                        <label htmlFor="daysstayed" className='text-muted'>Days Stayed</label>
                    </Form.Floating>
                </Col>
                <Col md={3} className='my-3'>
                    <Form.Floating className="mb-2">
                        <Form.Control
                            id="noofpeople"
                            type="number"
                            placeholder="noofpeople"
                            name="noofpeople"
                            min="0"
                        />
                        <label htmlFor="noofpeople" className='text-muted'>No Of people</label>
                    </Form.Floating>
                </Col>
            </Row>
            <Row>
                <Col className='end btns'>
                    <Button variant="danger" className='mx-2' style={{ color: 'white' }}>BACK</Button>
                    <Button variant="warning" className='mx-2' style={{ color: 'white' }}>CLEAR</Button>
                    <Button variant="success" className='mx-2' type="submit">SAVE AND NEXT</Button>
                </Col>
            </Row>
        </div>
    )
}

export default ThingsToDoHotelAccomodation