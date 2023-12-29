import React from 'react';
import './ThingsToDo.css';
import Header from './Header';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Tab, Tabs } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { NavLink } from 'react-router-dom';
import ExploreOptions from './ModalComponents/ExploreOptions';

function ThingsTodo() {

  return (
    <div>
      <Header />
      <div className='text-center'>
        <div className='playersList'>THINGS TODO LIST</div>

        <>
          {/* <NavLink to='/thingstodoform' className='navLinks'><Button variant="primary" className='mt-3 addPlayers'>
            ADD THINGS
          </Button>
          </NavLink> */}
        </>

        <Container fluid className='py-2 mt-4 bg-light'>
          <Row>
            <Col sm={{span:4,offset:9}} xs={12}>
              <ExploreOptions />
            </Col>
          </Row>
        </Container>
      </div>

      {/* Tabs: start*/}
      <Container fluid className='p-0 m-0'>
          <Row style={{ margin: '0px' }} className=''>
            <Tabs justify variant='pills' defaultkey='tab-1' className='mb-1 p-0 tab'>
              {/* Tab:0 */}
            <Tab eventKey='tab-0' title='Branding'>
                <Table striped hover responsive className='tableHead table-dark'
                >
                  <thead>
                    <tr className='text-center thead' style={{ whiteSpace: 'nowrap'}}>
                      <th className='font'>ID</th>
                      <th className='font'>Team Logo</th>
                      <th className='font'>Team Flage</th>
                      <th className='font'>Side Flages</th>
                      <th className='font'>Standees</th>
                      <th className='font'>Bus Branding</th>
                      <th className='font'>Bus Booking</th>
                      <th className='font'>Action</th>

                    </tr>
                  </thead>
                  <tbody className='table-light' style={{ fontSize: '13px' }}>
                    <tr className='text-center font'>
                      <td>1</td>
                      <td>2</td>
                      <td>3</td>
                      <td>4</td>
                      <td>5</td>
                      <td>6</td>
                      <td>7</td>
                      <td><Button variant="primary" style={{marginTop:'-7px'}}><i className="bi bi-eye-fill"></i></Button></td>
                    </tr>
                  </tbody>
                </Table>
              </Tab>

              {/* Tab:1 */}
              <Tab eventKey='tab-1' title='Representative'>
                <Table striped hover responsive className='tableHead table-dark'
                >
                  <thead>
                    <tr className='text-center thead' style={{ whiteSpace: 'nowrap' }}>
                      <th className='font'>ID</th>
                      <th className='font'>Representatives</th>
                      <th className='font'>Team Uniform</th>
                      <th className='font'>Team Tshirt</th>
                      <th className='font'>Action</th>

                    </tr>
                  </thead>
                  <tbody className='table-light' style={{ fontSize: '13px' }}>
                    <tr className='text-center font'>
                      <td>1</td>
                      <td>2</td>
                      <td>3</td>
                      <td>4</td>
                      <td><Button variant="primary" style={{marginTop:'-7px'}}><i className="bi bi-eye-fill"></i></Button> <Button variant="primary"  style={{marginTop:'-7px'}}><i className="bi bi-trash"></i></Button> </td>
                    </tr>
                  </tbody>
                </Table>
              </Tab>

              {/* Tab:2 */}
              <Tab eventKey='tab-2' title='Coach Therapist'>
                <Table striped hover responsive className='tableHead table-dark'
                >
                  <thead>
                    <tr className='text-center thead' style={{ whiteSpace: 'nowrap' }}>
                      <th className='font'>ID</th>
                      <th className='font'>Name</th>
                      <th className='font'>Designation</th>
                      <th className='font'>Action</th>
                    </tr>
                  </thead>
                  <tbody className='table-light' style={{ fontSize: '13px' }}>
                    <tr className='text-center font'>
                      <td>1</td>
                      <td>2</td>
                      <td>3</td>
                      <td><Button variant="primary" style={{marginTop:'-7px'}}><i className="bi bi-eye-fill"></i></Button></td>
                      
                    </tr>
                  </tbody>
                </Table>
              </Tab>

              {/* Tab:3 */}
              <Tab eventKey='tab-3' title='Fixtures'>
                <Table striped hover responsive className='tableHead table-dark'
                >
                  <thead>
                    <tr className='text-center thead' style={{ whiteSpace: 'nowrap' }}>
                      <th className='font'>ID</th>
                      <th className='font'>Date</th>
                      <th className='font'>Ground Name</th>
                      <th className='font'>Team A</th>
                      <th className='font'>Team B</th>
                      <th className='font'>Action</th>
                    </tr>
                  </thead>
                  <tbody className='table-light' style={{ fontSize: '13px' }}>
                    <tr className='text-center font'>
                      <td>1</td>
                      <td>2</td>
                      <td>3</td>
                      <td>4</td>
                      <td>5</td>
                      <td><Button variant="primary" style={{marginTop:'-7px'}}><i className="bi bi-eye-fill"></i></Button></td>

                    </tr>
                  </tbody>
                </Table>
              </Tab>
              {/* Tab:4 */}
              <Tab eventKey='tab-4' title='Hotel Accomodation'>
                <Table striped hover responsive className='tableHead table-dark'
                >
                  <thead>
                    <tr className='text-center thead' style={{ whiteSpace: 'nowrap' }}>
                      <th className='font'>ID</th>
                      <th className='font'>Hotel Name</th>
                      <th className='font'>City Name</th>
                      <th className='font'>No of Rooms</th>
                      <th className='font'>Room No</th>
                      <th className='font'>Check In</th>
                      <th className='font'>Check Out</th>
                      <th className='font'>Days Stayed</th>
                      <th className='font'>No of People</th>
                      <th className='font'>Action</th>
                    </tr>
                  </thead>
                  <tbody className='table-light' style={{ fontSize: '13px' }}>
                    <tr className='text-center font'>
                      <td>1</td>
                      <td>2</td>
                      <td>3</td>
                      <td>4</td>
                      <td>5</td>
                      <td>6</td>
                      <td>7</td>
                      <td>8</td>
                      <td>9</td>
                      <td><Button variant="primary" style={{marginTop:'-7px'}}><i className="bi bi-eye-fill"></i></Button></td>

                    </tr>
                  </tbody>
                </Table>
              </Tab>
              {/* Tab:5 */}
              <Tab eventKey='tab-5' title='Match Equipment Form'>
                <Table striped hover responsive className='tableHead table-dark'
                >
                  <thead>
                    <tr className='text-center thead' style={{ whiteSpace: 'nowrap' }}>
                      <th className='font'>ID</th>
                      <th className='font'>Name</th>
                      <th className='font'>Equipments</th>
                      <th className='font'>Equipments Type</th>
                      <th className='font'>Action</th>
                    </tr>
                  </thead>
                  <tbody className='table-light' style={{ fontSize: '13px' }}>
                    <tr className='text-center font'>
                      <td>1</td>
                      <td>2</td>
                      <td>3</td>
                      <td>4</td>
                      <td><Button variant="primary" style={{marginTop:'-7px'}}><i className="bi bi-eye-fill"></i></Button></td>

                    </tr>
                  </tbody>
                </Table>
              </Tab>
              {/* Tab:6 */}
              <Tab eventKey='tab-6' title='Transport Form'>
                <Table striped hover responsive className='tableHead table-dark'
                >
                  <thead>
                    <tr className='text-center thead' style={{ whiteSpace: 'nowrap' }}>
                      <th className='font'>ID</th>
                      <th className='font'>Leaving from</th>
                      <th className='font'>Going To</th>
                      <th className='font'>Date of Journey</th>
                      <th className='font'>Return Date</th>
                      <th className='font'>Bus Type</th>
                      <th className='font'>Travel Type</th>
                      <th className='font'>Transport Type</th>
                      <th className='font'>Time Slot</th>
                      <th className='font'>No of Seats Booked</th>
                      <th className='font'>Seat No</th>
                      <th className='font'>Action</th>
                    </tr>
                  </thead>
                  <tbody className='table-light' style={{ fontSize: '13px' }}>
                    <tr className='text-center font'>
                      <td>1</td>
                      <td>2</td>
                      <td>3</td>
                      <td>4</td>
                      <td>5</td>
                      <td>6</td>
                      <td>7</td>
                      <td>8</td>
                      <td>9</td>
                      <td>10</td>
                      <td>11</td>
                      <td><Button variant="primary" style={{marginTop:'-7px'}}><i className="bi bi-eye-fill"></i></Button></td>
                      
                    </tr>
                  </tbody>
                </Table>
              </Tab>
            </Tabs>
          </Row>
      
      </Container>
      {/* Tabs:end */}
    </div>
  )
}

export default ThingsTodo