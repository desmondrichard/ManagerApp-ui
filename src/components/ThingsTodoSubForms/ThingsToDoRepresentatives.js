import React, { useRef } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './ThingsToDoRepresentatives.css';
import { useFormik } from 'formik';
function ThingsToDoRepresentatives() {
  //reset:
  const name1 = useRef("");
  const uniformChecked = useRef(false);
  const tshirtChecked = useRef(false);

  function handleReset() {
    name1.current.value = "";
    uniformChecked.current.checked = false;
    tshirtChecked.current.checked = false;
    // formik.resetForm();
  }
  return (
    <div>
      <Card className='bg-light p-4'>
        <Form>
          <Row className='fw-bold' style={{ fontSize: '16px' }}>
            <Col xs={12} md={4} className='py-3'>
              <Form.Floating className="mb-2">
                <Form.Control
                  id="name"
                  type="text"
                  placeholder="name"
                  ref={name1}
                  name="name"
                />
                <label htmlFor="name" className='text-muted'>Representatives Name*</label>
              </Form.Floating>
            </Col>
            <Col xs={12} md={4} className='col1'>
              <Form.Check label="Team Uniform" ref={uniformChecked}/>
            </Col>
            <Col xs={12} md={4} className='col1'>
              <Form.Check label="Team Tshirt" ref={tshirtChecked}/>
            </Col>
          </Row>
          <Row>
            <Col className='end btns'>
              <Button variant="warning" className='mx-2' style={{ color: 'white' }} onClick={() => handleReset()}>CLEAR</Button>
              <Button variant="success" className='mx-2' type="submit">SAVE AND NEXT</Button>
            </Col>
          </Row>
        </Form>
      </Card>
    </div>
  )
}

export default ThingsToDoRepresentatives