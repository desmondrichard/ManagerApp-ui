import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import './Menubar.css';
import { NavLink } from 'react-router-dom';

function Menubar() {
    return (
        <div style={{ backgroundColor: 'black' }}>
            <ListGroup style={{ borderRadius: '0px' }} >
                <NavLink className='nav-bar-link text' to='/dashboard'><ListGroup.Item action variant="secondary" className='py-3 a' ><i className="bi bi-grid-fill"></i> DASHBOARD</ListGroup.Item></NavLink>
                {/*  */}
              
                <NavLink className='nav-bar-link text' to='/playerregister'><ListGroup.Item action variant="secondary" className='py-3 a' ><i className="bi bi-journal-text"></i> REGISTRATION
                {/* Arrow-Icon-close */}
                <i className="bi bi-chevron-right" style={{ float: 'right' }}></i>
                {/* sub list: */}

                </ListGroup.Item></NavLink> 

                <NavLink className='nav-bar-link text' to='/accessories'><ListGroup.Item action variant="secondary" className='py-3 a' ><i className="bi bi-bag-check-fill"></i> ACCESSORIES DISTRIBUTION</ListGroup.Item></NavLink>
                <NavLink className='nav-bar-link text' to='/playersauctionlist'><ListGroup.Item action variant="secondary" className='py-3 a' ><i className="bi bi-list-task"></i> PLAYERS AUCTION LIST</ListGroup.Item></NavLink>
                <NavLink className='nav-bar-link text' to='/fixtures'><ListGroup.Item action variant="secondary" className='py-3 a'><i className="bi bi-geo-alt-fill"></i> FIXTURES</ListGroup.Item></NavLink>
                <NavLink className='nav-bar-link text' to='/thingstodo'><ListGroup.Item action variant="secondary" className='py-3 a'><i className="bi bi-list-check"></i> THINGS TO DO</ListGroup.Item></NavLink>
                <NavLink className='nav-bar-link text' to='/accreditationcards'><ListGroup.Item action variant="secondary" className='py-3 a'><i className="bi bi-credit-card-2-back-fill"></i> ACCREDITATION CARDS</ListGroup.Item></NavLink>
                <NavLink className='nav-bar-link text' to='/history'><ListGroup.Item action variant="secondary" className='py-3 a'><i className="bi bi-clock-history"></i> HISTORY</ListGroup.Item></NavLink>
                <NavLink to='/'><ListGroup.Item action variant="secondary" className='py-2 a' style={{ position: 'absolute', bottom: 0 }}><i className="bi bi-box-arrow-left"></i> LOG OUT</ListGroup.Item></NavLink>
            </ListGroup>
        </div>
    )
}

export default Menubar;