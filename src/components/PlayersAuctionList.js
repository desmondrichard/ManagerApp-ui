import React, { useEffect, useState } from 'react';
import './PlayersAuctionList.css';
import Header from './Header';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import FilterAccessories from './FilterAccessories';
import ExploreOptions from './ModalComponents/ExploreOptions';
import format from 'date-fns/format';
import Skeleton from '@mui/material/Skeleton';
function PlayersAuctionList() {
  var formattedDate = '';
  //Data Binding:
  const [showData, setShowData] = useState(null);
  useEffect(() => {
    fetch('http://192.168.1.192/ManagerApi/GetAllDataAndImages')
      .then((data) => data.json())
      .then((data) => {
        // console.log("data",data);
        // console.log("Success in getting players data", data);
        setShowData(data);  // showData=data;
      })
  }, [])
  return (
    <div>
      <Header />
      <div className='text-center'>
        <div className='playersList'>AUCTION LIST</div>
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
          (
            <Table striped hover responsive className='tableHead my-3 table-dark'
            >
              <thead>

                <tr className='text-center thead' style={{ whiteSpace: 'nowrap', fontSize: '14px' }}>
                  <th >S.NO</th>
                  <th>PLAYER NAME</th>
                  <th>DOB</th>
                  <th>PRICE</th>
                  <th>CATEGORY</th>
                  <th>ROLE</th>
                  {/* <th>Year</th> */}

                </tr>
              </thead>
              {
                showData.map((showData, i) => {
                  return (
                    <tbody className='table-light' key={i}>
                      <tr className='text-center'>
                        <td>{showData.playerData.alldataplayerId ? showData.playerData.alldataplayerId : 'N/A'}</td>
                        <td>{showData.playerData.playerName ? showData.playerData.playerName : 'N/A'}</td>
                        <td>
                          {showData.playerData.dateOfBirth ? formattedDate = format(new Date(showData.playerData.dateOfBirth),
                            'MMMM dd yyyy') : 'N/A'}
                        </td>
                        <td>4</td>
                        <td>5</td>
                        <td>6</td>
                        {/* <th>7</th> */}
                      </tr>
                    </tbody>
                  )
                })
              }

            </Table>
          ) : (<Skeleton variant="rectangular" minWidth={50} height={240} style={{ marginTop: '22px' }} />)
      }

    </div>
  )
}

export default PlayersAuctionList