import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './AccreditionFormTab.css';
import AccreadPlayers from './Accreadiation/AccreadPlayers';
import AccreadSupportStaffs from './Accreadiation/AccreadSupportStaffs';
import AccreadOwners from './Accreadiation/AccreadOwners';
import AccreadFranchiseOfficials from './Accreadiation/AccreadFranchiseOfficials';
import AccreadFranchiseSponsors from './Accreadiation/AccreadFranchiseSponsors';

function AccreditionFormTab() {
  return (
    <div className='my-2'>
      {/* Tabs: start*/}
      <Container fluid >
        <Row style={{ margin: '0px' }}>
          <Tabs justify variant='pills' defaultkey='tab-1' className='mb-1 p-0 tab'>
            {/* Tab:1 */}
            <Tab eventKey='0' title='Players'>
              <AccreadPlayers />
            </Tab>
            {/* Tab:2 */}
            <Tab eventKey='1' title='Support Staffs'>
              <AccreadSupportStaffs />
            </Tab>
            {/* Tab:3 */}
            <Tab eventKey='2' title='Owners/Management'>
              <AccreadOwners />
            </Tab>
            {/* Tab:4 */}
            <Tab eventKey='3' title='Franchise Officials'>
              <AccreadFranchiseOfficials />
            </Tab>
            {/* Tab:5 */}
            <Tab eventKey='4' title='Franchise Sponsors'>
              <AccreadFranchiseSponsors />
            </Tab>

          </Tabs>
        </Row>

      </Container>
      {/* Tabs:end */}
    </div>
  )
}

export default AccreditionFormTab