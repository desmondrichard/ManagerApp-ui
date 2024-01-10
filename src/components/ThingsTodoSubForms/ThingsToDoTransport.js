import React, { useRef } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useFormik } from 'formik';

function ThingsToDoTransport() {
  //reset:
  const leavingFrom = useRef("");
  const goingTo = useRef("");
  const journeyDate = useRef("");
  const returnDate = useRef("");
  const seatBooked = useRef("");
  const seatNo = useRef("");
  const transportType=useRef("");
  const travelType=useRef("");
  const busType=useRef("");

  function handleReset() {
    leavingFrom.current.value = "";
    goingTo.current.value = "";
    journeyDate.current.value = "";
    returnDate.current.value = "";
    seatBooked.current.value = "";
    seatNo.current.value = "";
    transportType.current.value = "none";
    travelType.current.value = "none";
    busType.current.value = "none";
    // formik.resetForm();
  }
  return (
    <div>
      <Row>
        <Col md={3}>
          <Form.Floating className="mb-2 mt-3">
            <Form.Control
              id="leavingfrom"
              type="text"
              placeholder="leavingfrom"
              name="leavingfrom"
              ref={leavingFrom}
            />
            <label htmlFor="leavingfrom" className='text-muted'>Leaving From*</label>
          </Form.Floating>
        </Col>
        <Col md={3}>
          <Form.Floating className="mb-2 mt-3">
            <Form.Control
              id="goingto"
              type="text"
              placeholder="goingto"
              name="goingto"
              ref={goingTo}
            />
            <label htmlFor="goingto" className='text-muted'>Going To*</label>
          </Form.Floating>
        </Col>
        <Col md={3}>
          <Form.Floating className="mb-2 mt-3">
            <Form.Control
              id="journeydate"
              type="date"
              min={new Date().toISOString().split('T')[0]}
              placeholder='DD-MM-YYYY'
              name="journeydate"
              ref={journeyDate}
            />
            <label htmlFor="journeydate" className='text-muted'>Date Of Journey</label>
          </Form.Floating>
        </Col>
        <Col md={3}>
          <Form.Floating className="mb-2 mt-3">
            <Form.Control
              id="returndate"
              type="date"
              min={new Date().toISOString().split('T')[0]}
              placeholder='DD-MM-YYYY'
              name="returndate"
              ref={returnDate}
            />
            <label htmlFor="returndate" className='text-muted'>Return Date</label>
          </Form.Floating>
        </Col>
        <Col md={3}>
          <FloatingLabel className='mb-2 c1'
            controlId="transporttype"
            label="Transport Type@"
          >
            <Form.Select aria-label="transporttype" ref={transportType}>
              <option value="none">Select Type</option>
              <option value="year1">Roadways</option>
              <option value="year1">Railways</option>
              <option value="year1">Airways</option>
            </Form.Select>
          </FloatingLabel>
        </Col>
        <Col md={3}>
          <FloatingLabel className='mb-2 c1'
            controlId="traveltype"
            label="Travel Type"
          >
            <Form.Select aria-label="traveltype" ref={travelType}>
              <option value="none">Select Type</option>
              <option value="year1">Roadways</option>
              <option value="year1">Railways</option>
              <option value="year1">Airways</option>
            </Form.Select>
          </FloatingLabel>
        </Col>
        <Col md={3}>
          <FloatingLabel className='mb-2 c1'
            controlId="bustype"
            label="Bus Type*"
          >
            <Form.Select aria-label="bustype" ref={busType}>
              <option value="none">Select Type</option>
              <option value="year1">Roadways</option>
              <option value="year1">Railways</option>
              <option value="year1">Airways</option>
            </Form.Select>
          </FloatingLabel>
        </Col>
        <Col md={3}>
          <Form.Floating className="mb-2">
            <Form.Control
              id="noofseats"
              type="number"
              placeholder="noofseats"
              name="noofseats"
              min="0"
              ref={seatBooked}
            />
            <label htmlFor="noofseats" className='text-muted'>No Of Seats Booked</label>
          </Form.Floating>
        </Col>
        <Col md={3}>
          <Form.Floating className="mb-2">
            <Form.Control
              id="seatnos"
              type="text"
              placeholder="seatnos"
              name="seatnos"
              ref={seatNo}
            />
            <label htmlFor="seatnos" className='text-muted'>Seat No</label>
          </Form.Floating>
        </Col>
      </Row>
      <Row>
        <Col className='end btns'>
          <Button variant="danger" className='mx-2' style={{ color: 'white' }}>BACK</Button>
          <Button variant="warning" className='mx-2' style={{ color: 'white' }} onClick={() => handleReset()}>CLEAR</Button>
          <Button variant="success" className='mx-2' type="submit">SAVE</Button>
        </Col>
      </Row>
    </div>
  )
}

export default ThingsToDoTransport