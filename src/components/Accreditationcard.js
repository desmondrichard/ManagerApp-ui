import React, { useEffect, useState } from 'react';
import './Accreditationcard.css';
import Header from './Header';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ExploreOptions from './ModalComponents/ExploreOptions';
import { Tab, Tabs } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { NavLink } from 'react-router-dom';

function Accreditationcard() {
  //Data Binding:
  const [showData, setShowData] = useState(null);
  useEffect(() => {
    fetch('http://192.168.1.192/ManagerApi/AllDataAccreadiation')
      .then((data) => data.json())
      .then((data) => {
        // console.log("data",data);
        console.log("Success in getting Accreadiation data", data);
        setShowData(data);  // showData=data;
      })
  }, [])
  return (
    <div>
      <Header />
      <div className='text-center'>
        <div className='playersList'>ACCREADIATION LIST</div>

        <>
          <NavLink to='/accreditionform' className='navLinks'><Button variant="primary" className='mt-3 addPlayers'>
            ADD PLAYERS
          </Button>
          </NavLink>
        </>

        <Container fluid className='py-2 mt-4 bg-light'>
          <Row>
            <Col xs={12} sm={{ span: 4, offset: 8 }} md={{ span: 3, offset: 9 }} lg={{ span: 2, offset: 10 }}>
              <ExploreOptions />
            </Col>
          </Row>
        </Container>
      </div>
      <Container fluid className='p-0 m-0 mt-2'>
        <Row style={{ margin: '0px' }}>
          <Tabs justify variant='pills' defaultkey='tab-1' className='mb-1 p-0 tab ms-2'>
            {/* Tab:1 */}
            <Tab eventKey='tab-1' title='PLAYERS' >
              {/* Tab1 content */}
              {
                showData ?
                  (
                    <Table striped hover responsive className='tableHead table-dark'
                    >
                      <thead>
                        <tr className='text-center thead' style={{ whiteSpace: 'nowrap' }}>
                          <th className='font'>NAME</th>
                          <th className='font'>DESIGNATION</th>
                          <th className='font'>MOBILE NO</th>
                          <th className='font'>EMAIL</th>
                          <th className='font'>DUTY PASS</th>
                        </tr>
                      </thead>
                      {
                        showData.map((showData, i) => {
                          return (
                            <tbody className='table-light' style={{ fontSize: '13px' }} key={i}>
                              <tr className='text-center font'>
                                <td>{showData.playersName ? showData.playersName : 'N/A'}</td>
                                <td>{showData.playersDesignation ? showData.playersDesignation : 'N/A'}</td>
                                <td>{showData.playersMobilNo ? showData.playersMobilNo : 'N/A'}</td>
                                <td>{showData.playersEmailId ? showData.playersEmailId : 'N/A'}</td>
                                <td>{showData.playersDutyPass ? showData.playersDutyPass : 'N/A'}</td>
                              </tr>
                            </tbody>
                          )
                        })
                      }

                    </Table>

                  ) : (<h4>Loading...</h4>)
              }

            </Tab>


            {/* Tab:2 */}
            <Tab eventKey='tab-2' title='SUPPORT STAFFS'>
              {
                showData ?
                  (
                    <Table striped hover responsive className='tableHead table-dark'
                    >
                      <thead>
                        <tr className='text-center thead' style={{ whiteSpace: 'nowrap' }}>
                          <th className='font'>NAME</th>
                          <th className='font'>DESIGNATION</th>
                          <th className='font'>MOBILE NO</th>
                          <th className='font'>EMAIL</th>
                          <th className='font'>DUTY PASS</th>

                        </tr>
                      </thead>
                      {
                        showData.map((showData, i) => {
                          return (
                            <tbody className='table-light' style={{ fontSize: '13px' }} key={i}>
                              <tr className='text-center font'>
                                <td>{showData.staffName}</td>
                                <td>{showData.staffDesignation}</td>
                                <td>{showData.staffMobilNo}</td>
                                <td>{showData.staffEmailId}</td>
                                <td>N/A</td>
                              </tr>
                            </tbody>
                          )
                        })
                      }

                    </Table>
                  ) : (<h4>Loading...</h4>)
              }

            </Tab>

            {/* Tab:3 */}
            <Tab eventKey='tab-3' title='OWNER/MANAGEMENT'>
              {
                showData ?
                  (
                    <Table striped hover responsive className='tableHead table-dark'
                    >
                      <thead>
                        <tr className='text-center thead' style={{ whiteSpace: 'nowrap' }}>
                          <th className='font'>NAME</th>
                          <th className='font'>DESIGNATION</th>
                          <th className='font'>MOBILE NO</th>
                          <th className='font'>EMAIL</th>
                        </tr>
                      </thead>
                      {
                        showData.map((showData, i) => {
                          return (
                            <tbody className='table-light' style={{ fontSize: '13px' }} key={i}>
                              <tr className='text-center font'>
                                <td>{showData.ownerName ? showData.ownerName : 'N/A'}</td>
                                <td>{showData.ownerDesignation ? showData.ownerDesignation : 'N/A'}</td>
                                <td>{showData.ownerMobilNo ? showData.ownerMobilNo : 'N/A'}</td>
                                <td>{showData.ownerEmailId ? showData.ownerEmailId : 'N/A'}</td>
                              </tr>
                            </tbody>
                          )
                        })
                      }
                    </Table>) : (<h4>Loading...</h4>)
              }

            </Tab>

            {/* Tab:4 */}
            <Tab eventKey='tab-4' title='FRANCHISE OFFICIALS'>
              {
                showData ?
                  (
                    <Table striped hover responsive className='tableHead table-dark'
                    >
                      <thead>
                        <tr className='text-center thead' style={{ whiteSpace: 'nowrap' }}>
                          <th className='font'>NAME</th>
                          <th className='font'>DESIGNATION</th>
                          <th className='font'>MOBILE NO</th>
                          <th className='font'>EMAIL</th>

                        </tr>
                      </thead>
                      {
                        showData.map((showData, i) => {
                          return (
                            <tbody className='table-light' style={{ fontSize: '13px' }}>
                              <tr className='text-center font'>
                                <td>{showData.officialName ? showData.officialName : 'N/A'}</td>
                                <td>{showData.officialDesignation ? showData.officialDesignation : 'N/A'}</td>
                                <td>{showData.officialMobilNo ? showData.officialMobilNo : 'N/A'}</td>
                                <td>{showData.officialEmailId ? showData.officialEmailId : 'N/A'}</td>
                              </tr>
                            </tbody>
                          )
                        })
                      }

                    </Table>
                  ) : (<h4>Loading...</h4>)
              }

            </Tab>


            {/* Tab:5 */}
            <Tab eventKey='tab-5' title='FRANCHISE SPONSORS'>
              {
                showData ?
                  (
                    <Table striped hover responsive className='tableHead table-dark'
                    >
                      <thead>
                        <tr className='text-center thead' style={{ whiteSpace: 'nowrap' }}>
                          <th className='font'>NAME</th>
                          <th className='font'>DESIGNATION</th>
                          <th className='font'>MOBILE NO</th>
                          <th className='font'>EMAIL</th>
                        </tr>
                      </thead>
                      {
                        showData.map((showData, i) => {
                          return (
                            <tbody className='table-light' style={{ fontSize: '13px' }} key={i}>
                              <tr className='text-center font'>
                                <td>{showData.sponsorName ? showData.sponsorName : 'N/A'}</td>
                                <td>{showData.sponsorDesignation ? showData.sponsorDesignation : 'N/A'}</td>
                                <td>{showData.sponsorMobilNo ? showData.sponsorMobilNo : 'N/A'}</td>
                                <td>{showData.sponsorEmailId ? showData.sponsorEmailId : 'N/A'}</td>
                              </tr>
                            </tbody>
                          )
                        })
                      }

                    </Table>
                  ) : (<h4>Loading...</h4>)
              }

            </Tab>

          </Tabs>
        </Row>
      </Container>
    </div>
  )
}

export default Accreditationcard