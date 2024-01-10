import React, { useState, useEffect } from 'react';
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
import format from 'date-fns/format';

function ThingsTodo() {
  let formattedDate = "";



  //Getting Row Index for GET:
  // const [rowIndex, setRowIndex] = useState("");

  //Data Binding:
  const [showData, setShowData] = useState(null);
  useEffect(() => {
    fetch('http://192.168.1.192/ManagerApi/register/AllDataThingsToDo')
      .then((data) => data.json())
      .then((data) => {
        // console.log("data",data);
        // console.log("Success in getting data", data);
        setShowData(data);  // showData=data;
      })
  }, [])

  //
  const handleClick1 = (id) => {
    console.log("Branding:", id)
  }

  const handleClick2 = (id) => {
    console.log("Representative", id)
  }
  return (
    <>
      <Header />
      <div className='text-center'>
        <div className='playersList'>THINGS TODO LIST</div>

        <NavLink to='/thingstodoaddlist' className='navLinks'><Button variant="primary" className='mt-3 addPlayers butn1'>
          ADD LIST
        </Button>
        </NavLink>

        <Container fluid className='py-2 mt-4 bg-light' style={{ zIndex: '-100' }}>
          <Row>
            <Col xl={{ span: 2, offset: 10 }} lg={{ span: 2, offset: 9 }} md={{ span: 4, offset: 8 }} xs={4}>
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
            <Tab eventKey='tab-0' title='BRANDING'>
              {
                showData ?
                  (
                    <Table striped hover responsive className='tableHead table-dark'
                    >
                      <thead>
                        <tr className='text-center thead' style={{ whiteSpace: 'nowrap' }}>
                          <th className='font'>S.NO</th>
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
                        {
                          showData.map((showData, i) => {
                            return (
                              <tr className='text-center font' key={i}>
                                <td>{showData.alldataThingsId ? showData.alldataThingsId : 'N/A'}</td>
                                <td>{showData.teamLogo ? showData.teamLogo : 'N/A'}</td>
                                <td>{showData.teamFlage ? showData.teamFlage : 'N/A'}</td>
                                <td>{showData.sideFlages ? showData.sideFlages : 'N/A'}</td>
                                <td>{showData.standees ? showData.standees : 'N/A'}</td>
                                <td>{showData.busBranding ? showData.busBranding : 'N/A'}</td>
                                <td>{showData.busBooking ? showData.busBooking : 'N/A'}</td>
                                <td className='btnPadding' style={{ whiteSpace: 'nowrap' }}>
                                  <NavLink to='/thingstodo/thingstodoviewcard' className='navLinks'>
                                    <Button variant="primary" style={{ marginTop: '-7px' }}
                                      onClick={() => handleClick1(showData.alldataThingsId)}
                                    ><i className="bi bi-eye-fill"></i></Button>
                                  </NavLink>
                                  <Button variant="primary" style={{ marginTop: '-7px' }}><i className="bi bi-trash"></i></Button> </td>
                              </tr>
                            )
                          })
                        }
                      </tbody>

                    </Table>
                  ) : (<h4>Loading...</h4>)
              }

            </Tab>

            {/* Tab:1 */}
            <Tab eventKey='tab-1' title='REPRESENTATIVE'>
              {
                showData ?
                  (
                    <Table striped hover responsive className='tableHead table-dark'
                    >
                      <thead>
                        <tr className='text-center thead' style={{ whiteSpace: 'nowrap' }}>
                          <th className='font'>S.NO</th>
                          <th className='font'>REPRESENTATIVES</th>
                          <th className='font'>TEAM UNIFORM</th>
                          <th className='font'>TEAM TSHIRT</th>
                          <th className='font'>ACTION</th>
                        </tr>
                      </thead>

                      <tbody className='table-light' style={{ fontSize: '13px' }}>
                        {
                          showData.map((showData, i) => {
                            return (
                              <tr className='text-center font' key={i}>
                                <td>{showData.alldataThingsId}</td>
                                <td>{showData.representatives}</td>
                                <td>{showData.teamUniform}</td>
                                <td>{showData.teamTshirt}</td>
                                <td style={{ whiteSpace: 'nowrap' }}>
                                  {/* <NavLink to='/thingstodoviewcard' className='navLinks'> */}
                                  <Button variant="primary" style={{ marginTop: '-7px' }} onClick={() => handleClick2(showData.alldataThingsId)}><i className="bi bi-eye-fill"></i></Button>
                                  {/* </NavLink>  */}
                                  <Button variant="primary" style={{ marginTop: '-7px' }}><i className="bi bi-trash"></i></Button> </td>
                              </tr>
                            )
                          })
                        }
                      </tbody>


                    </Table>
                  ) : (<h4>Loading...</h4>)
              }

            </Tab>

            {/* Tab:2 */}
            <Tab eventKey='tab-2' title='COACH THERAPIST'>
              {
                showData ?
                  (
                    <Table striped hover responsive className='tableHead table-dark'
                    >
                      <thead>
                        <tr className='text-center thead' style={{ whiteSpace: 'nowrap' }}>
                          <th className='font'>S.NO</th>
                          <th className='font'>NAME</th>
                          <th className='font'>DESIGNATION</th>
                          <th className='font'>ACTION</th>
                        </tr>
                      </thead>

                      <tbody className='table-light' style={{ fontSize: '13px' }} >
                        {
                          showData.map((showData, i) => {
                            return (
                              <tr className='text-center font' key={i}>
                                <td>{showData.alldataThingsId ? showData.alldataThingsId : 'N/A'}</td>
                                <td>{showData.name ? showData.name : 'N/A'}</td>
                                <td>{showData.designation ? showData.designation : 'N/A'}</td>
                                <td style={{ whiteSpace: 'nowrap' }}><NavLink to='/thingstodoviewcard' className='navLinks'><Button variant="primary" style={{ marginTop: '-7px' }}><i className="bi bi-eye-fill"></i></Button></NavLink> <Button variant="primary" style={{ marginTop: '-7px' }}><i className="bi bi-trash"></i></Button> </td>
                              </tr>
                            )
                          })
                        }
                      </tbody>


                    </Table>
                  ) : (<h4>Loading...</h4>)
              }

            </Tab>

            {/* Tab:3 */}
            <Tab eventKey='tab-3' title='FIXTURES'>
              {
                showData ?
                  (
                    <Table striped hover responsive className='tableHead table-dark'
                    >
                      <thead>
                        <tr className='text-center thead' style={{ whiteSpace: 'nowrap' }}>
                          <th className='font'>S.NO</th>
                          <th className='font'>DATE</th>
                          <th className='font'>GROUND NAME</th>
                          <th className='font'>TEAM A</th>
                          <th className='font'>TEAM B</th>
                          <th className='font'>ACTION</th>
                        </tr>
                      </thead>

                      <tbody className='table-light' style={{ fontSize: '13px' }}>
                        {
                          showData.map((showData, i) => {
                            return (
                              <tr className='text-center font' key={i}>
                                <td>{showData.alldataThingsId ? showData.alldataThingsId : 'N/A'}</td>
                                <td>{showData.dateTime ? formattedDate = format(
                                  new Date(showData.dateTime),
                                  'dd/MM/yyyy'
                                ) : 'N/A'}</td>
                                <td>{showData.groundName ? showData.groundName : 'N/A'}</td>
                                <td>{showData.teamA ? showData.teamA : 'N/A'}</td>
                                <td>{showData.teamB ? showData.teamB : 'N/A'}</td>
                                <td style={{ whiteSpace: 'nowrap' }}><NavLink to='/thingstodoviewcard' className='navLinks'><Button variant="primary" style={{ marginTop: '-7px' }}><i className="bi bi-eye-fill"></i></Button></NavLink> <Button variant="primary" style={{ marginTop: '-7px' }}><i className="bi bi-trash"></i></Button> </td>
                              </tr>
                            )
                          })
                        }
                      </tbody>


                    </Table>
                  ) : (<h4>Loading...</h4>)
              }

            </Tab>
            {/* Tab:4 */}
            <Tab eventKey='tab-4' title='HOTEL ACCOMODATION'>
              {
                showData ?
                  (
                    <Table striped hover responsive className='tableHead table-dark tableSticky'
                    >
                      <thead>
                        <tr className='text-center thead' style={{ whiteSpace: 'nowrap' }}>
                          <th className='font'>S.NO</th>
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

                      <tbody className='table-light' style={{ fontSize: '13px', whiteSpace: 'nowrap' }}>
                        {
                          showData.map((showData, i) => {
                            return (
                              <tr className='text-center font' key={i}>
                                <td>{showData.alldataThingsId ? showData.alldataThingsId : 'N/A'}</td>
                                <td>{showData.hotelName ? showData.hotelName : 'N/A'}</td>
                                <td>{showData.cityName ? showData.cityName : 'N/A'}</td>
                                <td>{showData.noOfRooms ? showData.noOfRooms : 'N/A'}</td>
                                <td>{showData.roomsNo ? showData.roomsNo : 'N/A'}</td>
                                <td>{showData.checkIn ? showData.checkIn : 'N/A'}</td>
                                <td>{showData.checkOut ? showData.checkOut : 'N/A'}</td>
                                <td>{showData.daysStayed ? showData.daysStayed : 'N/A'}</td>
                                <td>{showData.noOfPeople ? showData.noOfPeople : 'N/A'}</td>
                                <td style={{ whiteSpace: 'nowrap' }}><NavLink to='/thingstodoviewcard' className='navLinks'><Button variant="primary" style={{ marginTop: '-7px' }}><i className="bi bi-eye-fill"></i></Button></NavLink> <Button variant="primary" style={{ marginTop: '-7px' }}><i className="bi bi-trash"></i></Button> </td>
                              </tr>
                            )
                          })
                        }

                      </tbody>

                    </Table>
                  ) : (<h4>Loading...</h4>)
              }

            </Tab>
            {/* Tab:5 */}
            <Tab eventKey='tab-5' title='MATCH EQUIPMENT'>
              {
                showData ?
                  (
                    <Table striped hover responsive className='tableHead table-dark'
                    >
                      <thead>
                        <tr className='text-center thead' style={{ whiteSpace: 'nowrap' }}>
                          <th className='font'>S.NO</th>
                          <th className='font'>NAME</th>
                          <th className='font'>EQUIPMENTS</th>
                          <th className='font'>EQUIPMENTS TYPE</th>
                          <th className='font'>ACTION</th>
                        </tr>
                      </thead>

                      <tbody className='table-light' style={{ fontSize: '13px' }}>
                        {
                          showData.map((showData, i) => {
                            return (
                              <tr className='text-center font' key={i}>
                                <td>{showData.alldataThingsId ? showData.alldataThingsId : 'N/A'}</td>
                                <td>{showData.name ? showData.name : 'N/A'}</td>
                                <td>{showData.equipments ? showData.equipments : 'N/A'}</td>
                                <td>{showData.equipmentsType ? showData.equipmentsType : 'N/A'}</td>
                                <td style={{ whiteSpace: 'nowrap' }}><NavLink to='/thingstodoviewcard' className='navLinks'><Button variant="primary" style={{ marginTop: '-7px' }}><i className="bi bi-eye-fill"></i></Button></NavLink> <Button variant="primary" style={{ marginTop: '-7px' }}><i className="bi bi-trash"></i></Button> </td>
                              </tr>
                            )

                          })
                        }
                      </tbody>


                    </Table>
                  ) : (<h4>Loading...</h4>)
              }

            </Tab>
            {/* Tab:6 */}
            <Tab eventKey='tab-6' title='TRANSPORT FORM'>
              {
                showData ?
                  (
                    <Table striped hover responsive className='tableHead table-dark'
                    >
                      <thead>
                        <tr className='text-center thead' style={{ whiteSpace: 'nowrap' }}>
                          <th className='font'>S.NO</th>
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
                          <th className='font' style={{ whiteSpace: 'nowrap' }}>ACTION</th>
                        </tr>
                      </thead>

                      <tbody className='table-light' style={{ fontSize: '13px', whiteSpace: 'nowrap' }}>
                        {
                          showData.map((showData, i) => {
                            return (
                              <tr className='text-center font' key={i}>
                                <td>{showData.alldataThingsId ? showData.alldataThingsId : 'N/A'}</td>
                                <td>{showData.leavingFrom ? showData.leavingFrom : 'N/A'}</td>
                                <td>{showData.goingTo ? showData.goingTo : 'N/A'}</td>
                                <td>{showData.dateOfJourney ? showData.dateOfJourney : 'N/A'}</td>
                                <td>{showData.returnDate ? showData.returnDate : 'N/A'}</td>
                                <td>{showData.busType ? showData.busType : 'N/A'}</td>
                                <td>{showData.travelType ? showData.travelType : 'N/A'}</td>
                                <td>{showData.transportType ? showData.transportType : 'N/A'}</td>
                                <td>{showData.timeSlot ? showData.timeSlot : 'N/A'}</td>
                                <td>{showData.noOfSeatsBooked ? showData.noOfSeatsBooked : 'N/A'}</td>
                                <td>{showData.seatNumbers ? showData.seatNumbers : 'N/A'}</td>
                                <td style={{ whiteSpace: 'nowrap' }}><NavLink to='/thingstodoviewcard' className='navLinks'><Button variant="primary" style={{ marginTop: '-7px' }}><i className="bi bi-eye-fill"></i></Button></NavLink> <Button variant="primary" style={{ marginTop: '-7px' }}><i className="bi bi-trash"></i></Button> </td>
                              </tr>
                            )
                          })
                        }

                      </tbody>

                    </Table>
                  ) : (<h4>Loading...</h4>)
              }

            </Tab>
          </Tabs>
        </Row>

      </Container>
      {/* Tabs:end */}
    </>
  )
}

export default ThingsTodo