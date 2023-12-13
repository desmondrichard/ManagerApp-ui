import React from 'react';
import './Fixtures.css';
import Header from './Header';
import Table from 'react-bootstrap/Table';

function Fixtures() {
  return (
    <div>
      <Header />
      <div className='text-center'>
        <div className='playersList'>FIXTURES LIST</div>
       
      </div>
      <Table striped hover responsive className='tableHead my-3 table-dark'
      >
        <thead>
          <tr className='text-center thead' style={{ whiteSpace: 'nowrap' }}>
            <th >DateTime</th>
            <th>GroundName</th>
            <th>Team A</th>
            <th>Team B</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody className='table-light'>
          <tr className='text-center'>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default Fixtures