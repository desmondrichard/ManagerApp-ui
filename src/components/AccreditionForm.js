import React from 'react';
import Header from './Header';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './AccreditionForm.css';
import AccreditionFormTab from './AccreditionFormTab';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import YearAccessories from './YearAccessories';
import ExploreOptions from './ModalComponents/ExploreOptions';

function AccreditionForm() {
    return (
        <div>
            <Header />
            <div className='text-center'>
                <div className='playersList'>ACCREDITION FORM</div>
            </div>
            <NavLink to='/accreditationcards' className='navLinks'><Button variant="primary" className='mt-3 addPlayers butn1'>
                Go Back
            </Button>
            </NavLink>
            <Container fluid className='py-2 mt-4 bg-light'>
                <Row>
                    <Col md={3} lg={2} className='me-3'>
                        <YearAccessories />
                    </Col>
                    <Col md={3} lg={3}>
                        <ExploreOptions />
                    </Col>
                </Row>
            </Container>
            <AccreditionFormTab />
        </div>

    )
}

export default AccreditionForm