import React, { useState, useEffect } from 'react';
import './Accessories.css';
import Header from './Header';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import FilterAccessories from './FilterAccessories';
import ExploreOptions from './ModalComponents/ExploreOptions';
import Skeleton from '@mui/material/Skeleton';
function Accessories() {

  //Data Binding:
  const [showData, setShowData] = useState(null);
  useEffect(() => {
    fetch('http://192.168.1.192/ManagerApi/GetAllDataAndImages')
      .then((data) => data.json())
      .then((data) => {
        // console.log("data",data);
        console.log("Success in getting data", data);
        setShowData(data);  // showData=data;
      })
  }, [])
  return (
    <div>
      <Header />
      <div className='text-center'>
        <div className='playersList'>ACCESSORIES LIST</div>
        <Container fluid className='py-2 mt-3 bg-light'>
          <Row>
            <Col xl={2} xs={4} md={3} lg={3}>
              <FilterAccessories />
            </Col>
            <Col xl={{ span: 2, offset: 8 }} lg={{ span: 3, offset: 6 }} md={{ span: 3, offset: 5 }} sm={{ span: 4, offset: 4 }} xs={{ span: 3 }}>
              <ExploreOptions />
            </Col>
          </Row>
        </Container>
      </div>
      {
        showData ?
          (<Table striped hover responsive className='tableHead my-3 table-dark'
          >
            <thead>
              <tr className='text-center thead' style={{ whiteSpace: 'nowrap', fontSize: '14px' }}>
                <th >S.NO</th>
                <th>PLAYER NAME</th>
                <th>JERSEY NO</th>
                <th>INITIAL PRINT</th>
                <th>TROWSER LENGTH</th>
                <th>SHORTS SIZE</th>
                <th>TRACK SUIT</th>
                <th>TRAVEL POLO</th>
                <th>HELMET</th>
                <th>BATTING PADS</th>
                <th>BATTING GLOVES</th>
                <th>WK GLOVES</th>
                <th>WK PAD</th>
                <th>SHOULDER BAG</th>

              </tr>
            </thead>
            {
              showData.map((showData, i) => {
                console.log("showData", showData)
                return (
                  < tbody className='table-light' key={i} >
                    <tr className='text-center'>
                      <td>{showData.playerData.alldataplayerId ? showData.playerData.alldataplayerId : 'N/A'}</td>
                      <td>{showData.playerData.playerName ? showData.playerData.playerName : 'N/A'}</td>
                      <td>{showData.playerData.jerseyNo ? showData.playerData.jerseyNo : 'N/A'}</td>
                      <td>{showData.playerData.initials ? showData.playerData.initials : 'N/A'}</td>
                      <td>{showData.playerData.trouserLength ? showData.playerData.trouserLength : 'N/A'}</td>
                      <td>{showData.playerData.shortsSize ? showData.playerData.shortsSize : 'N/A'}</td>
                      <td>{showData.playerData.trackSuit ? showData.playerData.trackSuit : 'N/A'}</td>
                      <td>{showData.playerData.travelPolo ? showData.playerData.travelPolo : 'N/A'}</td>
                      <td style={{ whiteSpace: 'nowrap' }}>{showData.playerData.helmet ? showData.playerData.helmet : 'N/A'}</td>
                      <td>{showData.playerData.battingPads ? showData.playerData.battingPads : 'N/A'}</td>
                      <td>{showData.playerData.battingGloves ? showData.playerData.battingGloves : 'N/A'}</td>
                      <td>{showData.playerData.wkGloves ? showData.playerData.wkGloves : 'N/A'}</td>
                      <td>{showData.playerData.wkPad ? showData.playerData.wkPad : 'N/A'}</td>
                      <td>{showData.playerData.shoulderBag ? showData.playerData.shoulderBag : 'N/A'}</td>

                    </tr>

                  </tbody>
                )
              })
            }
          </Table>) : ( <Skeleton variant="rectangular" minWidth={50} height={240} style={{marginTop:'22px'}}/>)
      }
    </div >
  )
}

export default Accessories