import React from 'react';
import './PlayersAuctionList.css';
import Header from './Header';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import YearAccessories from './YearAccessories';
import FilterAccessories from './FilterAccessories';
function PlayersAuctionList() {
  return (
    <div>
      <Header />
      <div className='text-center'>
        <div className='playersList'>AUCTION LIST</div>
        <Container fluid className='py-2 mt-3 bg-light'>
          <Row>
            <Col md={2} xs={6}>
              <FilterAccessories />
            </Col>
            <Col md={2} xs={6}>
              <YearAccessories />
            </Col>
            <Col md={7}></Col>
          </Row>
        </Container>
      </div>
      <Table striped hover responsive className='tableHead my-3 table-dark'
      >
        <thead>
          <tr className='text-center thead' style={{ whiteSpace: 'nowrap' }}>
            <th >ID</th>
            <th>Player Name</th>
            <th>DOB</th>
            <th>Price</th>
            <th>Category</th>
            <th>Role</th>
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
            <th>6</th>
            <th>7</th>
          </tr>

        </tbody>
      </Table>
    </div>
  )
}

export default PlayersAuctionList