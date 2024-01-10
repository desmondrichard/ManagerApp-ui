import React, { useRef } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useFormik } from 'formik';
function ThingsToDoHotelAccomodation() {
    //reset:
    const name1 = useRef("");
    const cityName = useRef("");
    const noOfRoom = useRef("");
    const roomNo = useRef("");
    const checkIn = useRef("");
    const checkOut = useRef("");
    const stayed = useRef("");
    const noOfPeople = useRef("");

    function handleReset() {
        name1.current.value = "";
        cityName.current.value = "";
        noOfRoom.current.value = "";
        roomNo.current.value = "";
        checkIn.current.value = "";
        checkOut.current.value = "";
        stayed.current.value = "";
        noOfPeople.current.value = "";
        // formik.resetForm();
    }

    function checkIfCheckoutAfterCheckin(checkinDate, checkoutDate) {
        const checkin = new Date(checkinDate);
        const checkout = new Date(checkoutDate);
        if (checkout < checkin) {
            alert('Checkout date must be after checkin date.');
            checkOut.current.value = ''; // clear the checkout date
        }
    }
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
                            ref={name1}
                        />
                        <label htmlFor="hotelname" className='text-muted'>Hotel Name*</label>
                    </Form.Floating>
                </Col>
                <Col md={3} className='my-3'>
                    <Form.Floating className="mb-2">
                        <Form.Control
                            id="cityname"
                            type="text"
                            placeholder="cityname"
                            name="cityname"
                            ref={cityName}
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
                            ref={noOfRoom}
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
                            ref={roomNo}
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
                            ref={checkIn}
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
                            ref={checkOut}
                            onChange={(e) => checkIfCheckoutAfterCheckin(checkIn.current.value, e.target.value)}
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
                            ref={stayed}
                        />
                        <label htmlFor="daysstayed" className='text-muted'>Days Stayed</label>
                    </Form.Floating>
                </Col>
                <Col md={3} className='my-3'>
                    <Form.Floating className="mb-2">
                        <Form.Control
                            id="noOfPeople"
                            type="number"
                            placeholder="noOfPeople"
                            name="noOfPeople"
                            min="0"
                            ref={noOfPeople}
                        />
                        <label htmlFor="noofpeople" className='text-muted'>No Of people</label>
                    </Form.Floating>
                </Col>
            </Row>
            <Row>
                <Col className='end btns'>
                    <Button variant="danger" className='mx-2' style={{ color: 'white' }}>BACK</Button>
                    <Button variant="warning" className='mx-2' style={{ color: 'white' }} onClick={() => handleReset()}>CLEAR</Button>
                    <Button variant="success" className='mx-2' type="submit">SAVE AND NEXT</Button>
                </Col>
            </Row>
        </div>
    )
}

export default ThingsToDoHotelAccomodation