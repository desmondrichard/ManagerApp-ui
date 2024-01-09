import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function ThingsToDoMatchEquipments() {
  return (
    <div>
      <Row>
        <Col md={4} className='my-3'>
          <Form.Floating className="mb-2">
            <Form.Control
              id="equipname"
              type="text"
              placeholder="equipname"
              name="equipname"
            />
            <label htmlFor="equipname" className='text-muted'>Name*</label>
          </Form.Floating>
        </Col>
        <Col md={4} className='my-3'>
          <Form.Floating className="mb-2">
            <Form.Control
              id="equip"
              type="text"
              placeholder="equip"
              name="equip"
            />
            <label htmlFor="equip" className='text-muted'>Equipment</label>
          </Form.Floating>
        </Col>
        <Col md={4} className='my-3'>
          <Form.Floating className="mb-2">
            <Form.Control
              id="equiptype"
              type="text"
              placeholder="equiptype"
              name="equiptype"
            />
            <label htmlFor="equiptype" className='text-muted'>Equipment Type</label>
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

export default ThingsToDoMatchEquipments