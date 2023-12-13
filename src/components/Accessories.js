import React from 'react';
import './Accessories.css';
import Header from './Header';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import YearAccessories from './YearAccessories';
import FilterAccessories from './FilterAccessories';
function Accessories() {
  return (
    <div>
      <Header />
      <div className='text-center'>
        <div className='playersList'>ACCESSORIES LIST</div>
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
            <th>Jersey No</th>
            <th>Initial Print</th>
            <th>Trowser Length</th>
            <th>Shorts Size</th>
            <th>Track Suit</th>
            <th>Travel Polo</th>
            <th>Helmet</th>
            <th>Batting Pads</th>
            <th>Batting Gloves</th>
            <th>WK Gloves</th>
            <th>WK Pad</th>
            <th>Shoulder Bag</th>
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
            <th>8</th>
            <th>9</th>
            <th>10</th>
            <th>11</th>
            <th>12</th>
            <th>13</th>
            <th>14</th>
            <th>15</th>
          </tr>

        </tbody>
      </Table>
    </div>
  )
}

export default Accessories