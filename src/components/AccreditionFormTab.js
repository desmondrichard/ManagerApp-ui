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
            <Tab eventKey='tab-1' title='Players'>
              <AccreadPlayers />
            </Tab>
            {/* Tab:2 */}
            <Tab eventKey='tab-2' title='Support Staffs'>
              <AccreadSupportStaffs />
            </Tab>
            {/* Tab:3 */}
            <Tab eventKey='tab-3' title='Owners/Management'>
              <AccreadOwners />
            </Tab>
            {/* Tab:4 */}
            <Tab eventKey='tab-4' title='Franchise Officials'>
              <AccreadFranchiseOfficials />
            </Tab>
            {/* Tab:5 */}
            <Tab eventKey='tab-5' title='Franchise Sponsors'>
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