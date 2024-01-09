import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './ThingsToDoBranding.css';

function ThingsToDoBranding() {
  return (
    <div>
      <Card className='bg-light p-4'>
        <Form>
          <Row className='fw-bold' style={{ fontSize: '16px' }}>
            <Col xs={12} md={4} className='py-3'>
              <Form.Check label="Team Logo" />
            </Col>
            <Col xs={12} md={4} className='py-3'>
              <Form.Check label="Team Flag" />
            </Col>
            <Col xs={12} md={4} className='py-3'>
              <Form.Check label="Side Flag" />
            </Col>
            <Col xs={12} md={4} className='py-3'>
              <Form.Check label="Standees" />
            </Col>
            <Col xs={12} md={4} className='py-3'>
              <Form.Check label="Bus Branding" />
            </Col>
            <Col xs={12} md={4} className='py-3'>
              <Form.Check label="Bus Booking" />
            </Col>

          </Row>
          <Row>
            <Col className='end btns'>
              <Button variant="danger" className='mx-2' style={{ color: 'white' }}>BACK</Button>
              <Button variant="warning" className='mx-2' style={{ color: 'white' }}>CLEAR</Button>
              <Button variant="success" className='mx-2' type="submit">SAVE AND NEXT</Button>
            </Col>
          </Row>
        </Form>
      </Card>
    </div>
  )
}

export default ThingsToDoBranding