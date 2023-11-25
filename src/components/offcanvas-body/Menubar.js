import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import './Menubar.css';

function Menubar() {
    return (
        <div style={{ backgroundColor: 'black' }}>
            <ListGroup style={{ borderRadius: '0px' }} >
                <ListGroup.Item action variant="secondary" className='py-3 a' ><i className="bi bi-grid-fill"></i> DASHBOARD</ListGroup.Item>
                {/*  */}

                <ListGroup.Item action variant="secondary"  className='py-3 a' ><i className="bi bi-journal-text"></i> REGISTRATION                          
                    <i className="bi bi-chevron-right" style={{ float: 'right' }}></i>  
                              
                    {/* <ListGroup id='submenu' data-bs-parent='#parentM' className='collapse'>
                    <ListGroup.Item>item1</ListGroup.Item>
                    <ListGroup.Item>item2</ListGroup.Item> 
                    </ListGroup> */}
              
                </ListGroup.Item>
                <ListGroup.Item action variant="secondary" className='py-3 a' ><i className="bi bi-bag-check-fill"></i> ACCESSORIES DISTRIBUTION</ListGroup.Item>
                <ListGroup.Item action variant="secondary" className='py-3 a' ><i className="bi bi-list-task"></i> PLAYERS AUCTION LIST</ListGroup.Item>
                <ListGroup.Item action variant="secondary" className='py-3 a'><i className="bi bi-geo-alt-fill"></i> FIXTURES</ListGroup.Item>
                <ListGroup.Item action variant="secondary" className='py-3 a'><i className="bi bi-list-check"></i> THINGS TO DO</ListGroup.Item>
                <ListGroup.Item action variant="secondary" className='py-3 a'><i className="bi bi-credit-card-2-back-fill"></i> ACCREDITATION CARDS</ListGroup.Item>
                <ListGroup.Item action variant="secondary" className='py-3 a'><i className="bi bi-clock-history"></i> HISTORY</ListGroup.Item>
                <ListGroup.Item action variant="secondary" className='py-3 a' style={{ position: 'absolute', bottom: 0 }}><i className="bi bi-box-arrow-left"></i> LOG OUT</ListGroup.Item>
            </ListGroup>
        </div>
    )
}

export default Menubar