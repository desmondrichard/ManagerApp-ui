import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import Phone from './offcanvas-body/Phone';
import './AccreditionFormTab.css';
function AccreditionFormTab() {
  return (
    <div className='my-2'>
      {/* Tabs: start*/}
      <Container fluid >
        <Row style={{ margin: '0px' }}>
          <Tabs justify variant='pills' defaultkey='tab-1' className='mb-1 p-0 tab'>
            {/* Tab:1 */}
            <Tab eventKey='tab-1' title='Players'>
              <Card className='bg-light p-4'>
                <Row className='fw-bold' style={{ fontSize: '16px' }}>
                  <Col xs={12} md={4} className='py-3 c1'>
                    <Form.Floating className="mb-2">
                      <Form.Control
                        id="name"
                        type="text"
                        placeholder="name"
                      />
                      <label htmlFor="name" className='text-muted'>Name</label>
                    </Form.Floating>
                  </Col>
                  <Col xs={12} md={4} className='py-3 c1'>
                    <FloatingLabel className='mb-2 c1'
                      controlId="designation"
                      label="Designation"
                    >
                      <Form.Select aria-label="designation">
                        <option>Select Type</option>
                        <option value="year1">Player</option>
                      </Form.Select>
                    </FloatingLabel>
                  </Col>
                  <Col xs={12} md={4} className='py-3 c1'>
                    <Phone />
                  </Col>
                  <Col xs={12} md={4} className='py-3 c1'>
                    <Form.Floating className="mb-2">
                      <Form.Control
                        id="email"
                        type="email"
                        placeholder="email"
                      />
                      <label htmlFor="email" className='text-muted'>Email ID</label>
                    </Form.Floating>
                  </Col>
                  <Col xs={12} md={4} className='py-3 c1'>
                    <FloatingLabel className='mb-2 c1'
                      controlId="dutypass"
                      label="Duty Pass*"
                    >
                      <Form.Select aria-label="dutypass">
                        <option>Select Type</option>
                        <option value="year1">Yes</option>
                        <option value="year2">No</option>
                      </Form.Select>
                    </FloatingLabel>
                  </Col>
                  <Col xs={12} md={4} className='py-3 c1'>
                    <FloatingLabel
                      controlId="year"
                      label="Year*"
                    >
                      <Form.Select aria-label="year">
                        <option>Select Type</option>
                        <option value="year1">2023</option>
                        <option value="year2">2024</option>
                        <option value="year3">2025</option>
                      </Form.Select>
                    </FloatingLabel>
                  </Col>
                </Row>
                <Row>
                  <Col className='end btns'>
                    <Button variant="warning" className='mx-2' style={{ color: 'white' }}>CLEAR</Button>
                    <Button variant="success" className='mx-2'>SAVE</Button>
                    <Button variant="primary">NEXT</Button>
                  </Col>

                </Row>
              </Card>
            </Tab>

            {/* Tab:2 */}
            <Tab eventKey='tab-2' title='Support Staffs'>
              <Card className='bg-light p-4'>
                <Row className='fw-bold' style={{ fontSize: '16px' }}>
                  <Col xs={12} md={{ span: 4 }} className='py-3 c1'>
                    <Form.Floating className="mb-2">
                      <Form.Control
                        id="name"
                        type="text"
                        placeholder="name"
                      />
                      <label htmlFor="name" className='text-muted'>Name</label>
                    </Form.Floating>
                  </Col>
                  <Col xs={12} md={4} className='py-3 c1'>
                    <FloatingLabel className='mb-2 c1'
                      controlId="designation"
                      label="Designation"
                    >
                      <Form.Select aria-label="designation">
                        <option>Select Type</option>
                        <option value="year1">Player</option>
                      </Form.Select>
                    </FloatingLabel>
                  </Col>
                  <Col xs={12} md={4} className='py-3 c1'>
                    <Phone />
                  </Col>
                  <Col xs={12} md={4} className='py-3 c1'>
                    <Form.Floating className="mb-2">
                      <Form.Control
                        id="email"
                        type="email"
                        placeholder="email"
                      />
                      <label htmlFor="email" className='text-muted'>Email ID</label>
                    </Form.Floating>
                  </Col>
                  <Col xs={12} md={4} className='py-3 c1'>
                    <FloatingLabel className='mb-2 c1'
                      controlId="dutypass"
                      label="Duty Pass*"
                    >
                      <Form.Select aria-label="dutypass">
                        <option>Select Type</option>
                        <option value="year1">Yes</option>
                        <option value="year2">No</option>
                      </Form.Select>
                    </FloatingLabel>
                  </Col>
                  <Col xs={12} md={4} className='py-3 c1'>
                    <FloatingLabel
                      controlId="year"
                      label="Year*"
                    >
                      <Form.Select aria-label="year">
                        <option>Select Type</option>
                        <option value="year1">2023</option>
                        <option value="year2">2024</option>
                        <option value="year3">2025</option>
                      </Form.Select>
                    </FloatingLabel>
                  </Col>
                </Row>
                <Row>
                  <Col className='end btns'>
                    <Button variant="dark" className='me-1'>BACK</Button>
                    <Button variant="warning" className='me-1' style={{ color: 'white' }}>CLEAR</Button>
                    <Button variant="success" className='me-1'>SAVE</Button>
                    <Button variant="primary">NEXT</Button>
                  </Col>

                </Row>
              </Card>
            </Tab>

            {/* Tab:3 */}
            <Tab eventKey='tab-3' title='Owners/Management'>
              <Card className='bg-light p-4'>
                <Row className='fw-bold' style={{ fontSize: '16px' }}>
                  <Col xs={12} md={{ span: 4 }} className='py-3 c1'>
                    <Form.Floating className="mb-2">
                      <Form.Control
                        id="name"
                        type="text"
                        placeholder="name"
                      />
                      <label htmlFor="name" className='text-muted'>Name</label>
                    </Form.Floating>
                  </Col>
                  <Col xs={12} md={4} className='py-3 c1'>
                    <FloatingLabel className='mb-2 c1'
                      controlId="designation"
                      label="Designation"
                    >
                      <Form.Select aria-label="designation">
                        <option>Select Type</option>
                        <option value="year1">Player</option>
                      </Form.Select>
                    </FloatingLabel>
                  </Col>
                  <Col xs={12} md={4} className='py-3 c1'>
                    <Phone />
                  </Col>
                  <Col xs={12} md={4} className='py-3 c1'>
                    <Form.Floating className="mb-2">
                      <Form.Control
                        id="email"
                        type="email"
                        placeholder="email"
                      />
                      <label htmlFor="email" className='text-muted'>Email ID</label>
                    </Form.Floating>
                  </Col>
                  <Col xs={12} md={4} className='py-3 c1'>
                    <FloatingLabel className='mb-2 c1'
                      controlId="dutypass"
                      label="Duty Pass*"
                    >
                      <Form.Select aria-label="dutypass">
                        <option>Select Type</option>
                        <option value="year1">Yes</option>
                        <option value="year2">No</option>
                      </Form.Select>
                    </FloatingLabel>
                  </Col>
                  <Col xs={12} md={4} className='py-3 c1'>
                    <FloatingLabel
                      controlId="year"
                      label="Year*"
                    >
                      <Form.Select aria-label="year">
                        <option>Select Type</option>
                        <option value="year1">2023</option>
                        <option value="year2">2024</option>
                        <option value="year3">2025</option>
                      </Form.Select>
                    </FloatingLabel>
                  </Col>
                </Row>
                <Row>
                  <Col className='end btns'>
                    <Button variant="dark" className='me-1'>BACK</Button>
                    <Button variant="warning" className='me-1' style={{ color: 'white' }}>CLEAR</Button>
                    <Button variant="success" className='me-1'>SAVE</Button>
                    <Button variant="primary">NEXT</Button>
                  </Col>

                </Row>
              </Card>
            </Tab>
            {/* Tab:4 */}
            <Tab eventKey='tab-4' title='Franchise Officials'>
              <Card className='bg-light p-4'>
                <Row className='fw-bold' style={{ fontSize: '16px' }}>
                  <Col xs={12} md={{ span: 4 }} className='py-3 c1'>
                    <Form.Floating className="mb-2">
                      <Form.Control
                        id="name"
                        type="text"
                        placeholder="name"
                      />
                      <label htmlFor="name" className='text-muted'>Name</label>
                    </Form.Floating>
                  </Col>
                  <Col xs={12} md={4} className='py-3 c1'>
                    <FloatingLabel className='mb-2 c1'
                      controlId="designation"
                      label="Designation"
                    >
                      <Form.Select aria-label="designation">
                        <option>Select Type</option>
                        <option value="year1">Player</option>
                      </Form.Select>
                    </FloatingLabel>
                  </Col>
                  <Col xs={12} md={4} className='py-3 c1'>
                    <Phone />
                  </Col>
                  <Col xs={12} md={4} className='py-3 c1'>
                    <Form.Floating className="mb-2">
                      <Form.Control
                        id="email"
                        type="email"
                        placeholder="email"
                      />
                      <label htmlFor="email" className='text-muted'>Email ID</label>
                    </Form.Floating>
                  </Col>
                  <Col xs={12} md={4} className='py-3 c1'>
                    <FloatingLabel className='mb-2 c1'
                      controlId="dutypass"
                      label="Duty Pass*"
                    >
                      <Form.Select aria-label="dutypass">
                        <option>Select Type</option>
                        <option value="year1">Yes</option>
                        <option value="year2">No</option>
                      </Form.Select>
                    </FloatingLabel>
                  </Col>
                  <Col xs={12} md={4} className='py-3 c1'>
                    <FloatingLabel
                      controlId="year"
                      label="Year*"
                    >
                      <Form.Select aria-label="year">
                        <option>Select Type</option>
                        <option value="year1">2023</option>
                        <option value="year2">2024</option>
                        <option value="year3">2025</option>
                      </Form.Select>
                    </FloatingLabel>
                  </Col>
                </Row>
                <Row>
                  <Col className='end btns'>
                    <Button variant="dark" className='mx-2'>BACK</Button>
                    <Button variant="warning" className='mx-2' style={{ color: 'white' }}>CLEAR</Button>
                    <Button variant="success" className='mx-2'>SAVE</Button>
                    <Button variant="primary">NEXT</Button>
                  </Col>

                </Row>
              </Card>
            </Tab>
            {/* Tab:5 */}
            <Tab eventKey='tab-5' title='Franchise Sponsors'>
              <Card className='bg-light p-4'>
                <Row className='fw-bold' style={{ fontSize: '16px' }}>
                  <Col xs={12} md={{ span: 4 }} className='py-3 c1'>
                    <Form.Floating className="mb-2">
                      <Form.Control
                        id="name"
                        type="text"
                        placeholder="name"
                      />
                      <label htmlFor="name" className='text-muted'>Name</label>
                    </Form.Floating>
                  </Col>
                  <Col xs={12} md={4} className='py-3 c1'>
                    <FloatingLabel className='mb-2 c1'
                      controlId="designation"
                      label="Designation"
                    >
                      <Form.Select aria-label="designation">
                        <option>Select Type</option>
                        <option value="year1">Player</option>
                      </Form.Select>
                    </FloatingLabel>
                  </Col>
                  <Col xs={12} md={4} className='py-3 c1'>
                    <Phone />
                  </Col>
                  <Col xs={12} md={4} className='py-3 c1'>
                    <Form.Floating className="mb-2">
                      <Form.Control
                        id="email"
                        type="email"
                        placeholder="email"
                      />
                      <label htmlFor="email" className='text-muted'>Email ID</label>
                    </Form.Floating>
                  </Col>
                  <Col xs={12} md={4} className='py-3 c1'>
                    <FloatingLabel className='mb-2 c1'
                      controlId="dutypass"
                      label="Duty Pass*"
                    >
                      <Form.Select aria-label="dutypass">
                        <option>Select Type</option>
                        <option value="year1">Yes</option>
                        <option value="year2">No</option>
                      </Form.Select>
                    </FloatingLabel>
                  </Col>
                  <Col xs={12} md={4} className='py-3 c1'>
                    <FloatingLabel
                      controlId="year"
                      label="Year*"
                    >
                      <Form.Select aria-label="year">
                        <option>Select Type</option>
                        <option value="year1">2023</option>
                        <option value="year2">2024</option>
                        <option value="year3">2025</option>
                      </Form.Select>
                    </FloatingLabel>
                  </Col>
                </Row>
                <Row>
                  <Col className='text-end btns'>
                    <Button variant="dark" className='mx-2'>BACK</Button>
                    <Button variant="warning" className='mx-2' style={{ color: 'white' }}>CLEAR</Button>
                    <Button variant="success" className='mx-2'>SAVE</Button>
                    <Button variant="primary">NEXT</Button>
                  </Col>

                </Row>
              </Card>
            </Tab>

          </Tabs>
        </Row>

      </Container>
      {/* Tabs:end */}
    </div>
  )
}

export default AccreditionFormTab