import React from 'react';
import './Accreditationcard.css';
import Header from './Header';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import YearAccessories from './YearAccessories';
import ExploreOptions from './ModalComponents/ExploreOptions';
import { Tab, Tabs } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { NavLink } from 'react-router-dom';
function Accreditationcard() {

  return (
    <div>
      <Header />
      <div className='text-center'>
        <div className='playersList'>ACCREDITION LIST</div>
        
        <>
          <NavLink to='/accreditionform' className='navLinks'><Button variant="primary" className='mt-3 addPlayers'>
            ADD PLAYERS
          </Button>
          </NavLink>
        </>

        <Container fluid className='py-2 mt-4 bg-light'>
          <Row>
            <Col md={2} sm={4}>
              <YearAccessories />
            </Col>
            <Col md={2} sm={3}>
              <ExploreOptions />
            </Col>
          </Row>
        </Container>
      </div>
      <Container fluid className='p-0 m-0 mt-2'>
        <Row style={{ margin: '0px' }}>
          <Tabs justify variant='pills' defaultkey='tab-1' className='mb-1 p-0 tab ms-2'>
            {/* Tab:1 */}
            <Tab eventKey='tab-1' title='Players' >
               {/* Tab1 content */}          
              <Table striped hover responsive className='tableHead table-dark'
              >
                <thead>
                  <tr className='text-center thead' style={{ whiteSpace: 'nowrap' }}>
                    <th className='font'>Name</th>
                    <th className='font'>Designation</th>
                    <th className='font'>Mobile No</th>
                    <th className='font'>Email</th>
                    <th className='font'>Duty Pass</th>
                    <th className='font'>Year</th>

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
                  </tr>
                </tbody>
              </Table>
            </Tab>


            {/* Tab:2 */}
            <Tab eventKey='tab-2' title='Support Staffs'>
              <Table striped hover responsive className='tableHead table-dark'
              >
                <thead>
                  <tr className='text-center thead' style={{ whiteSpace: 'nowrap' }}>
                    <th className='font'>Name</th>
                    <th className='font'>Designation</th>
                    <th className='font'>Mobile No</th>
                    <th className='font'>Email</th>
                    <th className='font'>Duty Pass</th>
                    <th className='font'>Year</th>

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
                  </tr>
                </tbody>
              </Table>
            </Tab>

            {/* Tab:3 */}
            <Tab eventKey='tab-3' title='Owner/Management'>
              <Table striped hover responsive className='tableHead table-dark'
              >
                <thead>
                  <tr className='text-center thead' style={{ whiteSpace: 'nowrap' }}>
                    <th className='font'>Name</th>
                    <th className='font'>Designation</th>
                    <th className='font'>Year</th>
                  </tr>
                </thead>
                <tbody className='table-light' style={{ fontSize: '13px' }}>
                  <tr className='text-center font'>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                  </tr>
                </tbody>
              </Table>
            </Tab>

            {/* Tab:4 */}
            <Tab eventKey='tab-4' title='Franchise Officials'>
              <Table striped hover responsive className='tableHead table-dark'
              >
                <thead>
                  <tr className='text-center thead' style={{ whiteSpace: 'nowrap' }}>
                    <th className='font'>Name</th>
                    <th className='font'>Designation</th>
                    <th className='font'>Mobile No</th>
                    <th className='font'>Email</th>
                    <th className='font'>Duty Pass</th>
                    <th className='font'>Year</th>

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
                  </tr>
                </tbody>
              </Table>
            </Tab>


            {/* Tab:5 */}
            <Tab eventKey='tab-5' title='Franchise Sponsors'>
              <Table striped hover responsive className='tableHead table-dark'
              >
                <thead>
                  <tr className='text-center thead' style={{ whiteSpace: 'nowrap' }}>
                    <th className='font'>Name</th>
                    <th className='font'>Designation</th>
                    <th className='font'>Mobile No</th>
                    <th className='font'>Email</th>
                    <th className='font'>Duty Pass</th>
                    <th className='font'>Year</th>

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
                  </tr>
                </tbody>
              </Table>
            </Tab>

          </Tabs>
        </Row>
      </Container>
    </div>
  )
}

export default Accreditationcard