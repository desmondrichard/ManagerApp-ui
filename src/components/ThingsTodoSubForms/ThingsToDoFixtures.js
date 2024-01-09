import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
function ThingsToDoFixtures() {
  return (
    <div>
      <Row>
        <Col xs={12} lg={3} className='col'>
          {/*  */}
          <Form.Floating className="mb-2">
            <Form.Control
              id="dob1"
              type="date"
              min={new Date().toISOString().split('T')[0]}
              placeholder='DD-MM-YYYY'
              name="dob"

            />

            <label htmlFor="dob1" className='text-muted'>Date of Birth*</label>
          </Form.Floating>
        </Col>
        <Col>
          <Form.Floating className="mb-2">
            <Form.Control
              id="coachname"
              type="text"
              placeholder="coachname"
              name="coachname"
            />
            <label htmlFor="name" className='text-muted'>Ground Name*</label>
          </Form.Floating>
        </Col>
        <Col>
          <Form.Floating className="mb-2">
            <Form.Control
              id="coachname"
              type="text"
              placeholder="coachname"
              name="coachname"
            />
            <label htmlFor="name" className='text-muted'>Team A</label>
          </Form.Floating>
        </Col>
        <Col>
          <Form.Floating className="mb-2">
            <Form.Control
              id="coachname"
              type="text"
              placeholder="coachname"
              name="coachname"
            />
            <label htmlFor="name" className='text-muted'>Team B</label>
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

export default ThingsToDoFixtures