import React, { useRef } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useFormik } from 'formik';
function ThingsToDoPhysiotherapist() {
  //reset:
  const name1 = useRef("");
  const desig = useRef("");

  function handleReset() {
    name1.current.value = "";
    desig.current.value = "none";
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
                  id="coachname"
                  type="text"
                  placeholder="coachname"
                  name="coachname"
                  ref={name1}
                />
                <label htmlFor="name" className='text-muted'>Coach/Physiotherapist Name*</label>
              </Form.Floating>
            </Col>
            <Col xs={12} md={4} className='py-3'>
              <FloatingLabel className='mb-2 c1'
                controlId="coach"
                label="Designation"
              >
                <Form.Select aria-label="designation" ref={desig}>
                  <option value="none">Select Type</option>
                  <option value="year1">Coach Physiotherapist</option>
                </Form.Select>
              </FloatingLabel>
            </Col>
            <Col xs={12} md={2} className='col1'>

            </Col>
            <Col xs={12} md={2} className='col1'>

            </Col>
          </Row>
          <Row>
            <Col className='end btns'>
              <Button variant="danger" className='mx-2' style={{ color: 'white' }}>BACK</Button>
              <Button variant="warning" className='mx-2' style={{ color: 'white' }} onClick={() => handleReset()}>CLEAR</Button>
              <Button variant="success" className='mx-2' type="submit">SAVE AND NEXT</Button>
            </Col>
          </Row>
        </Form>
      </Card>
    </div>
  )
}

export default ThingsToDoPhysiotherapist