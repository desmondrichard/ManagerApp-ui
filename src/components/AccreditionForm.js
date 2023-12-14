import React from 'react';
import Header from './Header';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './AccreditionForm.css';
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


        </div>

    )
}

export default AccreditionForm