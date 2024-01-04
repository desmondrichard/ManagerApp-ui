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
                      <th className='font'>SL.NO</th>
                      <th className='font'>TEAM LOGO</th>
                      <th className='font'>TEAM FLAGE</th>
                      <th className='font'>SIDE FLAGES</th>
                      <th className='font'>STANDEES</th>
                      <th className='font'>BUS BRANDING</th>
                      <th className='font'>BUS BOOKING</th>
                      <th className='font'>ACTION</th>

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
                      <th className='font'>SL.NO</th>
                      <th className='font'>REPRESENTATIVES</th>
                      <th className='font'>TEAM UNIFORM</th>
                      <th className='font'>TEAM TSHIRT</th>
                      <th className='font'>ACTION</th>

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
                      <th className='font'>SL.NO</th>
                      <th className='font'>NAME</th>
                      <th className='font'>DESIGNATION</th>
                      <th className='font'>ACTION</th>
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
                      <th className='font'>SL.NO</th>
                      <th className='font'>DATE</th>
                      <th className='font'>GROUND NAME</th>
                      <th className='font'>TEAM A</th>
                      <th className='font'>TEAM B</th>
                      <th className='font'>ACTION</th>
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
                      <th className='font'>SL.NO</th>
                      <th className='font'>HOTEL NAME</th>
                      <th className='font'>CITY NAME</th>
                      <th className='font'>NO OF ROOMS</th>
                      <th className='font'>ROOM NO</th>
                      <th className='font'>CHECK IN</th>
                      <th className='font'>CHECK OUT</th>
                      <th className='font'>DAYS STAYED</th>
                      <th className='font'>NO OF PEOPLE</th>
                      <th className='font'>ACTION</th>
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
                      <th className='font'>SL.NO</th>
                      <th className='font'>NAME</th>
                      <th className='font'>EQUIPMENTS</th>
                      <th className='font'>EQUIPMENTS TYPE</th>
                      <th className='font'>ACTION</th>
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
                      <th className='font'>SL.NO</th>
                      <th className='font'>LEAVING FROM</th>
                      <th className='font'>GOING TO</th>
                      <th className='font'>DATE OF JOURNEY</th>
                      <th className='font'>RETURN DATE</th>
                      <th className='font'>BUS TYPE</th>
                      <th className='font'>TRAVEL TYPE</th>
                      <th className='font'>TRANSPORT TYPE</th>
                      <th className='font'>TIME SLOT</th>
                      <th className='font'>NO OF SEATS BOOKED</th>
                      <th className='font'>SEAT NO</th>
                      <th className='font'>ACTION</th>
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