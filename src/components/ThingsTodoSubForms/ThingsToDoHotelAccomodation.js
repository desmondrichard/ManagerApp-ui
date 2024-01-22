import React, { useRef, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useFormik } from 'formik';

const validate = values => {
    const errors = {};

    if (!values.hotelName) {
        errors.hotelName = "*Required";
    }
    else if (!/^[a-zA-Z ]*$/.test(values.hotelName)) {
        errors.hotelName = "enter a valid name";
    }


    if (!values.cityName) {
        errors.cityName = "*Required";
    }
    else if (!/^[a-zA-Z ]*$/.test(values.cityName)) {
        errors.cityName = "enter a valid name";
    }

    if (!/^\d{0,3}?$/.test(values.noOfRoom)) {
        errors.noOfRoom = "enter a valid number";
    }

    if (!/^\d{0,3}?$/.test(values.roomNo)) {
        errors.roomNo = "enter a valid number";
    }

    if (!/^\d{0,3}?$/.test(values.daysStayed)) {
        errors.daysStayed = "enter a valid number";
    }

    if (!/^\d{0,3}?$/.test(values.noOfPeople)) {
        errors.noOfPeople = "enter a valid number";
    }


    return errors;
}
function ThingsToDoHotelAccomodation({ activationKey, onChildNextActivationKey }) {
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
        formik.resetForm();
    }
    const formik = useFormik({
        initialValues: {
            hotelName: '',
            cityName: '',
            teamB: '',
            noOfRoom: '',
            roomNo: '',
            daysStayed: '',
            noOfPeople: ''
        },
        validate,
        onSubmit: values => {
            alert(`Hello! ,${values.groundName} you have successfully signed up`);
            onChildNextActivationKey(childNextKey)

        }
    });

    function checkIfCheckoutAfterCheckin(checkinDate, checkoutDate) {
        const checkin = new Date(checkinDate);
        const checkout = new Date(checkoutDate);
        if (checkout < checkin) {
            alert('Checkout date must be after checkin date.');
            checkOut.current.value = ''; // clear the checkout date
        }
    }

    const [childNextKey, setChildNextKey] = useState("5");

    return (
        <div>
            <Form onSubmit={formik.handleSubmit}>
                <Row>
                    <Col md={3} className='my-3'>
                        <Form.Floating className="mb-2">
                            <Form.Control
                                id="hotelName"
                                type="text"
                                placeholder="hotelname"
                                ref={name1}
                                name="hotelName"
                                value={formik.values.hotelName} onBlur={formik.handleBlur} onChange={formik.handleChange}
                            />
                            {
                                formik.touched.hotelName && formik.errors.hotelName ? <span className='span'>{formik.errors.hotelName}</span> : null
                            }

                            <label htmlFor="hotelName" className='text-muted'>Hotel Name*</label>
                        </Form.Floating>
                    </Col>
                    <Col md={3} className='my-3'>
                        <Form.Floating className="mb-2">
                            <Form.Control
                                id="cityName"
                                type="text"
                                placeholder="cityName"
                                ref={cityName}
                                name="cityName"
                                value={formik.values.cityName} onBlur={formik.handleBlur} onChange={formik.handleChange}
                            />
                            {
                                formik.touched.cityName && formik.errors.cityName ? <span className='span'>{formik.errors.cityName}</span> : null
                            }
                            <label htmlFor="cityName" className='text-muted'>City Name*</label>
                        </Form.Floating>
                    </Col>
                    <Col md={3} className='my-3'>
                        <Form.Floating className="mb-2">
                            <Form.Control
                                id="noofrroms"
                                type="text"
                                placeholder="noofrroms"
                                ref={noOfRoom}
                                name="noOfRoom"
                                value={formik.values.noOfRoom} onBlur={formik.handleBlur} onChange={formik.handleChange}
                            />
                            {
                                formik.touched.noOfRoom && formik.errors.noOfRoom ? <span className='span'>{formik.errors.noOfRoom}</span> : null
                            }
                            <label htmlFor="noOfRoom" className='text-muted'>No Of Rooms</label>
                        </Form.Floating>
                    </Col>
                    <Col md={3} className='my-3'>
                        <Form.Floating className="mb-2">
                            <Form.Control
                                id="roomNo"
                                type="text"
                                placeholder="roomno"
                                ref={roomNo}
                                name="roomNo"
                                value={formik.values.roomNo} onBlur={formik.handleBlur} onChange={formik.handleChange}
                            />
                            {
                                formik.touched.roomNo && formik.errors.roomNo ? <span className='span'>{formik.errors.roomNo}</span> : null
                            }
                            <label htmlFor="roomNo" className='text-muted'>Room Number</label>
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
                                type="text"
                                placeholder="daysstayed"
                                name="daysStayed"
                                ref={stayed}
                                value={formik.values.daysStayed} onBlur={formik.handleBlur} onChange={formik.handleChange}
                            />
                            {
                                formik.touched.daysStayed && formik.errors.daysStayed ? <span className='span'>{formik.errors.daysStayed}</span> : null
                            }
                            <label htmlFor="daysStayed" className='text-muted'>Days Stayed</label>
                        </Form.Floating>
                    </Col>
                    <Col md={3} className='my-3'>
                        <Form.Floating className="mb-2">
                            <Form.Control
                                id="noOfPeople"
                                type="text"
                                placeholder="noOfPeople"
                                ref={noOfPeople}
                                value={formik.values.noOfPeople} onBlur={formik.handleBlur} onChange={formik.handleChange}
                            />
                            {
                                formik.touched.noOfPeople && formik.errors.noOfPeople ? <span className='span'>{formik.errors.noOfPeople}</span> : null
                            }
                            <label htmlFor="noOfPeople" className='text-muted'>No Of people</label>
                        </Form.Floating>
                    </Col>
                </Row>
                <Row>
                    <Col className='end btns'>
                        <Button variant="danger" className='mx-2' style={{ color: 'white' }}>BACK</Button>
                        <Button variant="warning" className='mx-2' style={{ color: 'white' }} onClick={() => handleReset()}>CLEAR</Button>
                        <Button variant="success" className='mx-2' type="submit" disabled={Object.keys(formik.errors).length > 0 || formik.values.hotelName === '' || formik.values.cityName === ''}>SAVE AND NEXT</Button>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}

export default ThingsToDoHotelAccomodation