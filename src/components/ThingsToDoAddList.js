import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Tab, Tabs } from 'react-bootstrap';
import Header from './Header';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ThingsToDoRepresentatives from './ThingsTodoSubForms/ThingsToDoRepresentatives';
import ThingsToDoBranding from './ThingsTodoSubForms/ThingsToDoBranding';
import ThingsToDoPhysiotherapist from './ThingsTodoSubForms/ThingsToDoPhysiotherapist';
import ThingsToDoFixtures from './ThingsTodoSubForms/ThingsToDoFixtures';
import ThingsToDoHotelAccomodation from './ThingsTodoSubForms/ThingsToDoHotelAccomodation';
import ThingsToDoMatchEquipments from './ThingsTodoSubForms/ThingsToDoMatchEquipments';
import ThingsToDoTransport from './ThingsTodoSubForms/ThingsToDoTransport';
import './ThingsToDoAddList.css';
function ThingsToDoAddList() {
    return (
        <div>
            <>
                <Header />
            </>
            <div className='text-center'>
                <div className='playersList'>THINGS TODO FORM</div>
            </div>
            <NavLink to='/thingstodo' className='navLinks'><Button variant="primary" className='mt-3 addPlayers butn1'>
                Go Back
            </Button>
            </NavLink>
            <Container fluid className='p-0 mt-2'>
                <Row style={{ margin: '0px' }}>
                    <Tabs justify variant='pills' defaultkey='tab-1' className='mb-1 p-0 tab'>
                        {/* Tab:1 */}
                        <Tab eventKey='tab-1' title='REPRESENTATIVES' >
                            {/* Tab1 content */}
                            <ThingsToDoRepresentatives />
                        </Tab>

                        {/* Tab:2 */}
                        <Tab eventKey='tab-2' title='BRANDING'>
                            <ThingsToDoBranding />
                        </Tab>

                        {/* Tab:3 */}
                        <Tab eventKey='tab-3' title='COACH PHYSIOTHERAPIST' style={{ whiteSpace: 'nowrap' }}>
                            <ThingsToDoPhysiotherapist />
                        </Tab>

                        {/* Tab:4 */}
                        <Tab eventKey='tab-4' title='FIXTURES'>
                            <ThingsToDoFixtures />
                        </Tab>


                        {/* Tab:5 */}
                        <Tab eventKey='tab-5' title='HOTEL ACCOMODATION'>
                            <ThingsToDoHotelAccomodation />
                        </Tab>

                        <Tab eventKey='tab-6' title='EQUIPMENT REQUIREMENTS'>
                            <ThingsToDoMatchEquipments />
                        </Tab>
                        <Tab eventKey='tab-7' title='TRANSPORT INFORMATION'>
                            <ThingsToDoTransport />
                        </Tab>
                    </Tabs>
                </Row>
            </Container>

        </div>
    )
}

export default ThingsToDoAddList