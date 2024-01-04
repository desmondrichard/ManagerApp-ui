import React from 'react';
import './PlayersAuctionList.css';
import Header from './Header';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import FilterAccessories from './FilterAccessories';
import ExploreOptions from './ModalComponents/ExploreOptions';
function PlayersAuctionList() {
  return (
    <div>
      <Header />
      <div className='text-center'>
        <div className='playersList'>AUCTION LIST</div>
        <Container fluid className='py-2 mt-3 bg-light'>
          <Row>
            <Col xs={12} md={3} lg={2}>
              <FilterAccessories />
            </Col>
            <Col md={6} lg={8}>

            </Col>
            <Col xs={12} md={3} lg={2}>
              <ExploreOptions />
            </Col>
          </Row>
        </Container>
      </div>
      <Table striped hover responsive className='tableHead my-3 table-dark'
      >
        <thead>
          <tr className='text-center thead' style={{ whiteSpace: 'nowrap',fontSize:'14px' }}>
            <th >SL.NO</th>
            <th>PLAYER NAME</th>
            <th>DOB</th>
            <th>PRICE</th>
            <th>CATEGORY</th>
            <th>ROLE</th>
            {/* <th>Year</th> */}

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
            {/* <th>7</th> */}
          </tr>

        </tbody>
      </Table>
    </div>
  )
}

export default PlayersAuctionList